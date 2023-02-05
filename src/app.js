/*
Varga Vivien 
Szoftver 1/2/E
Feladat 0327
*/

const radius1Elem = document.querySelector("#radius1");
const radius2Elem = document.querySelector("#radius2");
const heightElem =  document.querySelector("#height");
const calcButton =  document.querySelector("#calcButton");
const areaElem =  document.querySelector("#area");

calcButton.addEventListener('click',()=> {

    let radius1 = Number(radius1Elem.value);
    let radius2 = Number(radius2Elem.value);
    let height  = Number(heightElem.value);
    let area    = calcArea(Math.PI, radius1, radius2, height);
    areaElem.value = area;

});

function calcArea(pi, radius1, radius2, height) {
    let area = (Math.PI * radius1 * radius2 * height) /3.0 ;
    return area;
    



};