
var nameLenght = "idan".length
var lastNameLenght = "kario".length
var show //array of box elements

var firstOneShow
var indecator=1;
var divContainer ;

function boldName(){
	if(indecator>0){	
        divContainer[0].style.backgroundColor ="#8A2BE2";
		divContainer[2].style.backgroundColor ="#8A2BE2";
		divContainer[3].style.backgroundColor ="#8A2BE2";
		divContainer[4].style.backgroundColor ="#8A2BE2";
		indecator--;
	}  
   
}
 
function unBoldName(){
	if(indecator<1){
		divContainer[0].style.backgroundColor ="#7FDBFF";
		divContainer[2].style.backgroundColor ="#7FDBFF";
		divContainer[3].style.backgroundColor ="#7FDBFF";
		divContainer[4].style.backgroundColor ="#7FDBFF";
		indecator++;
	}
}



window.onload = function(){

    divContainer =document.getElementsByTagName("main")[0];
	var p= document.createElement("p")
	p.innerHTML ="idan"[0]
	p.style.display = "none"
	var newDiv=this.document.createElement("div")
	newDiv.appendChild(p)
	newDiv.className="firstChar"
	divContainer.appendChild(newDiv)
    var firstE=newDiv;
    for(var i=1;i<nameLenght*lastNameLenght;i++)
	{
		newDiv=document.createElement("div")
		divContainer.appendChild(newDiv)
    }
    firstE.addEventListener("mouseover",function(){firstE.style.backgroundColor="#9932CC"
	firstE.firstElementChild.style.display = "block"; });
    firstE.addEventListener("mouseout", function(){firstE.style.backgroundColor="#7FDBFF"
	firstE.firstElementChild.style.display = "none"; });
    divContainer =document.getElementsByTagName("main")[0].getElementsByTagName('*');

}
