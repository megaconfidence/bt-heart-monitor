#  bt-heart-monitor
A web client for Bluetooth heart monitoring devices, built with the Web Bluetooth API

# Setup A Heart Monitor Emulator
If you don't have a Bluetooth enabled device with heart monitoring capabilities 
(i.e a smart watch or fitness tracker with a heart rate sensor), you can set up
an enulator using a smartphone. The smartphone thus acts as a Bluetooth pheripheral
after the configuration is done.

1. Download the nRF Connect app. Available for [Android and iOS](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-mobile.)

2. Allow the necessary permisssions such as location and nearby devices

3. From the app menu, go to `Configure GATT server`, click on the dropdown at the top of the screen and select `Sample configuration`
<img src="https://github.com/megaconfidence/bt-heart-monitor/assets/17744578/96ef67e2-415f-460d-a00b-fda9351f1338" width="150">
4. Using the app menu, head back to `Devices`, and then switch to the `Advertiser` tab
5. Click on the plus button to create a new advertising packet. Give give it a `Display name` (only used in the app)
6. Then click on the `Add Record` dropdown, select 'Complete Local Name` 
