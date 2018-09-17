
$('.submit .subBut').click(function(){
	vacanciesData=[];
	ops=new options();
	const op1=new option('text',$('.fastSearch #keywords').val());
	const op2=new option("area",Number($('.fastSearch #location').attr('data-areaid')));
	console.log(op1);
	console.log(op2);
	ops.addOption(op1);
	ops.addOption(op2);
	console.log(ops);
	clearData();
	requestAxios();
});

$('.pageNav .prev').click(function(){
	if(page>0){
		page--;
		vacanciesRender();
	}
})

$('.pageNav .next').click(function(){
	if(page<(pages-1)){
		page++;
		vacanciesRender();
	}
})