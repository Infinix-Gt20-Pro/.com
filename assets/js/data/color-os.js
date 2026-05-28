/* assets/js/data/color-os.js */

OS_DATA.push({
  id: "color-os",
  name: "Color OS",
  hide: false,
  image: "assets/images/banners/coloros.png",
  shortDesc: "ColorOS 16 CN Stable OEM Port from OPPO Find X9 by XIA.",
  fullDesc: "Highly premium, smart & smooth ColorOS 16 CN experience ported from official OPPO Find X9 releases. Includes dynamic layouts, working Fingerprint On Display (FOD), NFC, All-day AOD, and Bypass Charging, tailored to run smoothly on Infinix GT 20 Pro.",
  changelog: "https://telegra.ph/Flashing-Step-Notes-Changelog-Known-Bugs-12-25",
  guideFile: "guides/color-os.md",
  guideContent: `# ColorOS 16 CN Port - Flashing Guide for Infinix GT 20 Pro

## DISCLAIMER
\`\`\`Disclaimer
You flash at your own risk. I'm not liable for damaged hardware or partition tables.
\`\`\`

## ⚙️ Specifications & Base
- **ROM Version**: ColorOS 16 CN Stable
- **Android Version**: Android 16
- **Ported From**: OPPO Find X9
- **Based on FW**: XOS 15.1.2.129
- **Release Date**: 27 December 2025
- **Credits**: "XIA"

## 🚀 Flashing Process
1. Boot into Custom Recovery (TWRP / OrangeFox).
2. Select **Wipe** -> Format metadata, cache, and system dalvik.
3. Flash the **ColorOS 16 ROM zip** file.
4. Select **Format Data**, type \`yes\` and swipe to confirm.
5. Reboot to System and explore OPPO's custom features!

---

## 📝 Working Features & Changelogs
- **Fingerprint On Display (FOD)**: Fixed & Working
- **All-day AOD**: Fixed & Working
- **NFC**: Working
- **Bypass Charging**: Added & Working
- **Play Integrity**: MEETS_STRONG configured
- More premium features added!

---

## ☕ Support & Community Links
- **Detailed Changelogs & Notes**: [Telegra.ph Link](https://telegra.ph/Flashing-Step-Notes-Changelog-Known-Bugs-12-25)
- **Indian Chat Support**: [Join Telegram](https://t.me/Gt20ProIN)
- **Indian Updates Channel**: [Join Channel](https://t.me/Gt20ProINUpdates)`,
  downloads: [
    {
      group: "Stable Releases",
      items: [
        { 
          name: "ColorOS 16 CN - Stable", 
          version: "V16.0.0-CN01", 
          tag: "stable", 
          device: "Infinix GT 20 Pro", 
          meta: "Android 16 . 2025-12-26", 
          date: "2025-12-26", 
          url: "https://drive.google.com/file/d/1t6ReE4uV9hV4M-Ki3CGieCqXW6SJYPMj/view?usp=sharing", 
          url2: "https://t.me/screenxia/361?single"
        }
      ]
    }
  ]
});
