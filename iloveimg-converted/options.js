const option=function(name,value=null){
		this.name=name;
		this.value=value;
}

const options=function(){

	const verOpt=function(opt){
		let result=true;
		switch(opt.name){
			case('text'):
				if(opt.value.length<2){
					result=false;
					console.log("Недопустимоек количество символов(менее 2х)!!!")
				}
				break;
			case('area'):
				if(typeof(opt.value)!='number'){
					result=false;
					console.log("В качестве параметра необходимо указывать Индекс Локации!!")
				}
				break;
		}
		return result;
	}

	return{
		addOption(opt){
			if(verOpt(opt))
			this[opt.name]=opt.value;
		},
		getAllOptions(){
			return JSON.parse(JSON.stringify(this));
		}
	}
};