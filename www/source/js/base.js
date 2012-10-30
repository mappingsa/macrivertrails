
(function ($) {
  // Comment-out the following line in order to be able to evaluate expressions
  // in Safari debug console when at a breakpoint!
  //"use strict";

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

    // Add to Itinerary button on place menu
    $page.find(".itin-btn").on("vclick", function(event) {
    var $a = $(this),
        //$popup = $page.find(".itin-popup"),
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
      $.mobile.changePage( "../itin_dialog.html" );
      }
  });

    // Add to Itinerary button (list item) on Add Itinerary popup
    $page.find(".itin-list").on("vclick", ".itin-add-btn", function(event) {
      var $a = $(this),
          section = $page.jqmData("section"),
          item = $page.jqmData("item"),
          title = $page.jqmData("title"),
          $li = $a.closest("li"),
          id = $li.jqmData("itin-id");
          //$prevPage = $page.jqmData("prev-page"),
          //$addItinBtn = $prevPage.find(".itin-btn");
      event.preventDefault();
      localStore.saveInItinerary( {listID: id, section: section, item: item, title: title} );
      //$addItinBtn.addClass("is-itin").find("span").text("REMOVE FROM ITINERARY");
      setTimeout(function() {
        $page.dialog("close");
        }, 0);
    });

    // Add to Itinerary button on Add Itinerary popup
    $page.find(".new-itin-submit-btn").on("vclick", function(event) {
      var $a = $(this),
          $addItinBtn = $page.find(".itin-btn"),
          section = $page.data("section"),
          item = $page.data("item"),
          title = $page.data("title"),
          $textInput = $a.find("input"),
          $target = $(event.target);

      event.preventDefault();
      if ($target.is(".ui-input-text")) {
        return;
      }
      else {
        //localStore.saveInItinerary( {listID: id, section: section, item: item, title: title} );
        //$addItinBtn.addClass("is-itin").find("span").text("REMOVE FROM ITINERARY");
        $.noop();
        }
    });

    // Add to Itinerary form on Add Itinerary popup
    $page.find(".new-itin-submit").on("submit", function(event) {
      var $a = $(this),
          $addItinBtn = $page.find(".itin-btn"),
          section = $page.data("section"),
          item = $page.data("item"),
          title = $page.data("title"),
          $textInput = $a.find("input");
      event.preventDefault();
      //localStore.saveInItinerary( {listID: id, section: section, item: item, title: title} );
      //$addItinBtn.addClass("is-itin").find("span").text("REMOVE FROM ITINERARY");
    });

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
        item = $page.data("item"),
        $addItinList = $page.find(".itin-list"),
        $itinList = $page.find(".itin-list"),
        $newItinItem = $itinList.find(".li-new-itin");

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

    // Update Add Itinerary popup with itinerary list
    $(document).on( "pagebeforeshow", ".itin-popup", function(event, data) {
      var $page = $(this),
          $itinList = $page.find(".itin-list"),
          $newItinItem = $itinList.find(".li-new-itin"),
          list = localStore.buildPopupList(),
          $itinItems = $itinList.find(".li-itin"),
          $newItinItem = $itinList.find(".li-new-itin"),
          $prevPage = data.prevPage;
      // Copy data from previous page
      //$page.jqmData("prev-page", $prevPage);
      $page.jqmData("section", $prevPage.jqmData("section"));
      $page.jqmData("title", $prevPage.jqmData("title"));
      $page.jqmData("item", $prevPage.jqmData("item"));
      $itinList.empty();
      $itinList.append(list);
      $itinList.listview("refresh");
    });

  // ToDo page
  $(document).on("pagebeforeshow", ".todo-page", function(event, data) {
    var $page = $(this);
    localStore.buildLists();
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

var localStore = function() {
  var todoKey = "todo",
      listsKey = "lists",
      // It should not be necessary to add these classes to the empty message.
      // TODO: investigate why these are needed - it should enhance just like
      // the actual favourites
      emptyFavMsg =
        '<li class="ui-li ui-li-static ui-btn-up-c ui-li-last">Your Favourites List is empty</li>',

      emptyItinMsg =
        '<li class="ui-li ui-li-static ui-btn-up-c ui-li-last">This Itinerary is empty</li>',

      itemTemplate =
        '<li data-section="|section|" data-item="|item|">\
         <a href="|href|">|title|\
         <img src="../map/images/|pin|-pin.png" alt="|alt|" class="ui-li-icon trail-pin">\
         </a>\
         <a class="btn-remove-todo" href="#" data-ajax="false">Remove</a>\
         </li>',

      listTemplate = ' \
        <div data-role="collapsible" data-collapsed="false">\
          <h3>|title|</h3>\
          <ul data-role="listview" data-split-icon="delete" data-list-id="|id|">|list|</ul>\
        </div>',

      itinPopupTemplate = '<li class="li-itin" data-icon="plus" data-itin-id="|id|"><a class="itin-add-btn" href="#" data-ajax="false">|title|</a></li>';

      defaultLists = [
        { listID: 0, title: "MY FAVOURITES" },
        { listID: 1, title: "MY ITINERARY" },
        { listID: 2, title: "MY OTHER ITINERARY" }
        ];

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
          savedItems = store.get(todoKey);
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
          savedItems = store.get(todoKey);

      if ( savedItems === undefined ) {
        savedItems = new Array();
        savedItems[0] = obj;
        store.set( todoKey, savedItems );
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
          store.set( todoKey, savedItems );
          }
        return;
        }
      },

    // Returns false if empty, true if not empty
    removeFromList: function( listID, section, item ) {
      var savedItems = store.get(todoKey);

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
        store.set(todoKey, savedItems);
        }
      else {
        store.remove(todoKey);
        return false;
        }

      return true;
      },

    getLists: function () {
      var found = false,
          lists = store.get(listsKey);

      if (lists === undefined) {
        return (defaultLists);
        }
      return lists;
      },

    buildLists: function() {
      var lists = localStore.getLists(),  // Get the list of lists
          listHTML = "";
      $.each( lists, function(i)  {
        listHTML += localStore.buildList(i);
        });
      $(".todo-page .iscroll-content").empty();
      $(".todo-page .iscroll-content").append(listHTML);
      $(".todo-page .iscroll-content").trigger("create");
      $(".todo-page .iscroll-wrapper").iscrollview("refresh");
    },

    // Build a list of Itineraries for the Add to Itinerary popup
    buildPopupList: function ( listID ) {
      var lists = localStore.getLists(),
          popupList = "";

      $.each( lists, function(i) {
        if (i) {  // Skip Favourites list
          var li = itinPopupTemplate;
          li = li.replace( "|id|", i );
          li = li.replace( "|title|", lists[i].title );
          popupList += li;
          }
        });

      return popupList;
    },

    // Build a list for the to-do page
    buildList: function( listID ) {
      var savedItems = store.get(todoKey),
          lists = localStore.getLists(),
          listHTML = listTemplate,
          itemsHTML = "";

      listHTML = listHTML.replace( "|title|", lists[listID].title );
      listHTML = listHTML.replace("|id|", listID);

      if (!savedItems) {
        listHTML = listHTML.replace("|list|", listID ? emptyItinMsg : emptyFavMsg );
        }
      else {
        $.each(savedItems, function(i) {
          var thisItem = itemTemplate,
              sectionUC = this.section.charAt().toUpperCase() + this.section.slice(1);
          if (listID === this.listID) {
            thisItem = thisItem.replace('|section|', this.section);
            thisItem = thisItem.replace('|item|', this.item);
            thisItem = thisItem.replace('|href|', sectionUC + "/" + this.item + ".html");
            thisItem = thisItem.replace('|title|', this.title);
            thisItem = thisItem.replace('|alt|', sectionUC);
            thisItem = thisItem.replace('|pin|', sectionUC);
            itemsHTML += thisItem;
            }
          });
        listHTML = listHTML.replace("|list|", itemsHTML );
        }
        return listHTML;
      }
    });

  } ();