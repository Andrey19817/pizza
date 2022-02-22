export{fundament,ingridient1,ingridient2,ingridient3,objIngridients};


class Ingredient{
    constructor(headerFundamentals,ingridient_1,ingridient_2,ingridient_3,ingridient_4){
        this.headerFundamentals = headerFundamentals;
        this.ingridient_1 = ingridient_1;
        this.ingridient_2 = ingridient_2;
        this.ingridient_3 = ingridient_3;
        this.ingridient_4 = ingridient_4;
    }
}

const fundament = new Ingredient('Основа','Тонкое тесто','Тонкое хрустящее тесто','Среднее тесто','Толстое тесто');
const ingridient1 = new Ingredient('Мясо','Ветчина','Салями','Бекон','Курица');
const ingridient2 = new Ingredient('Сыры','Моцарела','Ананасы','Болгарский перец','Томаты');
const ingridient3 = new Ingredient('Соусы','Белый соус','Сливочный соус','Чесночный соус','Сырный соус');



const objIngridients = {
    'Тонкое тесто': 3,
    'Тонкое хрустящее тесто': 3,
    'Среднее тесто': 4,
    'Толстое тесто': 4,
    'Ветчина': 10,
    'Салями': 8,
    'Бекон': 11,
    'Курица': 7,
    'Моцарела': 8,
    'Ананасы': 7,
    'Болгарский перец': 6,
    'Томаты': 4,
    'Белый соус': 3,
    'Сливочный соус': 4,
    'Чесночный соус': 3,
    'Сырный соус': 5
};