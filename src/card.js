
import {itemsObj} from "./items.js";
let cards=Array.from(document.querySelectorAll(".card"));
cards.forEach(function(elem,index){
    elem.querySelector("img").src=`img/${itemsObj[index].imgSrc}`;
    elem.querySelector("h5").innerHTML=`<br>${itemsObj[index].nameTovar}`;
    let str=`<br>Корпус: ${itemsObj[index].corpus}
    <br>Ремешок: ${itemsObj[index].remen}
    <br>Размер дисплея: ${itemsObj[index].displaySize}
    <br>Тип дисплея:${itemsObj[index].displayType}`;
    if(itemsObj[index].bluetooth) str+="<br>Блютуз:есть";
    else str+="<br>Блютуз:нет";
str+=`<br>Операционные системы: ${itemsObj[index].OS.os1}, ${itemsObj[index].OS.os2}`;
elem.querySelector(".card-text").innerHTML=str;
});