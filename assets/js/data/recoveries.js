/* assets/js/data/recoveries.js */

OS_DATA.push({
  id: "recoveries",
  name: "Custom Recoveries",
  hide: false,
  image: "assets/images/banners/recoveries.jpg",
  shortDesc: "TWRP & OrangeFox custom recoveries for Infinix GT 20 Pro (X6871).",
  fullDesc: "All-in-one custom recoveries hub featuring community maintained TWRP and OrangeFox builds for Infinix GT 20 Pro (X6871). Packed with dynamic partition mounts, decryption support, ADB sideload, MTP, backup and restore, and full flashing support.",
  changelog: "https://t.me/Gt20ProIN",
  guideFile: "guides/recoveries.md",
  guideContent: `# TWRP & OrangeFox Custom Recoveries for Infinix GT 20 Pro (X6871)

## ⚠️ WARNING & DISCLAIMER
\`\`\`Warning
Flash At Your Own Risk. Unlocking partitions and flashing custom recoveries can cause data loss or bootloop states.
💾 ALWAYS KEEP A BACKUP of your internal storage before flashing!
\`\`\`

---

## ⚙️ Recovery Key Features
- **Data Decryption Support** (Allows full storage mount)
- **ADB Sideload / MTP** (Transfer zip files from PC)
- **USB-OTG Support** (Backup & flash from external drives)
- **Fastbootd Support** (Re-partition and flash system images)
- **Backup & Restore** (Full Nandroid backup)
- **Flash ROMs, Kernels & Mods**

---

## 📥 Downloads Link
Get all compiled recovery builds in the official folders:
- [Download All Recoveries](https://drive.google.com/drive/folders/1_fbe6RGR0ypyFAfMn23VR9bC7TRoyicP?usp=sharing)

---

## 🚀 Standard Installation Process
1. Boot your Infinix GT 20 Pro into bootloader mode.
2. Connect your phone to PC via USB, open terminal and check connection:
   \`\`\`bash
   fastboot devices
   \`\`\`
3. Flash the recovery image on slot A using fastboot command:
   \`\`\`bash
   fastboot flash vendor_boot_a vendor_boot.img
   \`\`\`
4. Flash the recovery image on slot B using fastboot command:
   \`\`\`bash
   fastboot flash vendor_boot_b vendor_boot.img
   \`\`\`
5. Reboot directly into recovery:
   \`\`\`bash
   fastboot reboot-recovery
   \`\`\`

---

## 👥 Telegram Community & Credits
- **Credits**: Special thanks to **@ramabondanp** and **@vxlxlxv** for compile builds!
- **Telegram Group**: [Join GT 20 Pro Community Chat](https://t.me/Gt20ProIN)`,
  downloads: [
    {
      group: "TWRP & OrangeFox Recoveries",
      items: [
        { 
          name: "OrangeFox Recovery", 
          version: "R11.1", 
          tag: "stable", 
          device: "Infinix GT 20 Pro", 
          meta: "Data Decryption . ADB . MTP", 
          date: "2026-05-28", 
          url: "https://drive.google.com/drive/folders/1_fbe6RGR0ypyFAfMn23VR9bC7TRoyicP?usp=sharing"
        },
        { 
          name: "TWRP Recovery", 
          version: "V3.7.1", 
          tag: "stable", 
          device: "Infinix GT 20 Pro", 
          meta: "Data Decryption . ADB . OTG", 
          date: "2026-05-28", 
          url: "https://drive.google.com/drive/folders/1_fbe6RGR0ypyFAfMn23VR9bC7TRoyicP?usp=sharing"
        }
      ]
    }
  ]
});
