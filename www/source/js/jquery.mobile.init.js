// Initialize jQuery Mobile options.
// This code MUST be included AFTER jquery is loaded, and BEFORE jQuery Mobile is loaded!
$(document).bind("mobileinit", function(){
    //$.mobile.touchOverflowEnabled = true;  // Deprecated in 1.1
    $.mobile.pushStateEnabled = true;
    // TODO: This doesn't seem to actually work and is undocumented. It is, however, present
    // in the jQuery Mobile code. Research how to actually disable orientation change, most
    // likely with an event handler.
    $.mobile.orientationChangeEnabled = false;
});
