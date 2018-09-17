function vacanciesRender(){
	$('.totalpages').text('of '+pages);
	let index=0;
	$('.currentPage').text(page+1);
	console.log(page);

	let result=vacanciesData.reduce(function(acc,cur){
		index++;
		if ((page*perPage)<index && index<(page*perPage+perPage))
		{	console.log('+');
			return acc+`<div class="card">
							<div class="name">${cur.name}</div>
							<div class="info">
								<div class="posted">
									<span class="text">Posted</span>
									<span class="value">${cur.posted}</span>
								</div>
								<div class="location">
									<span class="text">Location</span>
									<span class="value">${cur.city}</span>
								</div>
								<div class="jobType">
									<span class="text">Job type</span>
									<span class="value">${cur.type}</span>
								</div>
							</div>
							<div class="shortDetails">${cur.details}</div>
							<div class="fullInfoLink"><a href="${cur.url}">View full job description</a></div>
						</div>`}
		else {return acc;}
		}
	,'');
	$(".browse").html(result);
}