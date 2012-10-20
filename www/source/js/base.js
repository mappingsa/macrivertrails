
(function ($) {
  "use strict";

  var closeMenu = function($menu, fadeTime) {
    $menu.animate({
      opacity: "0",
    }, fadeTime ? fadeTime : 400, function() {
        $menu.css("z-index", -1);
    });
  };

  var refreshScroller = function(slider) {
    $(slider).closest(".iscroll-wrapper").iscrollview("refresh");
  };


  $(document).on('pageinit', ".ui-page", function() {
    var $page = $(this);

    $page.find("#popup").click(function(){
      alert("Sorry no contact information available");
      });

    $page.find(".popupalert").click(function(){
      alert("Sorry no contact information available");
      });

    // Show menu
    $page.find(".showMenu").bind("vclick", function(event) {
      var $menu = $page.find(".menu"),
          menuIsShown = $menu.css("z-index") === "1";
      event.preventDefault();
      if (!menuIsShown) {
          $menu.css("z-index", 1).animate( {
            opacity: ".85",
          }, 400 );
        } else {
          closeMenu($menu);
        }
    });

  $page.find(".toggle-fav").bind("vclick", function(event) {
    var $a = $(this),
        $img = $a.find("img"),
        $menu = $page.find(".menu"),
        section = $page.data("section"),
        item = $page.data("item"),
        title = $page.data("title");
    event.preventDefault();
    if ( $a.hasClass("is-fav") ) {
      localStore.doRemoveFavorite(section, item);
      $a.removeClass("is-fav").find("span").text("ADD FAVORITE");

    } else {
      localStore.doSaveFavorite({section: section, item: item, title: title});
      $a.addClass("is-fav").find("span").text("REMOVE FAV");
      }
      closeMenu($menu, 1000);
  });


    // Pages are normally hidden at pageinit. This makes it impossible to get element dimensions.
    // Temporarily unhide the page, so that the FlexSlider can initialize properly. The page
    // won't actually be unhidden by the browser, though, because we set the visibility back
    // when we are done, and since browser Javascript is synchronous, the renderer does not
    // run asynchronously during event processing, and so it will be none the wiser.
    // May not be necessary - commented-out for testing.
    //var $page = $(this),
     //   hidden = $page.is(":hidden");
   // if (hidden) { $page.css("display", "block"); }

    $('.homeImageSlider').flexslider({
      slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
      animationSpeed: 400,
      controlNav: false,
      directionNav: false,
      animation: "slide",
      pauseOnHover: true,
      touch: true,
      smoothHeight: false,
      start: refreshScroller,
      before: refreshScroller,
      after: refreshScroller,
    });

    $('.pageImageSlider').flexslider({
      slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
      animationSpeed: 400,
      controlNav: false,
      directionNav: false,
      animation: "slide",
      pauseOnHover: true,
      slideshow: true,
      touch: true,
      smoothHeight: false,
      start: refreshScroller,
      before: refreshScroller,
      after: refreshScroller,
    });


    $('.pageImageSliderAuto').flexslider({
      slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
      animationSpeed: 400,
      controlNav: false,
      directionNav: false,
      animation: "slide",
      pauseOnHover: true,
      slideshow: true,
      touch: true,
      randomize: false,
      smoothHeight: false,
      start: refreshScroller,
      before: refreshScroller,
      after: refreshScroller,
    });
  });


  // Place pages
  $(document).on("pagebeforeshow", ".place-page", function() {
    var $page = $(this),
        $menu = $page.find(".menu"),
        $favA = $menu.find(".toggle-fav"),
        section = $page.data("section"),
        item = $page.data("item");

    // Update menu to reflect favorite status of item
    if ( localStore.doIsFavorite(section, item) ) {
      $favA.addClass("is-fav").find("span").text("REMOVE FAV");
      } else {
      $favA.removeClass("is-fav").find("span").text("ADD FAVORITE");
      }
  });

  // Favorites page
  $(document).on("pagebeforeshow", ".favorites", function() {
    var $page = $(this);
    interfaceBuild.buildFavoriteList();
    $page.find(".iscroll-wrapper").iscrollview("refresh");
  });

  $(document).on("vclick", ".btn-remove-fav", function(event) {
    var $a = $(this),
        $li = $a.closest("li"),
        $page = $li.closest(".ui-page"),
        section = $li.data("section"),
        item = $li.data("item");
    event.preventDefault();
    $li.remove();
    if ( !localStore.doRemoveFavorite(section, item) ) {
      $('#noFavesMsg').show();
    }
    $page.find(".iscroll-wrapper").iscrollview("refresh");
  });

  }(jQuery));


var interfaceBuild = function(){

  function BuildFavoriteList(){
    var base =
      '<li data-section="|section|" data-item="|item|"> <a href="|href|">|title|</a><a class="btn-remove-fav" href="#" data-ajax="false">Remove</a></li>';
    var savedItems = store.get('faves');
    $("#favoritesList").empty();
    if (savedItems != undefined){
      $.each(savedItems, function(i) {
        var thisBase = base;
        thisBase = thisBase.replace('|section|', this.section);
        thisBase = thisBase.replace('|item|', this.item);
        thisBase = thisBase.replace('|href|', this.section.charAt(0).toUpperCase() + this.section.slice(1) + "/" + this.item + ".html");
        thisBase = thisBase.replace('|title|', this.title);
        $('#favoritesList').append(thisBase);
        });
      $('#noFavesMsg').hide();
      $('#favoritesList').listview('refresh');
    }
  }

  return {
    buildFavoriteList: function(){
      return BuildFavoriteList();
      }
    }

}();


var localStore = function(){
  // Unused?
  function getAllStorage(){
    return store.getAll()
  };

  function isFavorite(section, item) {
    var found = false,
        savedItems = store.get('faves');
    if (savedItems === undefined){
      return false;
      }
    $.each(savedItems, function(){
      if (this.item === item && this.section === section) {
        found = true;
        return;
        }
      });
    return found;
    }

  function saveFavorite(newItem){
    var found = false,
        savedItems = store.get('faves');

  if (savedItems === undefined) {
    savedItems = new Array();
    savedItems[0] = newItem;
    store.set('faves', savedItems);
    return;
    } else {
      $.each(savedItems, function(){
        if (this.item === newItem.item && this.section === newItem.section){
          found = true;
          return;
          }
      });
      if (!found) {
        savedItems.push(newItem);
        store.set('faves', savedItems);
        }
      return;
      }
    }

    // Returns false if empty, true if not empty
    function removeFavorite(section, item){
      var savedItems = store.get('faves');
      if (savedItems === undefined){
        return false;
      }
      $.each(savedItems, function(index){
        if (this.section === section && this.item === item){
          savedItems.splice(index, 1);
          return;
          }
        });

      if (savedItems.length){
        store.set('faves', savedItems);
        } else {
          store.remove('faves');
          return false;
        }
      return true;
      }

    return {
      doSaveFavorite: function(item){
        return saveFavorite(item);
        },
      doRemoveFavorite: function(section, item){
        return removeFavorite(section, item);
        },
      doIsFavorite: function(section, item) {
        return isFavorite(section, item);
        }
    }
}();

// Unused?
var removeArrItem = function(arr){
    var what, a= arguments, L= a.length, ax;
    while(L> 1 && arr.length){
        what= a[--L];
        while((ax= arr.indexOf(what))!= -1){
            arr.splice(ax, 1);
        }
    }
    return arr;
}

// Unused? This was used for Favorites. Seems to be a separate copy for map
var getUrlVars = function(pathname)
{
    var vars = [], hash;
    var hashes = pathname.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
