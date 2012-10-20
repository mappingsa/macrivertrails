// Initialize jQuery Mobile options.
// This code MUST be included AFTER jquery is loaded, and BEFORE jQuery Mobile is loaded!
$(document).bind("mobileinit", function(){
    // This is an imperfect test for a genuine Apple Webkit. Chrome spoofs this, so we exclude
    //   Chrome. But what else is out there that spoofs Apple Webkit?
    var version = navigator.appVersion.toLowerCase(),
        isAppleWebkit =  (/.*applewebkit.(?!.*chrome)/).test(version),
        isAppleWebkitMobile = isAppleWebkit && (/.*mobile/).test(version), // true if Apple Webkit not on desktop
        isAppleWebkitDesktop = isAppleWebkit && !isAppleWebkitMobile,
        hintAcceleration = isAppleWebkit,     // true if should hint hardware acceleration
        $html = $("html");
    //$.mobile.touchOverflowEnabled = true;  // Deprecated in 1.1
    // Pushstate should be enabled for website, as otherwise user will see confusing URLs in
    // URL bar. For PhoneGap, it's better to disable pushstate
    $.mobile.pushStateEnabled = true;
    // TODO: This doesn't seem to actually work and is undocumented. It is, however, present
    // in the jQuery Mobile code. Research how to actually disable orientation change, most
    // likely with an event handler.
    $.mobile.orientationChangeEnabled = false;
    $.mobile.defaultPageTransition = "slide";

    // Add some classes to HTML so that we can write CSS that is responsive to browser model
    if (isAppleWebkit) {
      $html.addClass("is-apple-webkit");
      // Make this a separate class, in case other platforms might need this as well
      // Currently, I don't know of any, but it seems prudent to keep this separate
      $html.addClass("hint-acceleration");
    }
    if (isAppleWebkitMobile) {
      $html.addClass("is-apple-webkit-mobile");
    }
    if (isAppleWebkitDesktop) {
      $html.addClass("is-apple-webkit-desktop")
    }
});
