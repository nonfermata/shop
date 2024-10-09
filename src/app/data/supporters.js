const supporters = [
    { id: 'quqyopwy', name: 'zero', sum: 0 },
    { id: 'wjiclkqe', name: 'Игорь Кузаев', sum: 1500 },
    { id: 'ntljnnii', name: 'Андрей Юрьевич', sum: 2000 },
    { id: 'fkarxdaq', name: 'Татьяна Николаевна', sum: 772 },
    { id: 'ughajfai', name: 'Дима Ди', sum: 3000 },
    { id: 'pmfqcgng', name: 'Ксения', sum: 1500 },
    {
        id: 'eaplltsc',
        name: 'Ольга Александровна',
        sum: 1000
    },
    { id: 'xrvclvss', name: 'Евгений С.', sum: 1000 },
    {
        id: 'vtyntqac',
        name: 'Яна Станиславовна',
        sum: 100
    },
    { id: 'juxoipqa', name: 'Анна Сергеевна', sum: 300 },
    {
        id: 'kpfmwsam',
        name: 'Елена Б.',
        sum: 1000
    },
    { id: 'rmbmgnqg', name: 'Татьяна Л.', sum: 220 },
    { id: 'kghucpos', name: 'Надежда', sum: 1500 },
    { id: 'gjnjshxi', name: 'Мария Журавлева', sum: 1700 },
    { id: 'uqcgycth', name: 'Елена Николаевна', sum: 700 },
    { id: 'yogpneeb', name: 'Александр ', sum: 1500 },
    { id: 'fgoetkau', name: 'Александр Иванович', sum: 1000 },
    {
        id: 'xeabqpqa',
        name: 'Ирина Анатольевна',
        sum: 500
    },
    { id: 'fnynjjgg', name: 'Екатерина Николаевна', sum: 200 },
    { id: 'fqpnjjua', name: 'Наталья Б.', sum: 300 },
    { id: 'bxouyyby', name: 'Ни Оксана', sum: 1500 },
    { id: 'unuickeb', name: 'Пирог Татьяна', sum: 1500 },
    {
        id: 'lrdxkhmt',
        name: 'юmoney ***7534',
        sum: 1940
    },
    { id: 'gwcxeylr', name: 'Николай', sum: 3500 },
    { id: 'fyqlgubf', name: 'Михаил Михайлович', sum: 5000 },
    { id: 'qnqrceud', name: 'Шлотгауэр Л.Л.', sum: 1500 },
    { id: 'ejmqiwsr', name: 'Павел Иванов', sum: 1500 },
    { id: 'lffvwhej', name: 'Сергей Балыбердин', sum: 1500 },
    { id: 'hyweewlc', name: 'Артур Ш', sum: 500 },
    { id: 'bcvdekfl', name: 'Белый Сергей ', sum: 1500 },
    { id: 'soasxtwd', name: 'Marina Zebrika, PayPal', sum: 1820 }
];

supporters.reverse();

export const capital = supporters.reduce((acc, item) => acc + item.sum, 0);

export default supporters;
