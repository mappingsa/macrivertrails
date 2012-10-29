
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
      localStore.removeFavourite(section, item);
      $a.removeClass("is-fav").find("span").text("MAKE FAVOURITE");
      }
      else {
        localStore.saveFavourite( { listID: 0, section: section, item: item, title: title } );
        $a.addClass("is-fav").find("span").text("REMOVE FAV");
        }
      closeMenu(1000);
  });

    $page.find(".itin-btn").on("vclick", function(event) {
    var $a = $(this),
        $img = $a.find("img"),
        $menu = $page.find(".menu"),
        $popup = $page.find(".itin-popup"),
        section = $page.data("section"),
        item = $page.data("item"),
        title = $page.data("title");
    event.preventDefault();


    if ( $a.hasClass("is-itin") ) {
      localStore.removeFromItinerary( section, item );
      $a.removeClass("is-itin").find("span").text("ADD TO ITINERARY");
      closeMenu(1000);
        }
    else {
      $popup.popup("open");
      }

  });

    $page.find(".itin-list").on("vclick", ".itin-add-btn", function(event) {
      var $a = $(this),
          $addItinBtn = $page.find(".itin-btn"),
          section = $page.data("section"),
          item = $page.data("item"),
          title = $page.data("title");
      event.preventDefault();
      localStore.saveInItinerary( {listID: 1, section: section, item: item, title: title} );
      $addItinBtn.addClass("is-itin").find("span").text("REMOVE FROM ITINERARY");
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
        $itinA = $menu.find(".itin-btn"),
        section = $page.data("section"),
        item = $page.data("item");


    // Update menu to reflect favourite status of item
    if ( localStore.isFavourite(section, item) ) {
      $favA.addClass("is-fav").find("span").text("REMOVE FAV");
      }
    else {
      $favA.removeClass("is-fav").find("span").text("MAKE FAVOURITE");
      }

    // Update menu to reflect itinerary status of item
    if ( localStore.isInItinerary( 1, section, item) ) {
      $itinA.addClass("is-itin").find("span").text("REMOVE FROM ITINERARY");
      }
    else {
      $itinA.removeClass("is-itin").find("span").text("ADD TO ITINERARY");
      }

  });

  // ToDo page
  $(document).on("pagebeforeshow", ".todo-page", function() {
    var $page = $(this);
    interfaceBuild.buildFavouriteList();
    interfaceBuild.buildItineraryList();
    $page.find(".iscroll-wrapper").iscrollview("refresh");
  });

  $(document).on("vclick", ".btn-remove-todo", function(event) {
    var $a = $(this),
        $li = $a.closest("li"),
        section = $li.data("section"),
        item = $li.data("item"),
        $wrapper = $li.closest(".ui-listview"),
        list = $wrapper.data("list-id");
    event.preventDefault();
    $li.remove();
    localStore.removeFromList( list, section, item );
    $wrapper.iscrollview("refresh");
  });

  }(jQuery));


var interfaceBuild = function(){

  function BuildFavouriteList() {
    return ( BuildList(0, "#todo-list", "Your Favourites list is empty" ) );
  }

  function BuildItineraryList() {
    return ( BuildList(1, "#itin-list-1", "This Itinerary is empty" ) );
  }

  function BuildList(listID, listSelector, emptyMsg) {
    // It should not be necessary to add these classes to the empty message.
    // TODO: investigate why these are needed - it should enhance just like
    // the actual favourites
    var emptyToDoMsg =
          '<li class="ui-li ui-li-static ui-btn-up-c ui-li-last">' + emptyMsg + '</li>',
        base =
          '<li data-section="|section|" data-item="|item|"> \
           <a href="|href|">|title|\
             <img src="../map/images/|pin|-pin.png" alt="|alt|" class="ui-li-icon trail-pin"> \
           </a> \
           <a class="btn-remove-todo" href="#" data-ajax="false">Remove</a> \
           </li>',
        savedItems = store.get("todo"),
        $todoList = $(listSelector);
    $todoList.empty();
    if (!savedItems){
      $todoList.append(emptyToDoMsg);
      }
    else {
      $.each(savedItems, function(i) {
        var thisBase = base,
            sectionUC = this.section.charAt().toUpperCase() + this.section.slice(1);
        if (listID === this.listID) {
          thisBase = thisBase.replace('|section|', this.section);
          thisBase = thisBase.replace('|item|', this.item);
          thisBase = thisBase.replace('|href|', sectionUC + "/" + this.item + ".html");
          thisBase = thisBase.replace('|title|', this.title);
          thisBase = thisBase.replace('|alt|', sectionUC);
          thisBase = thisBase.replace('|pin|', sectionUC);
          $todoList.append(thisBase);
          }
        });
      $todoList.listview("refresh");
    }
  }

  return {
    buildFavouriteList: function(){
      return ( BuildFavouriteList() );
      },
    buildItineraryList: function() {
      return ( BuildItineraryList() );
      }
    }

}();

var localStore = function() {

  return  ( {
    saveFavourite: function ( obj ) {
      obj.listID = 0;
      return ( localStore.saveInList( obj ) )
      },

    removeFavourite: function( section, item ){
      return ( localStore.removeFromList( 0, section, item ) );
      },

    isFavourite: function( section, item ) {
      return ( localStore.isInList( 0, section, item) );
      },

    saveInItinerary: function( obj ) {
      return ( localStore.saveInList( obj) );
      },

    removeFromItinerary: function( section, item ){
      return ( localStore.removeFromList( 1, section, item) );
      },

    isInItinerary: function( section, item ) {
      return ( localStore.isInList(1, section, item) );
      },

    isInList: function (listID, section, item) {
      var found = false,
          savedItems = store.get("todo");
      if (savedItems === undefined) {
        return false;
        }
      $.each( savedItems, function() {
        if (this.listID === listID && this.item === item && this.section === section) {
          found = true;
          return;
          }
        });
      return found;
      },

    saveInList: function( obj ) {
      var found = false,
          savedItems = store.get("todo");

      if ( savedItems === undefined ) {
        savedItems = new Array();
        savedItems[0] = obj;
        store.set( "todo", savedItems );
        return;
        }
      else {
        $.each(savedItems, function() {
          if (this.listID === obj.listID && this.item === obj.item && this.section === obj.section) {
            found = true;
            return;
            }
          });
        if (!found) {
          savedItems.push( obj );
          store.set( "todo", savedItems );
          }
        return;
        }
      },

    // Returns false if empty, true if not empty
    removeFromList: function( listID, section, item ) {
      var savedItems = store.get("todo");

      if ( savedItems === undefined ) {
        return false;
        }

      $.each( savedItems, function(index){
        if ( this.listID === listID && this.section === section && this.item === item ){
          savedItems.splice(index, 1);
          return;
          }
        });

      if (savedItems.length){
        store.set("todo", savedItems);
        }
      else {
        store.remove("todo");
        return false;
        }

      return true;
      }

    } );

  } ();