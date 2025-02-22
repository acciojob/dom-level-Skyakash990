let element=document.getElementById("level");

function getDomLeve(elem){
	let level=0;
	while(elem){
		level++;
		elem=elem.parentElement;
	}
	return level;
}
let level=getDomLeve(element);
alert("The level of the element is: " +  level);