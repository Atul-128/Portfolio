

let navh1= document.querySelector(".nav-h1");
let body= document.querySelector("body");
let navoptions= document.querySelector(".nav-options");
let navoptions2= document.querySelector(".nav-options2");
let navbtn= document.querySelector(".nav-btn");
let menuIcon = document.querySelector(".menu-icon");
let closeIcon =document.querySelector(".close-icon");

menuIcon.addEventListener("click",function(){
	navoptions2.style.display="flex";
	menuIcon.style.display="none";
	closeIcon.style.display="block";
})
closeIcon.addEventListener("click",function(){
	navoptions2.style.display="none";
	menuIcon.style.display="block";
	closeIcon.style.display="none";
})

navh1.addEventListener("click",function()
{
	body.style.backgroundColor="black";
	navh1.style.display="none";
	navoptions.style.display="none";
	navbtn.style.display="none";
	body.innerHTML=`<h1>PORTFOLIO</h1>`;
	body.style.color="palegreen";
	body.style.display="flex";
	body.style.alignItems="center";
	body.style.justifyContent="center";
	body.style.fontSize="80px";
})

let herosecImg=document.querySelector(".herosec-myimg");
let originalSrc="100.jpg";
let changeSrc="97.jpg";

herosecImg.addEventListener("click",function(){
if(herosecImg.src.includes(originalSrc))
{
	herosecImg.src=changeSrc;
}
else{
	herosecImg.src=originalSrc;
}
	
})

let aboutRightList=document.querySelector(".about-list");
let aboutRightSkills=document.querySelector(".about-skills");
let aboutRightEducation=document.querySelector(".about-edu");
let aboutRightList1=document.querySelector(".about-rig-list1");
let aboutRightList2=document.querySelector(".about-rig-list2");

aboutRightList1.style.display="none";
aboutRightList2.style.display="block";

	aboutRightSkills.addEventListener("click",function(){
	aboutRightList1.style.display="block";
	aboutRightList2.style.display="none";	

});
	aboutRightEducation.addEventListener("click",function(){
	aboutRightList2.style.display="block";
	aboutRightList1.style.display="none";	

});

let servicesBox1=document.querySelector(".services-box1");
let servicesBox2=document.querySelector(".services-box2");
let servicesBox3=document.querySelector(".services-box3");
let learn=document.querySelectorAll(".learn");


	servicesBox1.addEventListener("mouseover",function(){
	servicesBox1.style.backgroundColor="palegreen";
	servicesBox1.style.color="black";
});
	servicesBox1.addEventListener("mouseout",function(){
	servicesBox1.style.backgroundColor="black";
	servicesBox1.style.color="palegreen";
});

	servicesBox2.addEventListener("mouseover",function(){
	servicesBox2.style.backgroundColor="palegreen";
	servicesBox2.style.color="black";
});
	servicesBox2.addEventListener("mouseout",function(){
	servicesBox2.style.backgroundColor="black";
	servicesBox2.style.color="palegreen";
});

	servicesBox3.addEventListener("mouseover",function(){
	servicesBox3.style.backgroundColor="palegreen";
	servicesBox3.style.color="black";
});
	servicesBox3.addEventListener("mouseout",function(){
	servicesBox3.style.backgroundColor="black";
	servicesBox3.style.color="palegreen";
});
	learn.forEach(function(learn){
		learn.addEventListener("click",function(){
		alert("All details Coming soon...");
		})	
})

 let projectsh1=document.querySelector(".projects-h1");
let projectsbox=document.querySelector(".projects-box");

projectsh1.addEventListener("click",function(){
	projectsbox.style.display="flex";
}); 
	
	document.querySelectorAll('a[href="#"]').forEach(anchor=>{
		anchor.addEventListener("click",function(e){
			e.preventDefault();
			document.querySelectorAll(this.getAttribute('href'));
			scrollIntoView({
				behaviour:"smooth"
			});
		});
		
	})