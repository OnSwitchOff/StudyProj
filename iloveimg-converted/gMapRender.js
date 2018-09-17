function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: locations[0]
        });

        // Create an array of alphabetical characters used to label the markers.


        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
      
        markers=setMarkers(locations);

       /* markers1 = locations1.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
         console.log(markers1);*/

       /* markers2 = locations2.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
        console.log(markers2);*/

        // Add a marker clusterer to manage the markers.
        var markerCluster1 = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

      }

      function setMarkers(locations) {
        return locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            title: locationTitles[i]
          });
        });
      }

      function reloadMarkers(markers,locations) {
          // Loop through markers and set map to null for each
          for (var i=0; i<markers.length; i++) {
              markers[i].setMap(null);
          }
          console.log(markers);
          // Reset the markers array
          markers = [];
          // Call set markers to re-add markers
          markers = setMarkers(locations);
          initMap();
      }
