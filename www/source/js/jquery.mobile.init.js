// Initialize jQuery Mobile options.
// This code MUST be included AFTER jquery is loaded, and BEFORE jQuery Mobile is loaded!
$(document).bind("mobileinit", function(){

    // Do just a bit of browser detection and set CSS classes, to allow us to address some
    // specific issues with popular mobile platforms.

  var vendor = (window.navigator.vendor || "").toLowerCase(),
        version = window.navigator.appVersion.toLowerCase(),
        platform = (window.navigator.platform || "").toLowerCase(),

        isWebkit = (/webkit/).test(version),
        isApple = (/^apple computer/).test(vendor),
        isIOS = (/iphone|ipod|ipad/).test(platform),
        isAndroid = (/android/).test(platform),
        isAppleWebkit =  isWebkit && isApple,
        isAppleWebkitMobile = isAppleWebkit && isIOS,
        isAppleWebkitDesktop = isAppleWebkit && !isIOS,
        // Webapp saved to iOS home screen (Springboard) icon
        isAppleWebkitFullscreen = isAppleWebkitMobile && (window.navigator.Standalone !== undefined),
        isSafari = (/safari/).test(version),
        isAppleWebkitMobileWebview = isAppleWebkitMobile && !isSafari,
        isIpad = isAppleWebkitMobile && (/ipad/).test(version),
        hintAcceleration = isAppleWebkit,     // true if should hint hardware acceleration
        $html = $("html");  // Where we will put the classes


    // Pushstate should be enabled for website, as otherwise user will see confusing URLs in
    // URL bar. For PhoneGap, it's better to disable pushstate
    $.mobile.pushStateEnabled = true;
    // TODO: This doesn't seem to actually work and is undocumented. It is, however, present
    // in the jQuery Mobile code. Research how to actually disable orientation change, most
    // likely with an event handler.
    $.mobile.orientationChangeEnabled = false;
    $.mobile.defaultPageTransition = "slide";

    // Add some classes to HTML so that we can write CSS that is responsive to browser model
    // This is not exhaustive. It only covers cases where we have a specific need.

    if (isWebkit) {
      $html.addClass("is-webkit");
      }
    if (isAppleWebkit) {
      $html.addClass("is-apple-webkit");
      // Make this a separate class, in case other platforms might need this as well
      // Currently, I don't know of any, but it seems prudent to keep this separate
      $html.addClass("hint-acceleration");
    }
    if (isAppleWebkitMobile) {
      $html.addClass("is-apple-webkit-mobile");
    }
    if (isAppleWebkitFullscreen) {
      $html.addClass("is-apple-webkit-mobile-fullscreen");
    }
    if (isAppleWebkitMobileWebview) {
      $html.addClass("is-apple-webkit-mobile-webview");
    }
    if (isAppleWebkitDesktop) {
      $html.addClass("is-apple-webkit-desktop");
    }
    if (isIpad) {
      $html.addClass("is-ipad");
    }


});
