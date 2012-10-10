// Initialize jQuery Mobile options.
// This code MUST be included AFTER jquery is loaded, and BEFORE jQuery Mobile is loaded!
$(document).bind("mobileinit", function(){

    // Pushstate should be enabled for website, as otherwise user will see confusing URLs in
    // URL bar. For PhoneGap, it's better to disable pushstate
    $.mobile.pushStateEnabled = false;

    // Replace calls to window.history.back with PhoneGap navigation helper if available
    $.mobile.phonegapNavigationEnabled = true;

    // Allow cross-domain calls
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;

    // TODO: This doesn't seem to actually work and is undocumented. It is, however, present
    // in the jQuery Mobile code. Research how to actually disable orientation change, most
    // likely with an event handler.
    $.mobile.orientationChangeEnabled = false;
    $.mobile.defaultPageTransition = "slide";
});
