const data = [
    {
        title: 'Пицца',
        list: [
            {
                id: 1,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Meat-traditional.webp",
                name: "Мясная",
                descr: "Супермясная пицца с пикантной пепперони, ветчиной, хрустящим беконом, ароматной свининой, говядиной, Моцареллой и фирменным томатным соусом",
                price: 40
            },
            {
                id: 2,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Chicken-ranch-traditional.webp",
                name: "Цыпленок Рэнч",
                descr: "Пикантная пицца с сочным куриным филе, хрустящим беконом, соусом 'Чесночный Рэнч', Моцареллой, чесноком и томатами",
                price: 43
            },
            {
                id: 3,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/ea0010b5eb1c84783a242d11bd014264.webp",
                name: "Супер Папа",
                descr: "Хит 'Папа Джонс' с пикантной пепперони, ветчиной, ароматной свининой, фирменным томатным соусом, Моцареллой, шампиньонами, луком, маслинами и сладким перцем. С пикантной остринкой",
                price: 45
            },
            {
                id: 4,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/717c70cd1e5ddce84459cd528dd845c9.webp",
                name: "Цыплёнок Грин",
                descr: "Сочное куриное филе,сыр моцарелла, сладкий перец, соус 'Чесночный рэнч', чеснок и томаты.",
                price: 42
            },
            {
                id: 5,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/34f3b1f22d355b83992b1bc9a6e8ba4d.webp",
                name: "Микс Грин",
                descr: "Соус «Тысяча островов», шампиньоны, лук, сладкий перец и пикантная пепперони, сыр 'Моцарелла'",
                price: 46
            },
            {
                id: 6,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/9708b9aac646d95d92be83a4e1c710ee.webp",
                name: "Сливочная с креветками",
                descr: "Сливочная с креветками: креветки в нежном сливочном сыре, с моцареллой и томатами, с ароматом итальянских трав и чеснока",
                price: 49
            },
            {
                id: 7,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Pepperoni-traditional.webp",
                name: "Пепперони",
                descr: "Американская классика с пикантной пепперони, Моцареллой и фирменным томатным соусом",
                price: 50
            },
            {
                id: 8,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/92bc6bca0b58b92c4bad051716d7af4d.webp",
                name: "Баварская",
                descr: "Моцарелла, альпийские колбаски, запечённые дольки картофеля, хрустящий бекон, сладкий перец, смесь итальянских сыров и соус барбекю",
                price: 49
            },
            {
                id: 9,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/8036e41d989a3b6e9d04506bb7e8476a.webp",
                name: "Мексиканская",
                descr: "Острая пицца с куриным филе, фирменным томатным соусом, Моцареллой, шампиньонами, луком, томатами, сладким перцем и перцем 'Халапеньо'",
                price: 43
            }
        ]
    },
    {
        title: 'Закуски',
        list: [
            {
                id: 1,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/b609ae8d9268bc43203a95ae023d0569.webp",
                name: "Картофель из печи",
                descr: "Картофельные брусочки из печи",
                price: 30
            },
            {
                id: 2,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/c7f80bde62e53d6a1951f97d327b5f81.webp",
                name: "Куриные наггетсы",
                descr: "Сочные кусочки куриного филе",
                price: 33
            },
            {
                id: 3,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Cheesesticks.webp",
                name: "Сырные палочки",
                descr: "Любимая закуска с Моцареллой и соусом 'Особый чесночный'",
                price: 31
            },
            {
                id: 4,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/dede7359569c8ad6d5ae1e60890652b5.webp",
                name: "Рогалики с сыром",
                descr: "Рогалики из нежного теста с чесночным соусом, сыром моцарелла. Сервируются с соусом на выбор",
                price: 32
            },
            {
                id: 5,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/a0a3aede8506c16c67764a08a51785cd.webp",
                name: "Куриные крылышки Барбекю",
                descr: "Куриные крылышки с соусом 'Барбекю'",
                price: 35
            },
            {
                id: 6,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/Pepperoni%20rolls.jpg",
                name: "Пепперони ролл",
                descr: "Мини-роллы с Моцареллой, пикантной пепперони и соусом 'Чесночный Рэнч'",
                price: 34
            },
        ]
    },
    {
        title: 'Напитки',
        list: [
            {
                id: 1,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/082b8587b109b35d57f405dcc2834a5d.webp",
                name: "Evervess Биттер-Лимон [AT]",
                volume: '0.5 л',
                price: 20
            },
            {
                id: 2,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/9f43f88dae6c216616af15b011e7402b.webp",
                name: "Evervess Манящая Гранада [AT]",
                volume: '0.5 л',
                price: 20
            },
            {
                id: 3,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/6b9e739b804e23732bc3fe1a15ea4abb.webp",
                name: "Evervess Блэк Роял [AT]",
                volume: '0.5 л',
                price: 20
            },
            {
                id: 4,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/91b6df68e21f326a631fa7770be77e63.webp",
                name: "Evervess COLA [AT]",
                volume: '0.5 л',
                price: 20
            },
            {
                id: 5,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/f9344016f2bae600bcbfe04131c50ba2.webp",
                name: "Evervess Пленительный Апельсин [AT]",
                volume: '0.5 л',
                price: 20
            },
            {
                id: 6,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/641d62e251929f476da309b50ae3ba80.webp",
                name: "Evervess Искрящийся Лимон-Лайм [AT]",
                volume: '0.5 л',
                price: 20
            },
        ]
    },
    {
        title: 'Соусы',
        list: [
            {
                id: 1,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/d915a375547a8ad1fe7e77962a247b4a.webp",
                name: "Сырный Пармеджано",
                volume: '25 мл',
                price: 3
            },
            {
                id: 2,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/5296ce61f502d46950c4321577266b1b.webp",
                name: "Мед цветочный",
                volume: '45 гр',
                price: 3
            },
            {
                id: 3,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/2509ef91d108de25c4730e1a31d3f117.webp",
                name: "Шоколадный",
                volume: '25 мл',
                price: 3
            },
            {
                id: 4,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/00090d1d169059c6913de46440f5d05a.webp",
                name: "Томатный",
                volume: '25 гр',
                price: 3
            },
            {
                id: 5,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/584%D1%85460-Sauce-island.webp",
                name: "Тысяча островов",
                volume: '25 гр',
                price: 3
            },
            {
                id: 6,
                image: "https://cdn.papajohns.ru//images/catalog/thumbs/full/584%D1%85460-Sauce-runch.webp",
                name: "Чесночный ранч",
                volume: '25 гр',
                price: 3
            },
        ]
    }
]

module.exports = data