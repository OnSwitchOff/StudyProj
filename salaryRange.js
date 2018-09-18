const max=2000;//maxSalary value

let minLim=0/max;//*100%
let maxLim=1500/max;//*100%
let rangeWidth=maxLim-minLim/max;

let width=240;//width range line px


const left=document.querySelector(".salary .leftLim");
const right=document.querySelector(".salary .rightLim");
const actRange=document.querySelector(".salary .activeRange");
const rangeLine=document.querySelector(".salary .rangeLine");

left.style.left=-10+minLim*(width+20)+"px";
right.style.left=-10+maxLim*(width+20)+"px";

actRange.style.left=-5+minLim*(width+20)+"px";
actRange.style.width=rangeWidth*(width+20)+'px';



rangeLine.onmousedown = function(e) {

	if(e.target==right)
	{		
		tempLeft=parseInt(right.style.left);
		tempX=e.pageX;
		console.log(tempLeft+"  "+tempX);
		setTimeout(right.style.left=(tempLeft+(e.pageX-tempX)+'px'),2000);
	}
};

