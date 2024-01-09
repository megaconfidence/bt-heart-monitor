#  bt-heart-monitor
A web client for Bluetooth heart monitoring devices, built with the Web Bluetooth API.

![Screen Recording 2024-01-09 at 2 46 14 PM](https://github.com/megaconfidence/bt-heart-monitor/assets/17744578/58e51e6f-255e-408d-b103-e6bd242cdc48)

## Usage
Visit the project's [live url](https://megaconfidence.github.io/bt-heart-monitor/) with a [supported browser](https://caniuse.com/web-bluetooth). Then, connect a Bluetooth device with heart monitoring capabilities. If you don't have such a device, you can emulate one using your smartphone following the [guide below](#set-up-a-heart-monitor-emulator).

## Local Project Set Up
This project has zero dependencies and is really easy to set up. A static file server like Python's _http.server_ (shown below) can be used to server the assets.

Run the commands to get up and running:
```sh
git clone https://github.com/megaconfidence/bt-heart-monitor.git
cd bt-heart-monitor/
python3 -m http.server 3000
```
Then visit [http://localhost:3000/](http://localhost:3000/) in a [supported browser](https://caniuse.com/web-bluetooth).

## Set Up A Heart Monitor Emulator
If you don't have a Bluetooth enabled device with heart monitoring capabilities 
(i.e a smartwatch or fitness tracker with a heart rate sensor), you can set up
an emulator using a smartphone. This guide shows you how to do so.

1. Install the _nRF Connect_ app. It is available for [Android and iOS](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-mobile.)

2. Allow the required permissions such as device location and nearby devices

3. From the app menu, go to `Configure GATT server`, click on the dropdown at the top of the app and select `Sample configuration`
<img src="https://github.com/megaconfidence/bt-heart-monitor/assets/17744578/96ef67e2-415f-460d-a00b-fda9351f1338" width="150">

4. Using the app menu, head back to `Devices`, and then switch to the `Advertiser` tab
5. Click on the plus button to create a new _advertising packet_. Give it a `Display name` (i.e a packet name that's only used in app)
6. Then click on the `Add Record` dropdown, select `Complete Local Name`. This allows your device to be visible with its default Bluetooth name
7. Click on `Add Record` again and select `Service UUID`. With the input, search and select `Heart Rate`
8. Back in the config modal, under `Options`, check `Connectable`. You'll notice `Scannable` is auto checked as well
<img src="https://github.com/megaconfidence/bt-heart-monitor/assets/17744578/1fb60c2e-713a-413b-ab84-2bc5e9e6ca1b" width="150">


10. Click on `Ok`
11. Click on the switch beside the packet name to turn it ON. You may get a one-time popup to configure the advertisement duration.
The defaults are okay, and you can check the `Remember for this packet` box
<img src="https://github.com/megaconfidence/bt-heart-monitor/assets/17744578/98e71143-9568-4651-9b4e-cafb8285f81f" width="150">


13. Click `Ok` and you are good to go. You can always turn OFF the emulator by turning OFF the packet and disabling the GATT server from step 3
