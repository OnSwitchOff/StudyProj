const base="https://api.hh.ru/"


/*получений локаций определенной страны*/
let locations=function(country){
	$.ajax({url:base+'areas',method:'get',
		success:function(data){
			return data;
		},
		error:function(error){
			console.log(error);
		},
		dataFilter:function(data){
			console.log(data);
		},
		data:{
			id:country
		}
	});
};	

let getCountryId=function(country){
	$.ajax({url:base+'/areas/countries',method:'get',
		success:function(data){
			return data.id;
		},
		error:function(error){
			console.log(error);
		},
		dataFilter:function(data){
			console.log(data);
		},
		data:{
			name:country
		}
	});
};	

let vacanciesSearch=function(keyword,location){
	$.ajax({url:base+'/vacancies',method:'get',
		success:function(data){
			return data;
		},
		error:function(error){
			console.log(error);
		},
		dataFilter:function(data){
			console.log(data);
		},
		data:{
			text:keyword,
			area:location
		}
	});