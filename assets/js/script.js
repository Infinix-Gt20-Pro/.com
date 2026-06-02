/* assets/js/script.js */

// Always dark mode
document.documentElement.setAttribute('data-theme', 'dark');

document.querySelectorAll('#footer-year, .footer-year-d').forEach(el => el.textContent = new Date().getFullYear());

function getLatestDate(os) {
  let latest = 0;
  if (os.downloads) {
    os.downloads.forEach(group => {
      if (group.items) {
        group.items.forEach(item => {
          if (item.date) {
            const time = new Date(item.date).getTime();
            if (time > latest) latest = time;
          }
        });
      }
    });
  }
  return latest;
}

function populateHomeDeviceFilter() {
  const allDevices = new Set();
  OS_DATA.forEach(os => {
    if (!os.hide && os.downloads) {
      os.downloads.forEach(group => {
        if (group.items) {
          group.items.forEach(item => {
            if (item.device) allDevices.add(item.device);
          });
        }
      });
    }
  });
  
  const uniqueDevices = Array.from(allDevices).sort();
  const container = document.getElementById('home-device-filter-container');
  if (container && uniqueDevices.length > 0) {
    container.innerHTML = `
      <select id="home-device-select" class="filter-select" onchange="buildCards(this.value)">
        <option value="all">All Devices</option>
        ${uniqueDevices.map(d => `<option value="${d}">${d}</option>`).join('')}
      </select>
    `;
  }
}

function buildCards(deviceFilter = 'all') {
  const romsContainer = document.getElementById('cards-container');
  const recsContainer = document.getElementById('recoveries-container');
  
  if (!romsContainer) return;
  romsContainer.innerHTML = '';
  if (recsContainer) recsContainer.innerHTML = '';
  
  const visibleOS = OS_DATA.filter(os => !os.hide).sort((a, b) => {
    return getLatestDate(b) - getLatestDate(a);
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let cardsRendered = 0;

  visibleOS.forEach(os => {
    let totalDownloads = 0;
    let tags = new Set();
    let latestTime = 0;

    if (os.downloads) {
      os.downloads.forEach(group => {
        if (group.items) {
          const validItems = group.items.filter(item => deviceFilter === 'all' || item.device === deviceFilter);
          totalDownloads += validItems.length;
          
          validItems.forEach(item => {
            if (item.tag) tags.add(item.tag.toLowerCase());
            if (item.date) {
              const time = new Date(item.date).getTime();
              if (time > latestTime) latestTime = time;
            }
          });
        }
      });
    }

    if (deviceFilter !== 'all' && totalDownloads === 0) return;

    if (deviceFilter === 'all') {
      latestTime = getLatestDate(os);
    }

    let isNew = false;
    let formattedDate = "Unknown";
    
    if (latestTime > 0) {
      const uploadDateObj = new Date(latestTime);
      uploadDateObj.setHours(0, 0, 0, 0);
      isNew = uploadDateObj.getTime() === today.getTime();
      formattedDate = new Date(latestTime).toISOString().split('T')[0];
    }

    let statusBadgeHTML = '';
    if (tags.has('stable')) {
      statusBadgeHTML = `<div class="card-badge stable">STABLE</div>`;
    } else if (tags.has('pre') || tags.has('alpha')) {
      statusBadgeHTML = `<div class="card-badge pre-release">PRE-RELEASE</div>`;
    } else if (tags.has('beta')) {
      statusBadgeHTML = `<div class="card-badge beta">BETA</div>`;
    }

    let newBadgeHTML = isNew ? `<div class="card-badge new">NEW</div>` : '';
    let finalBadges = newBadgeHTML + statusBadgeHTML;

    const card = document.createElement('div');
    card.className = 'os-card';
    card.style.animationDelay = `${cardsRendered * 0.08}s`;
    card.onclick = () => navigateToOS(os.id);
    
    const isRec = os.id === 'recoveries';
    const releaseText = isRec ? 'recovery' : 'release';
    const countHTML = totalDownloads > 0 ? `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg> 
      ${totalDownloads} ${releaseText}${totalDownloads !== 1 ? 's' : ''} available
    ` : `
      <span style="color: var(--accent); font-weight: 600; font-family: 'Space Grotesk', sans-serif; letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.78rem;">Coming Soon</span>
    `;

    card.innerHTML = `
      <div class="card-img">
        <img src="${os.image}" alt="${os.name}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'" />
        <div class="card-img-overlay"></div>
        <div class="badges-container">
          ${finalBadges}
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${os.name}</div>
        <div class="card-desc">${os.shortDesc}</div>
        <div class="card-footer">
          <div class="card-count">
            ${countHTML}
          </div>
          ${totalDownloads > 0 ? `<div class="card-date">${formattedDate}</div>` : ''}
        </div>
      </div>
    `;
    
    if (isRec && recsContainer) {
      recsContainer.appendChild(card);
    } else {
      romsContainer.appendChild(card);
    }
    cardsRendered++;
  });
}

function navigateHome() {
  window.location.hash = '';
}

function navigateGuide() {
  window.location.hash = 'guide';
}

function navigateToOS(id) {
  window.location.hash = `os-${id}`;
}

function handleRouting() {
  const hash = window.location.hash;
  if (hash === '#guide') {
    document.getElementById('page-home').classList.remove('active');
    document.getElementById('page-detail').classList.remove('active');
    const guidePage = document.getElementById('page-guide');
    if (guidePage) guidePage.classList.add('active');
    window.scrollTo(0, 0);
  } else if (hash.startsWith('#os-')) {
    const osId = hash.replace('#os-', '');
    renderOSDetail(osId);
  } else {
    document.getElementById('page-detail').classList.remove('active');
    const guidePage = document.getElementById('page-guide');
    if (guidePage) guidePage.classList.remove('active');
    document.getElementById('page-home').classList.add('active');
    window.scrollTo(0, 0);
  }
}

function renderOSDetail(id) {
  const os = OS_DATA.find(o => o.id === id);
  if (!os) {
    navigateHome();
    return;
  }

  const detailContent = document.getElementById('detail-content');
  if (!detailContent) return;

  const isRec = os.id === 'recoveries';
  const getButtonLabel = isRec ? 'Get Recovery' : 'Get ROM';

  // Build dynamic download list grouped by stable/beta
  let downloadsHTML = '';
  if (os.downloads && os.downloads.length > 0) {
    os.downloads.forEach(group => {
      downloadsHTML += `
        <div class="download-group">
          <div class="download-group-header">${group.group}</div>
          ${group.items.map(item => `
            <div class="download-item-row">
              <div class="dl-item-meta">
                <div class="dl-item-name">${item.name} (${item.version})</div>
                <div class="dl-item-details">${item.device} . ${item.meta} . Mapped on ${item.date}</div>
              </div>
              <div class="dl-item-actions">
                ${(item.url === '#' || !item.url) ? `
                  <button class="btn-dl secondary disabled" style="cursor: not-allowed; opacity: 0.5;">
                    Coming Soon
                  </button>
                ` : `
                  <button class="btn-dl primary" onclick="triggerDownload('${item.url}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    ${getButtonLabel}
                  </button>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    });
  } else {
    downloadsHTML = `
      <div style="text-align: center; padding: 40px; color: var(--muted); background: rgba(255,255,255,0.01); border: 1px dashed var(--glass-border); border-radius: var(--radius-sm); font-family: 'Space Grotesk', sans-serif;">
        🚀 New download links are being prepared and will be available soon!
      </div>
    `;
  }

  if (os.guideContent) {
    const parsedGuide = window.marked ? window.marked.parse(os.guideContent) : `<pre style="white-space: pre-wrap;">${os.guideContent}</pre>`;
    detailContent.innerHTML = `
      <div class="detail-split-layout">
        <!-- Left Column: Info & Downloads -->
        <div class="detail-left-col detail-card">
          <div class="detail-img-box" style="width: 100%; height: 220px; margin-bottom: 24px; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--glass-border);">
            <img src="${os.image}" alt="${os.name}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          <h1 class="detail-title">${os.name}</h1>
          <p class="detail-desc">${os.fullDesc}</p>
          

          
          <div class="detail-downloads-section">
            <h2 class="downloads-title">Available Files</h2>
            ${downloadsHTML}
          </div>
        </div>
        
        <!-- Right Column: Flashing Guide -->
        <div class="detail-right-col detail-card" id="inline-guide-card">
          <div class="detail-guide-section inline-guide-content">
            <h2 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 800; margin-bottom: 24px; border-bottom: 1px solid var(--glass-border); padding-bottom: 8px; letter-spacing: -0.03em;">⚙️ Installation Guide & Required Files</h2>
            ${parsedGuide}
          </div>
        </div>
      </div>
    `;
  } else {
    // Single column full-width layout
    detailContent.innerHTML = `
      <div class="detail-card">
        <div class="detail-header-wrap">
          <div class="detail-img-box">
            <img src="${os.image}" alt="${os.name}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'" />
          </div>
          <div class="detail-info-box">
            <h1 class="detail-title">${os.name}</h1>
            <p class="detail-desc">${os.fullDesc}</p>

          </div>
        </div>
        
        <div class="detail-downloads-section">
          <h2 class="downloads-title">Available Files</h2>
          ${downloadsHTML}
        </div>
      </div>
    `;
  }

  document.getElementById('page-home').classList.remove('active');
  document.getElementById('page-detail').classList.add('active');
  window.scrollTo(0, 0);
}

function triggerDownload(url) {
  window.open(url, '_blank');
}

// Markdown flashing guide compiler loader
function loadGuide(osId) {
  const mdModal = document.getElementById('md-modal');
  const mdContent = document.getElementById('md-content');
  
  if (!mdModal || !mdContent) return;
  
  mdContent.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--muted);">Loading instructions...</div>';
  mdModal.classList.add('active');
  
  const os = OS_DATA.find(o => o.id === osId);
  if (!os || !os.guideContent) {
    mdContent.innerHTML = `
      <h2 style="color: var(--accent); font-family: 'Syne', sans-serif; margin-bottom: 15px;">Error</h2>
      <p>Flashing guide not found.</p>
    `;
    return;
  }
  
  // Compile using global marked library loaded in head
  if (window.marked) {
    mdContent.innerHTML = window.marked.parse(os.guideContent);
  } else {
    mdContent.innerHTML = `<pre style="white-space: pre-wrap;">${os.guideContent}</pre>`;
  }
}

function closeModal() {
  document.getElementById('md-modal').classList.remove('active');
}

// Donation Modals
function openDonateModal() {
  document.getElementById('donate-modal').classList.add('active');
}
function closeDonateModal() {
  document.getElementById('donate-modal').classList.remove('active');
}

// Initialize components on load
window.onload = () => {
  populateHomeDeviceFilter();
  buildCards('all');
  handleRouting();
};

window.addEventListener('hashchange', handleRouting);
