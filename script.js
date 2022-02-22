import {addContainerElements1,addContainerElements2,addContainerElements3,addContainerElements4,addPrice} from './ingridientService.js';
import {fundament,ingridient1,ingridient2,ingridient3,objIngridients} from './ingridients.js';

const fundamentalsContainer = document.querySelector('.fundamentals');
const ingridients_1Container = document.querySelector('.ingredients-1');
const ingridients_2Container = document.querySelector('.ingredients-2');
const ingridients_3Container = document.querySelector('.sauce');

const orderViewArea = document.querySelector('.orderViewArea');
const cost = document.querySelector('.cost');

const piece1 = document.querySelector('.piece1');
const piece2 = document.querySelector('.piece2');
const piece3 = document.querySelector('.piece3');
const piece4 = document.querySelector('.piece4');

const order = document.querySelector('.order');

const modalWindow = document.querySelector('.modalWindow');
const modalWindow_text = document.querySelector('.modalWindow_text');

let elemFundament = 0;
let elemIngridient_1;
let elemIngridient_2;
let elemIngridient_3 = 0;
let resultCost = [];

const orderObject = {};   // финальный вывод в консоль
let arrelemIngridient_1 = [];    //массив для ингридента 1
let arrelemIngridient_2 = [];   //массив для ингридента 2
const wrapper = document.querySelector('.wrapper')

// =====================ЗАПОЛНЕНИЕ ИНГРИДИЕНТАМИ====================================
addContainerElements1(fundament,fundamentalsContainer);
let fundamentals = document.querySelectorAll('.fundament');
addContainerElements2(ingridient1,ingridients_1Container);
let ingridients_1 = document.querySelectorAll('.ingridient_1');
addContainerElements3(ingridient2,ingridients_2Container);
let ingridients_2 = document.querySelectorAll('.ingridient_2');
addContainerElements4(ingridient3,ingridients_3Container);
let ingridients_3 = document.querySelectorAll('.ingridient_3');

// -------------------ОСНОВА---------------------------------------

for (let elem of fundamentals) {       //добавление ф-ии 
    elem.addEventListener('click', addFundament);
};

function addFundament() {     //получение основы
    elemFundament = document.createElement('p');
    elemFundament.innerHTML = this.innerHTML;
    orderViewArea.append(elemFundament);
    this.classList.add('active');
    addPrice(elemFundament.innerHTML,objIngridients,cost,resultCost);
    for (let elem of fundamentals) {
        elem.removeEventListener('click', addFundament);
        if (elemFundament != 0) {
            piece1.classList.add('pieceColor');
        };
    }
    if (elemFundament != 0 && arrelemIngridient_1.length != 0 && arrelemIngridient_2.length != 0 && elemIngridient_3 != 0) {
        order.classList.remove('noActive');  //кнопка заказать
    };
};

// ------------------ИНГРИДИЕНТЫ 1 -------------------------------------

for (let elem of ingridients_1) {
    elem.addEventListener('click', addIngredient_1);
};

function addIngredient_1() {     //получение ингридиента 1
    elemIngridient_1 = document.createElement('p');
    elemIngridient_1.innerHTML = this.innerHTML;
    orderViewArea.append(elemIngridient_1);
    arrelemIngridient_1.push(elemIngridient_1);
    this.classList.add('active');
    addPrice(elemIngridient_1.innerHTML,objIngridients,cost,resultCost);
    if (arrelemIngridient_1.length != 0) {                              
        piece2.classList.add('pieceColor');
    };
    if (arrelemIngridient_1.length === 2) {
        for (let elem of ingridients_1) {
            elem.removeEventListener('click', addIngredient_1);
        };
    };
    if (elemFundament != 0 && arrelemIngridient_1.length != 0 && arrelemIngridient_2.length != 0 && elemIngridient_3 != 0) {
        order.classList.remove('noActive');   //убрать кнопку
    };
};

// --------------------ИНГРИДИЕНТЫ 2 -------------------------------------
for (let elem of ingridients_2) {
    elem.addEventListener('click', addIngredient_2);
};



function addIngredient_2() {     //получение ингридиента 2
    elemIngridient_2 = document.createElement('p');
    elemIngridient_2.innerHTML = this.innerHTML;
    orderViewArea.append(elemIngridient_2);
    arrelemIngridient_2.push(elemIngridient_2);
    this.classList.add('active');
    addPrice(elemIngridient_2.innerHTML,objIngridients,cost,resultCost);
    if (arrelemIngridient_2.length != 0) {
        piece3.classList.add('pieceColor');
    };
    if (arrelemIngridient_2.length === 2) {
        for (let elem of ingridients_2) {
            elem.removeEventListener('click', addIngredient_2);
        };
    };
    if (elemFundament != 0 && arrelemIngridient_1.length != 0 && arrelemIngridient_2.length != 0 && elemIngridient_3 != 0) {
        order.classList.remove('noActive');   //убрать кнопку
    };
};

// -------------------- ИНГРИДИЕНТЫ 3 -------------------------------------

for (let elem of ingridients_3) {       //добавление ф-ии 
    elem.addEventListener('click', addSouce);
};

function addSouce() {     //получение соуса
    elemIngridient_3 = document.createElement('p');
    elemIngridient_3.innerHTML = this.innerHTML;
    orderViewArea.append(elemIngridient_3);
    this.classList.add('active');
    addPrice(elemIngridient_3.innerHTML,objIngridients,cost,resultCost);
    if (elemIngridient_3 != 0) {
        piece4.classList.add('pieceColor');
    };
    for (let elem of ingridients_3) {
        elem.removeEventListener('click', addSouce);
    };
    if (elemFundament != 0 && arrelemIngridient_1.length != 0 && arrelemIngridient_2.length != 0 && elemIngridient_3 != 0) {
        order.classList.remove('noActive');
    };
};

// -------------------УДАЛЕНИЕ ИЗ ОБЛАСТИ ЗАКАЗА---------------------------------------------------

orderViewArea.addEventListener('click', ({ target }) => {
    for (let elem of fundamentals) {
        if (elem.innerHTML === target.innerHTML) {
            target.remove();
            elem.classList.remove('active');
            resultCost.splice(resultCost.indexOf(objIngridients[target.innerHTML]), 1);
            elemFundament = 0;
            cost.innerHTML = `Стоимость заказа :  ${resultCost.reduce((sum, elem) => sum + elem, 0)} руб.`;
            for (let elem of fundamentals) {       //добавление ф-ии 
                elem.addEventListener('click', addFundament);
            };
        };
    };

    for (let elem of ingridients_1) {
        if (elem.innerHTML === target.innerHTML) {
            target.remove();
            elem.classList.remove('active');
            resultCost.splice(resultCost.indexOf(objIngridients[target.innerHTML]), 1);
            cost.innerHTML = `Стоимость заказа :  ${resultCost.reduce((sum, elem) => sum + elem, 0)} руб.`;
            arrelemIngridient_1.length--;
            for (let elem of ingridients_1) {
                elem.addEventListener('click', addIngredient_1);
            };
        };
    };
    for (let elem of ingridients_2) {
        if (elem.innerHTML === target.innerHTML) {
            target.remove();
            elem.classList.remove('active');
            resultCost.splice(resultCost.indexOf(objIngridients[target.innerHTML]), 1);
            cost.innerHTML = `Стоимость заказа :  ${resultCost.reduce((sum, elem) => sum + elem, 0)} руб.`;
            arrelemIngridient_2.length--;
            for (let elem of ingridients_2) {
                elem.addEventListener('click', addIngredient_2);
            };
        };
    };
    for (let elem of ingridients_3) {
        if (elem.innerHTML === target.innerHTML) {
            target.remove();
            elem.classList.remove('active');
            resultCost.splice(resultCost.indexOf(objIngridients[target.innerHTML]), 1);
            cost.innerHTML = `Стоимость заказа :  ${resultCost.reduce((sum, elem) => sum + elem, 0)} руб.`;
            elemIngridient_3 = 0;

            for (let elem of ingridients_3) {       //добавление ф-ии 
                elem.addEventListener('click', addSouce);
            };
        };
    };
    if (elemFundament === 0 || arrelemIngridient_1.length === 0 || arrelemIngridient_2.length === 0 || elemIngridient_3 === 0) {
        order.classList.add('noActive');   //убрать кнопку
    }
})
// ---------------------------КУСКИ ПИЦЦЫ--------------------------------------------


orderViewArea.addEventListener('click', () => {
    if (elemFundament === 0) {
        piece1.classList.remove('pieceColor');
    } if (arrelemIngridient_1.length === 0) {
        piece2.classList.remove('pieceColor');
    } if (arrelemIngridient_2.length === 0) {
        piece3.classList.remove('pieceColor');
    } if (elemIngridient_3 === 0) {
        piece4.classList.remove('pieceColor');
    };

});
// ------------------------МОДАЛЬНОЕ ОКНО-------------------------------------------------
let result = [];   // ингридиенты при заказе
order.addEventListener('click', () => {
    modalWindow.classList.remove('noActive');
    for (let i = 0; i < orderViewArea.childNodes.length; i++) {
        if (orderViewArea.childNodes[i].innerHTML != 'Область просмотра заказа') {
            result.push(orderViewArea.childNodes[i].innerText);
            orderObject[i + ' ' + 'ингридиент'] = orderViewArea.childNodes[i].innerText
        };

    };
    modalWindow_text.innerHTML = `Вы заказали пиццу с ингредиентами:
    ${result.join(' ')}`;

    orderObject.cost = cost.innerHTML;

    console.log(orderObject); //вывод в консоль

})

//обнулуние всего
modalWindow.addEventListener('click', () => {
    modalWindow.classList.add('noActive');
    for (let i = 1; i < orderViewArea.childNodes.length; i++) {
        orderViewArea.childNodes[i].remove();
        i -= 1;
    }
    wrapper.classList.remove('wrapperActive')
    result = [];
    elemFundament = 0;
    elemIngridient_1;
    elemIngridient_2;
    elemIngridient_3 = 0;
    resultCost = [];
    cost.innerHTML = 'Стоимость заказа :';

    piece1.classList.remove('pieceColor');
    piece2.classList.remove('pieceColor');
    piece3.classList.remove('pieceColor');
    piece4.classList.remove('pieceColor');

    for (let elem of fundamentals) {
        elem.removeEventListener('click', addFundament);
        elem.classList.remove('active');
    };
    for (let elem of fundamentals) {
        elem.addEventListener('click', addFundament);
    };
    for (let elem of ingridients_1) {
        elem.removeEventListener('click', addIngredient_1);
        arrelemIngridient_1 = []
        elem.classList.remove('active');
    }
    for (let elem of ingridients_1) {
        elem.addEventListener('click', addIngredient_1);
    };
    for (let elem of ingridients_2) {
        elem.removeEventListener('click', addIngredient_2);
        arrelemIngridient_2 = []
        elem.classList.remove('active');
    };
    for (let elem of ingridients_2) {
        elem.addEventListener('click', addIngredient_2);
    };
    for (let elem of ingridients_3) {
        elem.removeEventListener('click', addSouce);
        elem.classList.remove('active');
    };
    for (let elem of ingridients_3) {
        elem.addEventListener('click', addSouce);
    };
    order.classList.add('noActive');
});
