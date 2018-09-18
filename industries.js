
class Industry {
	constructor(name){
		this.name=name;
	}
	render(){
		return "<p><label></label><input type=\"checkbox\" checked name="+this.name+"/>"+this.name+"</p>";
	}
}


class Industries {
	constructor(){
		this.indArr=()=>{	
			axios.get('https://api.hh.ru/industries',{method:'get'})
			.then(
				(response)=>{
					console.log(response);
					return response.map((value)=>value.industries.name);
				})
			.catch(
				(reason)=>{console.log('-');
				console.log(reason);
				return [];
				})
		};
	}
	render(){		
		document.querySelector('.industries').innerHTML=this.indArr.reduce((acc,value)=>acc + new Industry(value).render(),"<h2>Industries<h2>");
	}
}


class Employment {
	constructor(name){
		this.name=name;
	}
	render(){
		return `<label><input type="checkbox" checked name=${this.name}/>${this.name}</label>`;
	}
}


class EmpTypes {
	constructor(){
		this.empArr=()=>{	
			axios.get('https://api.hh.ru/employment',{method:'get'})
			.then(
				(response)=>{
					console.log(response);
					return response.map((value)=>value.name);
				})
			.catch(
				(reason)=>{console.log('-');
				console.log(reason);
				return [];
				})
		};
	}
	render(){		
		document.querySelector('.JobType').innerHTML=this.empArr.reduce((acc,value)=>acc + new Employment(value).render(),"<h2>Job Type<h2>");
	}
}


class Expirience {
	constructor(name){
		this.name=name;
	}
	render(){
		return `<label><input type="checkbox" checked name=${this.name}/>${this.name}</label>`;
	}
}


class ExpList {
	constructor(){
		this.expArr=()=>{	
			axios.get('https://api.hh.ru/expirience',{method:'get'})
			.then(
				(response)=>{
					console.log(response);
					return response.map((value)=>value.name);
				})
			.catch(
				(reason)=>{console.log('-');
				console.log(reason);
				return [];
				})
		};
	}
	render(){		
		document.querySelector('.Expirience').innerHTML=this.expArr.reduce((acc,value)=>acc + new Expirience(value).render(),"<h2>Expirience<h2>");
	}
}


class Category {
	constructor(name){
		this.name=name;
	}
	render(){
		return `<label><input type="checkbox" checked name=${this.name}/>${this.name}</label>`;
	}
}


class Categories {
	constructor(){
		this.catArr=()=>{	
			axios.get('https://api.hh.ru/specializations',{method:'get'})
			.then(
				(response)=>{
					console.log(response);
					return response.map((value)=>value.specializations.name);
				})
			.catch(
				(reason)=>{console.log('-');
				console.log(reason);
				return [];
				})
		};
	}
	render(){		
		document.querySelector('.Categories').innerHTML=this.catArr.reduce((acc,value)=>acc + new Category(value).render(),"<h2>Categories<h2>");
	}
}



const Inds = new Industries();
Inds.render();
const Emps = new EmpTypes();
Emps.render();
const Exps = new Explist();
Exps.render();
const Cats = new Categories();
Cats.render();