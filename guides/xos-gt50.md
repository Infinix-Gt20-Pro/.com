# XOS 16.2 GT50 Pro Port - Flashing Guide

## ⚠️ WARNING & DISCLAIMER
```Warning
Flash at your own risk. Unlocking bootloaders and flashing third-party partitions voids device warranty.
Always make a complete backup of your internal storage data.
```

---

## 📦 Required Files & Dependencies
Before starting, ensure you have downloaded the following files:
1. 📂 **XOS 16.2 ROM Zip**: [Download Links below]
2. 🔑 **Vbmeta Disabler Zip**: [Get Vbmeta Disabler](https://drive.google.com/file/d/1OiVAzjAXMxzZIsr00KH3rbCTzYLBsX06/view?usp=drive_link)
3. 💻 **Platform Tools / Drivers**: Standard MTK drivers for PC

---

## 🚀 Flashing Process (Step-by-Step)
1. 📱 **Reboot to Recovery**: Turn off your device and boot into TWRP or OrangeFox recovery.
2. 🧹 **Wipe Partition**: Select **Wipe** -> Format metadata, cache, and system Dalvik.
3. ⚡ **Flash Vbmeta Disabler**: Flash the `vbmeta-disabler.zip` file first to disable partition verification.
4. 📦 **Flash ROM**: Flash the `XOS-16.2-GT50-Port.zip` file.
5. 🧼 **Format Data**: Go to Wipe -> Format Data, type `yes` and confirm.
6. 🔄 **Reboot**: Select **Reboot System** and enjoy the latest XOS 16.2 build!

---

## 🤝 Credits
- **@mehran** — Main developer & porter
