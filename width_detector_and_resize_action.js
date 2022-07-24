
window.onload = function()
{
modeling()
sp1Height()
}


addEventListener('resize',
(event) => {
modeling()
sp1Height()
//onresize = (event) => {model.style.display="none";};
});



function modeling()
{
let height2=window.innerHeight
let width2=window.innerWidth
//console.log(window.innerWidth)

var num2,num4,num6,num6,num8,num10

num2=(window.innerWidth-77)*2/12
num4=(window.innerWidth-47)*4/12
num6=(window.innerWidth-37)*6/12
num8=(window.innerWidth-32)*8/12
num10=(window.innerWidth-29)*10/12
num12=(window.innerWidth)

//console.log(num4 + " " + window.innerWidth)

if(width2<510)
{

var elements1 = document.getElementsByClassName("small-2")
var elements2 = document.getElementsByClassName("small-4") 
var elements3 = document.getElementsByClassName("small-6") 
var elements4 = document.getElementsByClassName("small-8")
var elements5 = document.getElementsByClassName("small-10")
var elements6 = document.getElementsByClassName("small-12")
    

for (var i= 0 ;i<elements1.length;i++)
{
    elements1[i].style.width=(num2+"px");
    elements1[i].style.transition    
}
for (var i= 0 ;i<elements2.length;i++)
{    
    elements2[i].style.width=(num4+"px");
}
for (var i= 0 ;i<elements3.length;i++)
{    
    elements3[i].style.width=(num6+"px");
}
for (var i= 0 ;i<elements4.length;i++)
{    
    elements4[i].style.width=(num8+"px");
}
for (var i= 0 ;i<elements5.length;i++)
{    
    elements5[i].style.width=(num10+"px");
}
for (var i= 0 ;i<elements6.length;i++)
{   
    elements6[i].style.width=(num12+"px");
}

}else if (width2<651 && width2>509)
{
    var elements1 = document.getElementsByClassName("big-2")
    var elements2 = document.getElementsByClassName("big-4") 
    var elements3 = document.getElementsByClassName("big-6") 
    var elements4 = document.getElementsByClassName("big-8")
    var elements5 = document.getElementsByClassName("big-10")
    var elements6 = document.getElementsByClassName("big-12")
        
    
    for (var i= 0 ;i<elements1.length;i++)
    {
        elements1[i].style.width=(num2+"px");    
    }
    for (var i= 0 ;i<elements2.length;i++)
    {    
        elements2[i].style.width=(num4+"px");
    }
    for (var i= 0 ;i<elements3.length;i++)
    {    
        elements3[i].style.width=(num6+"px");
    }
    for (var i= 0 ;i<elements4.length;i++)
    {    
        elements4[i].style.width=(num8+"px");
    }
    for (var i= 0 ;i<elements5.length;i++)
    {    
        elements5[i].style.width=(num10+"px");
    }
    for (var i= 0 ;i<elements6.length;i++)
    {   
        elements6[i].style.width=(num12+"px");
    }



}else if (width2<1500 && width2>650)
{

    var elements1 = document.getElementsByClassName("bigger-2")
    var elements2 = document.getElementsByClassName("bigger-4") 
    var elements3 = document.getElementsByClassName("bigger-6") 
    var elements4 = document.getElementsByClassName("bigger-8")
    var elements5 = document.getElementsByClassName("bigger-10")
    var elements6 = document.getElementsByClassName("bigger-12")
        
    
    for (var i= 0 ;i<elements1.length;i++)
    {
        elements1[i].style.width=(num2+"px");    
    }
    for (var i= 0 ;i<elements2.length;i++)
    {    
        elements2[i].style.width=(num4+"px");
    }
    for (var i= 0 ;i<elements3.length;i++)
    {    
        elements3[i].style.width=(num6+"px");
    }
    for (var i= 0 ;i<elements4.length;i++)
    {    
        elements4[i].style.width=(num8+"px");
    }
    for (var i= 0 ;i<elements5.length;i++)
    {    
        elements5[i].style.width=(num10+"px");
    }
    for (var i= 0 ;i<elements6.length;i++)
    {   
        elements6[i].style.width=(num12+"px");
    }

}
}



function sp1Height()
{
    var divHeightSet = document.getElementById("pp1").offsetHeight;
    document.getElementById("pp2").style.paddingTop=divHeightSet+"px";    
}