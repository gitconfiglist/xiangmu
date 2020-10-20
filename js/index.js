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


var xiding_l = document.querySelector('#xiding_l');
var itop= xiding_l.offsetTop;

window.onscroll = function(){
    var scrollTop = window.pageYOffset;

    if(scrollTop>=itop){
        xiding_l.style.position='fixed';
        xiding_l.style.top=0;
    }
    else{
        xiding_l.style.position='absolute';
        xiding_l.style.top=itop + 'px';
    }
}

var xiding_r = document.querySelector('#xiding_r');
var itop= xiding_r.offsetTop;

window.onscroll = function(){
    var scrollTop = window.pageYOffset;

    if(scrollTop>=itop){
        xiding_r.style.position='fixed';
        xiding_r.style.top=0;
    }
    else{
        xiding_r.style.position='absolute';
        xiding_r.style.top=itop + 'px';
    }
}









function getIdName(id, tagName) { if (tagName != 0) { return document.getElementById(id).getElementsByTagName(tagName); } else { return document.getElementById(id); } }
function hdp(json) {
    var tiemr = null; var pd = 0; var index = 0; var that; var option = { li: "li", boxid: "", imgid: "", optid: "", an: "", prev: "", next: "", ms: 800 }
    for (var i in option) { if (json[i] != undefined) { option[i] = json[i]; } }
    var div = getIdName(option.boxid, 0); var imgs = getIdName(option.imgid, option.li); var lis = getIdName(option.optid, option.li); var an = getIdName(option.an, 0); var prev = getIdName(option.prev, 0); var next = getIdName(option.next, 0); var ms = option.ms; function lbt(that) {
        if (that >= 0) { index = that; } else { if (pd == 0) { index++; } else { index--; pd = 0; } }
        if (index >= lis.length) index = 0; if (index < 0) index = lis.length - 1; for (var j = 0; j < lis.length; j++) { lis[j].className = ""; imgs[j].className = ""; }
        lis[index].className = "on"; imgs[index].className = "current";
    }
    imgs[index].className = "current"; lis[index].className = "on"; for (var i = 0; i < lis.length; i++) { lis[i].index = i; lis[i].onclick = function () { that = this.index; lbt(that); } }
    timer = setInterval(lbt, ms); div.onmouseover = function () { clearInterval(timer); an.style.display = "block"; }
    div.onmouseout = function () { timer = setInterval(lbt, ms); an.style.display = "none"; }
    prev.onclick = function () { pd = 1; lbt(); }
    next.onclick = function () { pd = 0; lbt(); }
}

hdp({
    li:"li",	//默认值：li;默认用li包裹
    boxid:"boxhdp",	//最外面div  id
    imgid:"img",	//图片外面id
    optid:"li",	//opt外面id	
    an:"an",		//左右按钮id，用于移上显示和隐藏
    prev:"prev",	//左边箭头id
    next:"next",	//右边箭头id
    ms:3000		//多少毫秒切换一张,默认800毫秒
})


































