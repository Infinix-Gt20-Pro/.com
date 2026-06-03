/* assets/js/data/xos.js */

OS_DATA.push({
  id: "xos",
  name: "XOS 16.1 (Note Edge Port)",
  hide: false,
  image: "assets/images/banners/xos.jpg",
  shortDesc: "XOS 16.1 for GT 20 Pro — Ported from Infinix NOTE EDGE | 64-Bit Only",
  fullDesc: "Stable Release v2 (Ported from Infinix NOTE EDGE) by @mehraann19. Transsion OS experience customized for Infinix GT 20 Pro.",
  changelog: "https://t.me/xos16x6871portlinks/3",
  guideFile: "guides/xos.md",
  guideContent: `# XOS 16.1 Port - Flashing Guide for Infinix GT 20 Pro

## DISCLAIMER
\`\`\`Disclaimer
Please proceed with absolute caution. Unlocking bootloaders and flashing third-party partitions voids device warranty.
We are not responsible for bricked devices. Proceed at your own risk.
\`\`\`

## ⚙️ Required Things
- **Vbmeta Disabler**: [Download Link](https://drive.google.com/file/d/1OiVAzjAXMxzZIsr00KH3rbCTzYLBsX06/view?usp=drive_link)
- **Working Brain**

## 🚀 Flashing Process
1. 1️⃣ **Reboot to Recovery** (TWRP / OrangeFox)
2. 2️⃣ **Flash Vbmeta Disabler** zip file
3. 3️⃣ **Flash ROM.zip** (XOS 16.1 Port)
4. 4️⃣ **Format Data** (Select wipe -> format data, type \`yes\`)
5. 5️⃣ **Reboot System**

---

## 📝 Changelogs
- **Enforcing** state configured
- **Mem Fusion** Fixed
- **Media** playback Fixed
- **Visual Lag** Fixed
- **Charging** behaviors Fixed

---

## ⚠️ Known Bugs
- Maybe **INFINIX ID password confirmation** bug in v2 (find [Fix Here](https://t.me/xos16x6871portlinks/3))

---

## 🤝 Credits & Special Thanks
- **@mehraann19** — Main developer & porter (Credit)
- **@Moiz_Khan56** — For teaching me
- All Testers & Contributors!`,
  downloads: [
    {
      group: "HiOS / XOS Releases",
      items: [
        { 
          name: "XOS 16.1 - Stable Release v2 | Ported From Infinix NOTE EDGE", 
          version: "V2.0", 
          tag: "stable", 
          device: "Infinix GT 20 Pro", 
          meta: "Android 16 . 64-Bit Only", 
          date: "2026-05-28", 
          url: "https://drive.google.com/file/d/1T91Z207IHD_tfzvU6-TFUviwjxIchSxW/view"
        }
      ]
    }
  ]
});
