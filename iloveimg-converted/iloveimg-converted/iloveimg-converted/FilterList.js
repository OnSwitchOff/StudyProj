const FilterList=(function(){
	let filtArr=[];

	const searchByName=function(name){
		return filtArr.indexOf(name);
	}
	return{
		addCategory:function(value){
			filtArr.push(value);
		},
		removeCategory:function(value){
			(searchByName(value)>=0)?filtArr.splice(searchByName(value),1):console.log("wrong name of category.");
		},
		renderList:function(targetDiv){
			filtArr.reduce(function(acc,value){
				return acc+`<div class="filtCategory">
								<div class="filtCaption">
									<span class="text"></span>
									<div class="hideBtn"></div>
								</div>
								<div class="filtValues">
									<span class="filtValue"></span>
									<span class="resultCounter"></span>
								</div>
							</div>`
			})
		}
	}
};);