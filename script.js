//your JS code here. If required.
let a=document.getElementById("status");
let b=document.getElementById("enterBtn");
b.addEventListener("click",()=>{
	let c=document.createElement("h1");
	c.innerText="Entered Metaverse";
	c.id="status";
	document.body.insertBefore(c,a);
	a.remove();
	
	
});
b.addEventListener('click',change);