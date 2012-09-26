
$(document).bind("mobileinit", function(){
    $.mobile.touchOverflowEnabled = true;
    $.mobile.pushStateEnabled = true;
    $.mobile.orientationChangeEnabled = false;
});


$(document).on('pageinit', ".ui-page", function() {

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
  });

 // if (hidden) { $page.css("display", "") };

});


$(document).bind('pageinit', function(){
    var menuStatus;

    $("#popup").click(function(){
        alert("Sorry no contact information available");
    });

    $(".popupalert").click(function(){
        alert("Sorry no contact information available");
    });


        // Show menu
    $("a.showMenu").click(function() {
        if (menuStatus != true) {
            $(".ui-page-active").animate({
                marginLeft : "200px",
            }, 300, function() {
                menuStatus = true
            });
            return false;
        } else {
            $(".ui-page-active").animate({
                marginLeft : "0px",
            }, 300, function() {
                menuStatus = false
            });
            return false;
        }
    });

    var pathname = window.location.pathname;
    var isFav = pathname.indexOf('favorites.html');
    if (isFav > 0){
        var urlVars = getUrlVars();
        if (urlVars.title){ // do we need to save a favorite?

            favitem = {
                    section: decodeURIComponent(urlVars.section),
                    title: decodeURIComponent(urlVars.title),
                    item: decodeURIComponent(urlVars.item)
            };
            localStore.doSaveFavorite(favitem);
        }

        if (urlVars.remove){ // are we removing a favorite?
            localStore.doRemoveFavorite(urlVars.remove);
        }

        interfaceBuild.buildFavoriteList();


    }



});



var interfaceBuild = function(){
    function BuildFavoriteList(){


        var base = '<li><a href="../www/|itemdirectory|/|linkpage|" rel="external">|itemtitle|</a><a href="./favorites.html?remove=|item|"  rel="external">Remove</a></li>';

        var savedItems = store.get('faves');

        if (savedItems != undefined){

            $.each(savedItems, function(i){
                var thisBase = base;

                thisBase = thisBase.replace('|itemdirectory|', this.section);
                thisBase = thisBase.replace('|linkpage|', this.item + '.html');
                thisBase = thisBase.replace('|itemtitle|', this.title);
                thisBase = thisBase.replace('|item|', i);


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

    function getAllStorage(){
        return store.getAll()
    };


    function saveFavorite(newItem){
       var found = false;

       var savedItems = store.get('faves');

       if (savedItems == undefined){
           savedItems = new Array();
           savedItems[0] = newItem;
           store.set('faves', savedItems);
           return;
       } else {

           $.each(savedItems, function(){
               if (this.item == newItem.item && this.section == newItem.section){
                found = true;
               }
           });

           if (!found) {

               savedItems.push(newItem);
               store.set('faves', savedItems);
           }

           return;
       }

    };


    function removeFavorite(item){

        var savedItems = store.get('faves');

        if (savedItems == undefined){
            return;
        }

        savedItems.splice(item, 1);

        if (savedItems.length){
            store.set('faves', savedItems);
        } else {
            store.remove('faves');
        }

        return true;
    }



    return {
        doSaveFavorite: function(item){
            return saveFavorite(item);
        },
        doRemoveFavorite: function(item){
            return removeFavorite(item);
        }
    }

}();

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
var getUrlVars = function()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
