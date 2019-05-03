// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Increments the delay on each item.
$('.rolldown-list li').each(function () {
    var delay = ($(this).index() / 4) + 's';
    $(this).css({
      webkitAnimationDelay: delay,
      mozAnimationDelay: delay,
      animationDelay: delay
    });
  });
  
  $('#btnReload').click(function () {
    $('#myList').removeClass('rolldown-list');
    setTimeout(function () {
      $('#myList').addClass('rolldown-list');
    }, 1);
  });

  $('#myCarousel').carousel({
	interval: 3500
});

// This event fires immediately when the slide instance method is invoked.
$('#myCarousel').on('slide.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
		
  	// Added a statement to make sure the carousel loops correct
		if(e.direction == 'right'){
	    id = parseInt(id) - 1;  
      if(id == -1) id = 12;
    } else{
        id = parseInt(id) + 1;
        if(id == $('[id^=carousel-thumb-]').length) id = 0;
    }
  
    $('[id^=carousel-thumb-]').removeClass('selected');
    $('[id=carousel-thumb-' + id + ']').addClass('selected');
});

// Thumb control
$('[id^=carousel-thumb-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#myCarousel').carousel(id);
  $('[id^=carousel-thumb-]').removeClass('selected');
  $(this).addClass('selected');
});

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


$('#introPage').find('.content').css({
  opacity: 1.0,
});

function initMap() {
  var uluru = {
    lat: 49.276663,
    lng: -123.120982
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 16,
    center: uluru,
    disableDefaultUI: true,
    styles: [
      {
        "featureType": "administrative",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      }, {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      }, {
        "featureType": "water",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      }, {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      }, {
        "featureType": "landscape",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      }, {
        "featureType": "road.highway",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      }, {
        "featureType": "water",
        "stylers": [
          {
            "color": "#84afa3"
          },
          {
            "lightness": 52
          }
        ]
      }, {
        "stylers": [
          {
            "saturation": -77
          }
        ]
      },{
        "featureType": "road"
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}