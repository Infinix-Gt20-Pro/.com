/* assets/js/data/xos-gt50.js */

OS_DATA.push({
  id: "xos-gt50",
  name: "XOS 16.2 (GT50 Pro Port)",
  hide: false,
  image: "assets/images/banners/xos-gt50.png",
  shortDesc: "XOS 16.2 Latest Build ported from Infinix GT50 PRO | Android 16",
  fullDesc: "Experience the state-of-the-art XOS 16.2 build ported from the Infinix GT50 PRO. Maintained and ported by @mehran, this ROM delivers premium UI customisation, improved battery backup, and maximum hardware optimization for the Infinix GT 20 Pro.",
  changelog: "#",
  guideFile: "guides/xos-gt50.md",
  guideContent: `# XOS 16.2 GT50 Pro Port - Flashing Guide

## ⚠️ WARNING & DISCLAIMER
\`\`\`Warning
Flash at your own risk. Unlocking bootloaders and flashing third-party partitions voids device warranty.
Always make a complete backup of your internal storage data.
\`\`\`

---

## 📦 Required Files & Dependencies
Before starting, ensure you have downloaded the following files:
1. 📂 **XOS 16.2 ROM Zip**: [Download Links below]
2. 🔑 **Vbmeta Disabler Zip**: [Get Vbmeta Disabler](https://t.me/infinixgt20proid/14628)
3. 💻 **Platform Tools / Drivers**: Standard MTK drivers for PC

---

## 🚀 Flashing Process (Step-by-Step)
1. 📱 **Reboot to Recovery**: Turn off your device and boot into TWRP or OrangeFox recovery.
2. 🧹 **Wipe Partition**: Select **Wipe** -> Format metadata, cache, and system Dalvik.
3. ⚡ **Flash Vbmeta Disabler**: Flash the \`vbmeta-disabler.zip\` file first to disable partition verification.
4. 📦 **Flash ROM**: Flash the \`XOS-16.2-GT50-Port.zip\` file.
5. 🧼 **Format Data**: Go to Wipe -> Format Data, type \`yes\` and confirm.
6. 🔄 **Reboot**: Select **Reboot System** and enjoy the latest XOS 16.2 build!

---

## 🤝 Credits
- **@mehran** — Main developer & porter`,
  downloads: [
    {
      group: "Latest Builds",
      items: [
        { 
          name: "XOS 16.2 - Latest Build | Ported From Infinix GT50 PRO", 
          version: "V16.2-Latest", 
          tag: "stable", 
          device: "Infinix GT 20 Pro", 
          meta: "Android 16 . Ported from GT50 PRO . Credit: @mehran", 
          date: "2026-06-02", 
          url: "#"
        }
      ]
    }
  ]
});
