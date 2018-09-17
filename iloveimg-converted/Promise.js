
const requestPromise=function()
{
	const test=new Promise(function(resolved,rejected){
		$.ajax({
			url:base+'vacancies',
			success(data){resolved(data);},
			error(reason){rejected(reason);},
			data:ops.getAllOptions()
		});
	});

	test.then(
		(vacList)=>{
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
				ops.addOption(pageN);
				requestPromise();
			}
			else
			{
				const pageN=new option("page",0);
				ops.addOption(pageN);
				console.log(vacanciesData);
			}					
		},
		(reason)=>{console.log('-');
			console.log(reason);}
		);
}

