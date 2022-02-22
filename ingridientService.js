


// ====================КОНТЕЙНЕР ДЛЯ ИНГРЕДИЕНТОВ======================================

export function addContainerElements1(fundament,fundamentalsContainer){
    for(let key in fundament){
        if(key === 'headerFundamentals'){
            let fundamentElem = document.createElement('H2')
        fundamentElem.classList.add('headerFundamentals')
        fundamentElem.innerText = fundament[key]
        fundamentalsContainer.append(fundamentElem)
        }else{
             let fundamentElem = document.createElement('p')
        fundamentElem.classList.add('fundament')
        fundamentElem.innerText = fundament[key]
        fundamentalsContainer.append(fundamentElem)
    };
    };
}
export function addContainerElements2(ingridient_1,ingridients_1Container){
    for(let key in ingridient_1){
        if(key === 'headerFundamentals'){
            let fundamentElem = document.createElement('H2');
        fundamentElem.classList.add('headerFundamentals');
        fundamentElem.innerText = ingridient_1[key];
        ingridients_1Container.append(fundamentElem);
        }else{
             let fundamentElem = document.createElement('p');
        fundamentElem.classList.add('ingridient_1');
        fundamentElem.innerText = ingridient_1[key];
        ingridients_1Container.append(fundamentElem);
    }  
    };
}
export function addContainerElements3(ingridient_2,ingridients_2Container){
    for(let key in ingridient_2){
        if(key === 'headerFundamentals'){
            let fundamentElem = document.createElement('H2');
        fundamentElem.classList.add('headerFundamentals');
        fundamentElem.innerText = ingridient_2[key];
        ingridients_2Container.append(fundamentElem);
        }else{
             let fundamentElem = document.createElement('p');
        fundamentElem.classList.add('ingridient_2');
        fundamentElem.innerText = ingridient_2[key];
        ingridients_2Container.append(fundamentElem);
    };
    };
}
export function addContainerElements4(ingridient_3,ingridients_3Container){
    for(let key in ingridient_3){
        if(key === 'headerFundamentals'){
            let fundamentElem = document.createElement('H2');
        fundamentElem.classList.add('headerFundamentals');
        fundamentElem.innerText = ingridient_3[key];
        ingridients_3Container.append(fundamentElem);
        }else{
             let fundamentElem = document.createElement('p');
        fundamentElem.classList.add('ingridient_3');
        fundamentElem.innerText = ingridient_3[key];
        ingridients_3Container.append(fundamentElem);
    }; 
    };
};

// -----------------------ЦЕНЫ ИНГРИДИЕНТОВ-------------------------------------------



export function addPrice(obj,objIngridients,cost,resultCost) {    // получение стоимости

    for (let key in objIngridients) {

        if (key === obj) {
            resultCost.push(objIngridients[key]);
        };
    };
    return cost.innerHTML = `Стоимость заказа :  ${Number(resultCost.reduce((sum, elem) => sum + elem, 0))} руб.`
};
// -----------------------------------------------------------------------------------













