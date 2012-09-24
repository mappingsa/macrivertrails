
// Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
function onDeviceReady() {
    // Empty
}

// alert dialog dismissed
function alertDismissed() {
    // do something
}

// Show a custom alert
//
function showAlert() {
    navigator.notification.alert(
                                 'Fishing Trail will be avaliable soon',  // message
                                 alertDismissed,         // callback
                                 'Alert',               // title
                                 'Close'                  // buttonName
                                 );
}

