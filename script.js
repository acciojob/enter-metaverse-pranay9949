//your JS code here. If required.
let a=document.getElementById("status");

function change(){
	let c=document.createElement("h1");
	c.innerText="Entered Metaverse";
	document.body.insertBefore(c,a);
	a.remove();
	
}
b.addEventListener('click',change);