var menubtn=document.getElementById("menubtn");
var menu=document.getElementById("menu");
var sidenav=document.getElementById("sidenav");
menubtn.onclick=function(){
    if(sidenav.style.right=="-500px"){
    sidenav.style.right="0px";
    menu.src="img/close.png"
    }
    else{
        sidenav.style.right="-500px";
        menu.src="img/menu.png"
    }

}