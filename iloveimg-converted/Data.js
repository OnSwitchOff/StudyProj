const base="https://api.hh.ru/";
let vacanciesData=[];
let countries=[];
let areas=[];	
let ops;
let pages;
let page=0;
let perPage=6;

let map;
let markers = [];
const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let locations = [];
let locationTitles = [];

let lastLocations=[];
let lastVacancies=[];

function clearData(){
        lastLocations=locations.map(function(location){return location;});
        locations=[];
        lastVacancies=locations.map(function(location){return location;});
        vacancies=[];
        countries=[];
		areas=[];
		markers = [];
}
      
   