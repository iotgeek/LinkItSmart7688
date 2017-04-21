var mcs = require('mcsjs');

var myApp = mcs.register({
  deviceId: 'Dl2Eo8ap',
  deviceKey: 'QqUnTIsUWBRD7Vw0',
  host: 'api.mediatek.com',
  mqttHost: 'mqtt.mcs.mediatek.com',
  method: 'mqtt',
  port: 1883,
  qos: 0
});
// Replace the device ID and device Key obtained from your test device
// created in MCS.

myApp.on('kitchenlight_id', function(data, time) {
  if(Number(data) === 1){
    console.log('switch ON Kitchen light');
    //myLed.write(0);
  } else {
    //console.log('off');
    console.log('switch OFF Kitchen light');
    //myLed.write(1);
  }
});
myApp.on('fanswitch_id', function(data, time) {
  if(Number(data) === 1){
    console.log('switch ON Fan');
    //myLed.write(0);
  } else {
    //console.log('off');
    console.log('switch OFF Fan');
    //myLed.write(1);
  }
});
myApp.on('viewchannel_id', function(data, time) {

  console.log('View Channel Trigger : Channel No:');
  console.log(Number(data));
});

myApp.on('recordchannel_id', function(data, time) {
  
  console.log('Record Channel Trigger : Channel No:');
  console.log(Number(data));

});
