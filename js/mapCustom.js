function initMap() {
    let mapElement = document.getElementById('map');
    if (mapElement) {
        let myLatlng = new google.maps.LatLng(51.491454, 31.302786);
        let maptooltipbold = 'ул.Шевченко';
        let maptooltip = 'I am';
        let mapOptions = {
            zoom: 16,
            scrollwheel: false,
            clickable: false,
            draggable: !("ontouchend" in document),
            center: myLatlng,
            styles: [{featureType:"landscape",
                stylers:[{saturation:-85},{lightness:65},{visibility:"on"}]},{featureType:"poi",
                stylers:[{saturation:-85},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",
                stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",
                stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",
                stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",
                stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",
                stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",
                stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",
                stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",
                stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",
                stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
        };
        let map = new google.maps.Map(mapElement, mapOptions);
        let image = './img/marker/marker.png';
        let content = document.createElement('div');
        content.innerHTML = "<div class="+"map-tooltip"+"><h4><strong>"+maptooltipbold+"</strong></h4><hr>"+"<h5>"+maptooltip+"</h5></div>";
        let infowindow = new google.maps.InfoWindow({
            content: content
        });
        let marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            draggable: false,
            icon: image,
            animation: google.maps.Animation.BOUNCE
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
}