# Oxygen OS Port - Flashing Guide for Infinix GT 20 Pro

## DISCLAIMER
```Disclaimer
I'm not responsible for bricked devices, dead SD cards, thermonuclear war, or your device getting stuck in a bootloop.
Please follow all instructions closely! YOU are choosing to make these modifications.
```

## Prerequisites
- Bootloader must be fully unlocked
- Custom Recovery installed (OrangeFox / TWRP)
- Take a complete backup of all internal storage data

## Standard Installation Steps
1. Reboot your device to Custom Recovery mode.
2. Select **Wipe** -> **Advanced Wipe** -> Wipe Dalvik, Cache, and Metadata.
3. Transfer the **Oxygen OS ROM zip** file to your internal storage.
4. Select the zip file and swipe to flash it.
5. Go back to main menu, select **Wipe** -> **Format Data**, type `yes` and confirm.
6. Reboot to System and enjoy the OnePlus UI!

## Special Developer Notes
If you face any issues with signal or carrier configs, flash the stock modem firmware in recovery.
