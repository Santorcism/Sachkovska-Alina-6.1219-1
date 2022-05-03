var pic=0;

function left(){
    if(pic<8-settings.pics){
        pic++;
        document.getElementById("list").style.transform = "translateX("+(-517)*pic+"px)";
    } 
}

function right(){
    if(pic>0){
       pic--;
       document.getElementById("list").style.transform = "translateX("+(-517)*pic+"px)"; 
    } 
}

var settings = new Object();
settings.pics = 3;

function picchange(){
    settings.pics = document.getElementById("pics").options[document.getElementById("pics").selectedIndex].value;
    document.getElementById("slider_box").style.width = settings.pics*515 + "px";
}

function widthchange(){
    settings.width = document.getElementById("width").options[document.getElementById("width").selectedIndex].value;
    document.getElementById("slider_box").style.width = settings.width + "px";
    settings.pics = settings.width/515;
}

function speedchange(){
    settings.speed = document.getElementById("speed").options[document.getElementById("speed").selectedIndex].value;
    document.getElementById("list").style.transition = "all "+settings.speed;
}
