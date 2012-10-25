
(function ($) {
  "use strict";

  var refreshScroller = function(slider) {
    $(slider).closest(".iscroll-wrapper").iscrollview("refresh");
    };


  $(document).on('pageinit', ".ui-page", function() {
    var
      $page = $(this),
      $menu = $page.find(".menu"),
      $showMenuBtn = $page.find(".showMenu"),

      closeMenu = function(fadeTime) {
        $menu.animate(
          { opacity: "0" },
          fadeTime === undefined ? 400 : fadeTime,
          "linear",
          function() { $menu.hide(); }
          );
         },

      openMenu = function(fadeTime) {
        $menu.css("opacity", "0");
        $menu.animate(
          { opacity: "0.85" },
          fadeTime === undefined ? 400 : fadeTime,
          "linear"
          );
        $menu.show();
        };

    $page.on("pagebeforeshow", function() {
      $menu.hide();
    });

    // Show menu
    $showMenuBtn.bind("vclick", function(event) {
      var menuIsHidden = $menu.is(":hidden");
      event.preventDefault();
      if (menuIsHidden) {
        openMenu();
        }
      else {
        closeMenu();
          }
    });

    $page.find(".go-web, .go-phone, go-mail").bind("vclick", function(event) {
      var $a = $(this),
          $menu = $page.find(".menu");     
      closeMenu();   
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
      localStore.removeFavorite(section, item);
      $a.removeClass("is-fav").find("span").text("MAKE FAVOURITE");

    } else {
      localStore.saveFavorite({section: section, item: item, title: title});
      $a.addClass("is-fav").find("span").text("REMOVE FAV");
      }
      closeMenu(1000);
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
    if ( localStore.isFavorite(section, item) ) {
      $favA.addClass("is-fav").find("span").text("REMOVE FAV");
      } else {
      $favA.removeClass("is-fav").find("span").text("MAKE FAVOURITE");
      }
  });

  // Favorites page
  $(document).on("pagebeforeshow", ".todo-page", function() {
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
    localStore.removeFavorite(section, item);
    $page.find(".iscroll-wrapper").iscrollview("refresh");
  });

  }(jQuery));


var interfaceBuild = function(){

  function BuildFavoriteList(){
    // It should not be necessary to add these classes to the empty message. TODO: investigate why these are needed - it should enhance just like
    // the actual favourites
    var emptyToDoMsg =
          '<li class="ui-li ui-li-static ui-btn-up-c ui-li-last">Your Favourites list is empty</li>',
        base =
          '<li data-section="|section|" data-item="|item|"> <a href="|href|">|title|</a><a class="btn-remove-fav" href="#" data-ajax="false">Remove</a></li>';
        savedItems = store.get("faves"),
        $todoList = $("#todo-list");
    $todoList.empty();
    if (!savedItems){
      $todoList.append(emptyToDoMsg);
      }
    else {
      $.each(savedItems, function(i) {
        var thisBase = base;
        thisBase = thisBase.replace('|section|', this.section);
        thisBase = thisBase.replace('|item|', this.item);
        thisBase = thisBase.replace('|href|', this.section.charAt(0).toUpperCase() + this.section.slice(1) + "/" + this.item + ".html");
        thisBase = thisBase.replace('|title|', this.title);
        $todoList.append(thisBase);
        });
      $todoList.listview("refresh");
    }
  }

  return {
    buildFavoriteList: function(){
      return BuildFavoriteList();
      }
    }

}();

var localStore = function(){

  function IsFavorite(section, item){
    return ( IsInList("faves", section, item) );
  }

  function IsInList(list, section, item) {
    var found = false,
        savedItems = store.get(list);
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

  function SaveFavorite(newItem) {
    return ( SaveInList("faves", newItem) );
  }

  function SaveInList(list, newItem){
    var found = false,
        savedItems = store.get(list);

  if (savedItems === undefined) {
    savedItems = new Array();
    savedItems[0] = newItem;
    store.set(list, savedItems);
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
        store.set(list, savedItems);
        }
      return;
      }
    }

    function RemoveFavorite(section, item) {
      return ( RemoveFromList("faves", section, item) );
    }

    // Returns false if empty, true if not empty
    function RemoveFromList(list, section, item) {
      var savedItems = store.get(list);
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
        store.set(list, savedItems);
        } else {
          store.remove(list);
          return false;
        }
      return true;
      }

    return {
      saveFavorite: function(item){
        return SaveFavorite(item);
        },
      removeFavorite: function(section, item){
        return RemoveFavorite(section, item);
        },
      isFavorite: function(section, item) {
        return IsFavorite(section, item);
        }
    }
}();


