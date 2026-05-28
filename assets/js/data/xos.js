/* assets/js/data/xos.js */

OS_DATA.push({
  id: "xos",
  name: "XOS (Transsion OS)",
  hide: false,
  image: "assets/images/banners/xos.png",
  shortDesc: "XOS 16.1 for GT 20 Pro — Ported from Infinix GT30 PRO & NOTE EDGE | 64-Bit Only",
  fullDesc: "Stable Release v3 (Ported from Infinix GT30 PRO) & Release v2 (Ported from Infinix NOTE EDGE) by @merhan. Stable Transsion OS experience customized for Infinix GT 20 Pro.",
  changelog: "https://t.me/xos16x6871portlinks/3",
  guideFile: "guides/xos.md",
  guideContent: `# XOS 16.1 Port - Flashing Guide for Infinix GT 20 Pro

## DISCLAIMER
\`\`\`Disclaimer
Please proceed with absolute caution. Unlocking bootloaders and flashing third-party partitions voids device warranty.
We are not responsible for bricked devices. Proceed at your own risk.
\`\`\`

## ⚙️ Required Things
- **Vbmeta Disabler**: [Download Link](https://t.me/infinixgt20proid/14628)
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
- **Jio SIM calling not working** (Affects Stable Release v3)
- Maybe **INFINIX ID password confirmation** bug in v2 (find [Fix Here](https://t.me/xos16x6871portlinks/3))

---

## 🤝 Credits & Special Thanks
- **Allah (S.W.T)**
- **@merhan** — Main developer & porter (Credit)
- **@Moiz_Khan56** — For teaching me
- All Testers & Contributors!`,
  downloads: [
    {
      group: "HiOS / XOS Stable Releases",
      items: [
        { 
          name: "XOS 16.1 - Stable Release v3 | Ported From Infinix GT30 PRO", 
          version: "V3.0", 
          tag: "stable", 
          device: "Infinix GT 20 Pro", 
          meta: "Android 16 . 64-Bit Only . Credit: @merhan . Bugs: Jio SIM calling not working", 
          date: "2026-05-28", 
          url: "https://drive.google.com/file/d/1M6CmX12FXpk4sPRU1Uq-I4tD4CNytqQr/view?usp=sharing"
        },
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
