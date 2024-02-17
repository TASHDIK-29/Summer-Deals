let count = 1 ;
let cost = 0;
let finalCost = 0;
function addProductById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.querySelector('h2').innerText;
    
    createNewElement(elementText)
}

function createNewElement(text){
    const expectedElement = document.getElementById('item-list');
    
    const p = document.createElement('p');
    p.innerText =count+'. '+ text ;
    count++;
    expectedElement.append(p);
    
}

function calculateTotalById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.querySelector('p').innerText;
    
    const elementArray = elementText.split(' ');
    const price =elementArray[1];
    const expectedPrice = parseFloat(price);
    
    
    cost += expectedPrice;
    // update Total
    document.getElementById('total-price').innerText = cost.toFixed(2) ;
    document.getElementById('final-price').innerText = cost.toFixed(2) ;
    document.getElementById('discount').innerText = '0';

}