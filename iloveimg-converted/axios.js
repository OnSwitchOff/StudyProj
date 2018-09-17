
const requestAxios=function()
{	
	axios.get(base+'vacancies',{params:ops.getAllOptions()})
	.then(
		(response)=>{
			const vacList=response.data;
			console.log(vacList);
			lastIndex=vacanciesData.length;
			vacList.items.forEach(function(vacancy,i) {
				i+=lastIndex;
				vacanciesData[i]={};

				vacanciesData[i]['name']=vacancy.name;
				vacanciesData[i]['posted']=vacancy.published_at;
				vacanciesData[i]['type']=vacancy.type.name;
				vacanciesData[i]['details']="Требования: "+vacancy.snippet.requirement+'<br>Обязанности: '+vacancy.snippet.responsibility;
				vacanciesData[i]['url']=vacancy.url;

				if (vacancy.address!=null) {
					vacanciesData[i]['city']=vacancy.address.city;
					vacanciesData[i]['street']=vacancy.address.street;
					vacanciesData[i]['building']=vacancy.address.building;
					vacanciesData[i]['lat']=vacancy.address.lat;
					vacanciesData[i]['lng']=vacancy.address.lng;

					if(vacancy.address.lat!=null&&vacancy.address.lng!=null){
						locations.push({lat:(vacanciesData[i]['lat']), lng:(vacanciesData[i]['lng'])});
						locationTitles.push(vacancy.name);
					}					
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
				ops.addOption(pageN);
				requestAxios();
			}
			else
			{
				const pageN=new option("page",0);
				ops.addOption(pageN);
				console.log(vacanciesData);
				pages=Math.ceil(vacanciesData.length/perPage);
				$('.currentPage').text(1);
				page=0;
				console.log(pages);
				reloadMarkers(markers,locations);
				vacanciesRender();	
			}

		})
	.catch(
		(reason)=>{console.log('-');
		console.log(reason);})
}

