// Preloader

const preloader = document.querySelector('.preloader');


window.onload = () => {
  preloader.style.opacity -= 0.4;
  setTimeout(()=> preloader.remove(),500)
};



// ScrollTo Logic
document.querySelectorAll('.navbarHandler').forEach(item => {
    item.addEventListener('click', event => {
        let target = event.target;
        if (target.tagName != 'A') return; // not an anchor? Then we're not interested
        let section = target.getAttribute("data-section")
        if (section == 'contacts') {
            gsap.to(window, { duration: 1.5, scrollTo: { y: "max" } })
        } else if(section == 'career') {
            gsap.to(window, { duration: 1.5, scrollTo: { y: "#" + section, offsetY: 98 } });
        } else {
            gsap.to(window, { duration: 1.5, scrollTo: { y: "#" + section, offsetY: 200 } });
        }
    })
})


// Scroll to "Get Quote"

function getQuote() {
    gsap.to(window, { duration: 1.5, scrollTo: { y: "#quote", offsetY: 150 } }); //GSAP Scroll
}


// Contacts page toggle (jQuery)
$(document).on('change', '.div-toggle', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
});
$(document).ready(function() {
    $('.div-toggle').trigger('change');
});


// Maps + Autocomplete 

function initialize() {
    initMap();
    initAutocomplete();
};

function init_map() {
    // Latitude & longitude setting
	var myLatLng = new google.maps.LatLng(38.57472310311093, -121.32410417872279);
    // Style settings
    var myOptions = { zoom: 17, center: myLatLng, mapTypeId: google.maps.MapTypeId.ROADMAP, styles: [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": "50" }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "lightness": "30" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "lightness": "40" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "lightness": -25 }, { "saturation": -100 }] }] };
    // Maps init
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

    // Additional settings
    var noPoi = [{
        featureType: "poi",
        elementType: "labels",

        stylers: [{
            visibility: "off"
        }]
    }];

    map.setOptions({
        styles: noPoi
    });

    // Marker init
    var marker = new google.maps.Marker({
	    position:myLatLng,
	    map:map
  	});

    // Marker Content
  	var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h6 id="firstHeading" class="firstHeading">Russo Brothers Transport Inc</h6>'+
        '<div id="bodyContent">'+
        '<a><i class="fas fa-building mr-2 color-red"></i>3054 Fite Cir Suite 106</a></br>'+
        '<a style="margin-left: 20px;">Sacramento, CA 95827</a></br>'+
        '</div>'+
        '</div>';
    // Infowindow init
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    infowindow.open(map,marker);

}
google.maps.event.addDomListener(window, 'load', init_map);
$(document).on('pageshow', '#wrapper', function(e, data) {
    initialize();
});

// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.


var placeSearch, autocomplete, autocomplete2;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (document.getElementById('autocomplete')), {
            types: ['geocode']
        });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', function() {
        fillInAddress(autocomplete, "");
    });

    autocomplete2 = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (document.getElementById('autocomplete2')), {
            types: ['geocode']
        });
    autocomplete2.addListener('place_changed', function() {
        fillInAddress(autocomplete2, "2");
    });

}

function fillInAddress(autocomplete, unique) {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
        if (!!document.getElementById(component + unique)) {
            document.getElementById(component + unique).value = '';
            document.getElementById(component + unique).disabled = false;
        }
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType] && document.getElementById(addressType + unique)) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType + unique).value = val;
        }
    }
}
google.maps.event.addDomListener(window, "load", initAutocomplete);





//Scroll Background Color (jQuery)
$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar-custom-bg");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll >= 50) {
        //console.log('a');
        $(".outer-line").addClass("outer-line-hide");
    } else {
        //console.log('a');
        $(".outer-line").removeClass("outer-line-hide");
    }
});
