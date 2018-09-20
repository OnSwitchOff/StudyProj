const max=2000;//maxSalary value

let minLim=0/max;//*100%
let maxLim=2000/max;//*100%
let rangeWidth=maxLim-minLim/max;
console.log(($(".salary").width()));

let width=($(".salary").width()+2)*0.8;//width range line px


const left=document.querySelector(".salary .leftLim");
const right=document.querySelector(".salary .rightLim");
const actRange=document.querySelector(".salary .activeRange");
const rangeLine=document.querySelector(".salary .rangeLine");
const from=document.querySelector('.salary [name="from"]');
const to=document.querySelector('.salary [name="to"]');
from.value=0;
to.value=0;

from.value=minLim*max;
to.value=maxLim*max;

left.style.left=-8+minLim*(width)+"px";
right.style.left=-8+maxLim*(width)+"px";

actRange.style.left=parseInt(left.style.left)+7.5+"px";
actRange.style.width=parseInt(right.style.left)-parseInt(left.style.left)+1+'px';

let mDownR=false;
let mDownL=false;
let startX;

right.onmousedown = function(e) {
	mDownR=true;
	startX=e.pageX;
	startR=parseInt(right.style.left);
};

left.onmousedown = function(e) {
	mDownL=true;

	startX=e.pageX;
	startL=parseInt(left.style.left);
};

document.onmouseup = function(e) {
	mDownR=false;
	mDownL=false;
	startX=null;
	startL=null;
	startR=null;
};



document.onmousemove=function(e){
	let moveX=e.pageX-startX;
	
	if(moveX<1&&moveX>-1){
		return;
	}
	if(mDownL && (parseInt(right.style.left)>=parseInt(left.style.left)) && (parseInt(left.style.left)>=-8)){
		left.style.zIndex=30;
		right.style.zIndex=20;
		left.style.left=startL+moveX+'px';
	
		if(parseInt(right.style.left)<parseInt(left.style.left)){
			left.style.left=right.style.left;
		}
		if(parseInt(left.style.left)<(-8)){
			left.style.left=-8+'px';
		}
		from.value=(max*(parseInt(left.style.left)+8)/(width)).toFixed(2);
	}	
	else if (mDownR && (parseInt(right.style.left)>=parseInt(left.style.left)) && parseInt(right.style.left)<=(width-8)){
		left.style.zIndex=20;
		right.style.zIndex=30;
		right.style.left=startR+moveX+'px';

		if(parseInt(right.style.left)<parseInt(left.style.left)){
			right.style.left=left.style.left;
		}
		if(parseInt(right.style.left)>(width-8)){
			right.style.left=(width-8)+'px';
		}
		to.value=(max*(parseInt(right.style.left)+8)/(width)).toFixed(2);
	}
	else{
		mDownR=false;
		mDownL=false;
		startX=null;
		startL=null;
		startR=null;
	}
	actRange.style.left=parseInt(left.style.left)+7.5+"px";
	actRange.style.width=parseInt(right.style.left)-parseInt(left.style.left)+1+'px';
}


