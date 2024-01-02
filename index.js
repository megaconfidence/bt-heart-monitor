let device;
let heartRate;
const ui = document.querySelector("#ui");

function handleRateChange(event) {
  console.log(event.target.value);
  ui.textContent = parseHeartRate(event.target.value);
}

async function requestDevice() {
  const _options = {
    acceptAllDevices: true,
    optionalServices: ["battery_service"],
  };
  const options = { filters: [{ services: ["heart_rate"] }] };

  device = await navigator.bluetooth.requestDevice(options);
  device.addEventListener("gattserverdisconnected", connectDevice);
}

async function connectDevice() {
  //takes a few seconds to connect
  if (device.gatt.connected) return;

  const server = await device.gatt.connect();
  const service = await server.getPrimaryService("heart_rate");

  heartRate = await service.getCharacteristic("heart_rate_measurement");
  heartRate.addEventListener("characteristicvaluechanged", handleRateChange);
  console.log("connected");
}

document.querySelector("#connect").addEventListener("click", async () => {
  if (!device) await requestDevice();
  connectDevice();
});
document.querySelector("#start").addEventListener("click", async () => {
  await heartRate.startNotifications();
});
document.querySelector("#stop").addEventListener("click", async () => {
  await heartRate.stopNotifications();
});

function parseHeartRate(value) {
  let is16Bits = value.getUint8(0) & 0x1;
  if (is16Bits) return value.getUint16(1, true);
  return value.getUint8(1);
}
