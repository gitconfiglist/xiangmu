var div_1=document.querySelector('#tab-1');
var div_2=document.querySelector('#tab-2');
var div_3=document.querySelector('#tab-3');
var active_1=document.querySelector('.active_1');
var active_2=document.querySelector('.active_2');
var active_3=document.querySelector('.active_3');

function nav(elem,elem1){
    elem.onmouseenter=function(){1        
        elem1.style.display='block';
    }
    elem.onmouseleave=function(){
        elem1.style.display='none'
    }
}


nav(active_1,div_1);
nav(active_2,div_2);
nav(active_3,div_3);



