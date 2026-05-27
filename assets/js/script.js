/* assets/js/script.js */

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
  if (theme === 'light') {
    themeToggle.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
      </svg>
    `;
  } else {
    themeToggle.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12.3 22c5.07 0 9.18-4.1 9.18-9.18 0-2.62-1.1-4.99-2.88-6.69-.38-.36-.98-.26-1.22.2-.68 1.28-2.04 2.15-3.6 2.15-2.26 0-4.09-1.83-4.09-4.09 0-1.56.88-2.92 2.16-3.6 0.46-.24 0.56-.84 0.2-1.22C11.22 1.6 9.38 1 7.37 1 3.3 1 0 4.3 0 8.37 0 15.9 6.1 22 12.3 22z"/>
      </svg>
    `;
  }
}
updateThemeIcon(currentTheme);

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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg> 
            ${totalDownloads} ${releaseText}${totalDownloads !== 1 ? 's' : ''} available
          </div>
          <div class="card-date">${formattedDate}</div>
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
  document.getElementById('page-detail').classList.remove('active');
  const guidePage = document.getElementById('page-guide');
  if (guidePage) guidePage.classList.remove('active');
  document.getElementById('page-home').classList.add('active');
  window.scrollTo(0, 0);
}

function navigateGuide() {
  document.getElementById('page-home').classList.remove('active');
  document.getElementById('page-detail').classList.remove('active');
  const guidePage = document.getElementById('page-guide');
  if (guidePage) guidePage.classList.add('active');
  window.scrollTo(0, 0);
}

function navigateToOS(id) {
  const os = OS_DATA.find(o => o.id === id);
  if (!os) return;

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
                <button class="btn-dl primary" onclick="triggerDownload('${item.url}')">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  ${getButtonLabel}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    });
  }

  detailContent.innerHTML = `
    <div class="detail-header-wrap">
      <div class="detail-img-box">
        <img src="${os.image}" alt="${os.name}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'" />
      </div>
      <div class="detail-info-box">
        <h1 class="detail-title">${os.name}</h1>
        <p class="detail-desc">${os.fullDesc}</p>
        <div class="detail-actions-row">
          <button class="btn-dl primary" onclick="loadGuide('${os.guideFile}')">Flashing Guide</button>
          <a href="${os.changelog}" target="_blank" rel="noopener noreferrer" class="btn-dl secondary">
            Changelog
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="detail-downloads-section">
      <h2 class="downloads-title">Available Files</h2>
      ${downloadsHTML}
    </div>
  `;

  document.getElementById('page-home').classList.remove('active');
  document.getElementById('page-detail').classList.add('active');
  window.scrollTo(0, 0);
}

// Download countdown locker modal
let countdownTimer = null;
function triggerDownload(url) {
  const warningModal = document.getElementById('dl-warning-modal');
  const proceedBtn = document.getElementById('proceed-btn');
  const timerText = document.getElementById('countdown-timer');
  
  if (!warningModal || !proceedBtn || !timerText) return;
  
  // Setup warning lock
  proceedBtn.classList.add('disabled');
  proceedBtn.disabled = true;
  proceedBtn.onclick = null;
  
  let ticks = 5;
  timerText.textContent = ticks;
  
  warningModal.classList.add('active');
  
  if (countdownTimer) clearInterval(countdownTimer);
  
  countdownTimer = setInterval(() => {
    ticks--;
    timerText.textContent = ticks;
    
    if (ticks <= 0) {
      clearInterval(countdownTimer);
      proceedBtn.classList.remove('disabled');
      proceedBtn.disabled = false;
      proceedBtn.onclick = () => {
        window.open(url, '_blank');
        closeWarningModal();
      };
    }
  }, 1000);
}

function closeWarningModal() {
  if (countdownTimer) clearInterval(countdownTimer);
  document.getElementById('dl-warning-modal').classList.remove('active');
}

// Markdown flashing guide compiler loader
function loadGuide(filePath) {
  const mdModal = document.getElementById('md-modal');
  const mdContent = document.getElementById('md-content');
  
  if (!mdModal || !mdContent) return;
  
  mdContent.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--muted);">Loading instructions...</div>';
  mdModal.classList.add('active');
  
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error("Flashing guide could not be loaded.");
      return response.text();
    })
    .then(text => {
      // Compile using global marked library loaded in head
      if (window.marked) {
        mdContent.innerHTML = window.marked.parse(text);
      } else {
        mdContent.innerHTML = `<pre style="white-space: pre-wrap;">${text}</pre>`;
      }
    })
    .catch(err => {
      mdContent.innerHTML = `
        <h2 style="color: var(--accent); font-family: 'Syne', sans-serif;">Error</h2>
        <p>${err.message}</p>
      `;
    });
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
};
