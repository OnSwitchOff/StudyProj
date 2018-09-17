const requestsModule=(function(){

	return{

		getVacancies(options){

			$.ajax({
				url:base+"vacancies",
				method:'GET',
				success:function(vacList){
						
							console.log(vacList);
							lastIndex=vacanciesData.length;
							vacList.items.forEach(function(vacancy,i) {
								i+=lastIndex;
								vacanciesData[i]={};

								vacanciesData[i]['name']=vacancy.name;

								if (vacancy.address!=null) {
									vacanciesData[i]['city']=vacancy.address.city;
									vacanciesData[i]['street']=vacancy.address.street;
									vacanciesData[i]['building']=vacancy.address.building;
									vacanciesData[i]['lat']=vacancy.address.lat;
									vacanciesData[i]['lng']=vacancy.address.lng;
								}

								vacanciesData[i]['salary']=vacancy.salary;
								vacanciesData[i]['id']=vacancy.id;

								if (vacancy.phones!=null){
									vacanciesData[i]['phones']=vacancy.contacts.phones.reduce(function(acc,cur){
										return acc+"+"+cur.country+'('+cur.city+')'+cur.number+'\n';
									},'');
								}
								
							});					


							console.log((vacList.page+1)+'/'+vacList.pages);

							if(vacList.page<(vacList.pages-1))
							{
								const pageN=new option("page",(vacList.page+1));
								options.addOption(pageN);
								requestsModule.getVacancies(options);
							}
							else
							{
								const pageN=new option("page",0);
								options.addOption(pageN);
								console.log(vacanciesData);
							}						
					
					},

				error:function(e){
					console.log(e);
				},
				data:options.getAllOptions()
			});
		},

		getAreas(){
			$.ajax({
				url:base+"areas",
				method:'GET',
				success:function(countryList){
					countryList.forEach(function(country) {
						countries.push( { 'Name': country.name,  'CountryId': country.id});
						country.areas.forEach(function(area){
							areas.push({'Name':area.name,'AreaId':area.id,'CountryId':area.parent_id});
						});
					});
					console.log(areas,countries);
				},
				error:function(e){
					console.log(e);
				}
			});},

	}
})();

/*const op1=new option("text","junior AND javascript");
const op2=new option("area",2);
const op3=new option("currency",'EUR');
const op5=new option("salary",400);
const op4=new option('only_with_salary',true);
const op=new option('page',1);

options.addOption(op1);
options.addOption(op2);
options.addOption(op3);
options.addOption(op4);
options.addOption(op5);
options.addOption(op6);

requestsModule.getVacancies(options);*/

/*for (var i = 1; i < 3; i++) {
	const pageN=new option("page",i);
	options.addOption(pageN);
	requestsModule.getVacancies(options);
}*/



/*function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 48.563910, lng: 33}  
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
         console.log(markers);

         var markers2 = locations2.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
        console.log(markers2);

        // Add a marker clusterer to manage the markers.
        var markerCluster1 = new MarkerClusterer(map, markers,
            {imagePath: 'm'});

        var markerCluster2 = new MarkerClusterer(map, markers2,
            {imagePath: 'm'});

      }*/


      



