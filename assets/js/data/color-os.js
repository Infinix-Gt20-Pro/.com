/* assets/js/data/color-os.js */

OS_DATA.push({
  id: "color-os",
  name: "Color OS",
  hide: false,
  image: "assets/images/banners/coloros.jpg",
  shortDesc: "Beautiful & Customizable Color OS port from OPPO.",
  fullDesc: "Highly premium Smart & Smooth Color OS experience ported from official OPPO releases. Includes the dynamic dock layouts, seamless multitasking windows, and custom system tools tailored to run smoothly on Infinix GT 20 Pro.",
  changelog: "https://telegra.ph/ColorOS-GT-20-Pro-Changelog",
  guideFile: "guides/color-os.md",
  guideContent: `# Color OS Port - Flashing Guide for Infinix GT 20 Pro

## DISCLAIMER
\`\`\`Disclaimer
You flash at your own risk. I'm not liable for damaged hardware or partition tables.
\`\`\`

## Prerequisites
- Unlocked bootloader
- TWRP / OrangeFox Recovery
- Decrypted storage partition

## Steps
1. Boot into Custom Recovery mode.
2. Select **Wipe** -> Format metadata, cache, and system dalvik.
3. Flash the **Color OS ROM zip** file.
4. Select **Format Data**, type \`yes\` and swipe to confirm.
5. Reboot to System and explore OPPO's custom features!`,
  downloads: [
    {
      group: "Stable Releases",
      items: [
        { 
          name: "Color OS 16 - Stable", 
          version: "V2.0", 
          tag: "stable", 
          device: "Infinix GT 20 Pro", 
          meta: "Android 16 . 6.48 GB", 
          date: "2026-05-20", 
          url: "https://sfl.gl/ColorOSGT20Pro", 
          url2: "https://sfl.gl/ColorOSGT20ProBackup"
        },
        { 
          name: "Color OS 15 - Stable", 
          version: "V1.0", 
          tag: "stable", 
          device: "Infinix GT 20 Pro", 
          meta: "Android 15 . 5.68 GB", 
          date: "2025-12-26", 
          url: "https://sfl.gl/ColorOS15GT20Pro" 
        }
      ]
    }
  ]
});
