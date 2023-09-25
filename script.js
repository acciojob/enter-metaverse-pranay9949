//your JS code here. If required.
let a=document.getElementById("status");
let b=document.getElementById("enterBtn");
function change(){
	let c=document.createElement("h1");
	c.innerText="Entered Metaverse";
		a.replaceWith(c);
	
}
b.addEventListener('click',change);