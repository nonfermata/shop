const supporters = [
    { id: 'EuBYITO', name: 'Дмитрий', region: 'Санкт-Петербург', sum: 1500 },
    { id: 'ZGkSLFk', name: 'Маша Козина', region: 'Москва', sum: 500 },
    { id: 'jdgKVZF', name: 'Михаил', region: 'Казань', sum: 1000 },
    { id: 'BgpuwQe', name: 'Татьяна', region: ' ', sum: 300 },
    { id: 'oFKRkfr', name: 'Елена', region: 'Воронеж', sum: 100 },
    { id: 'MsBDvBp', name: 'Алексей', region: 'Москва', sum: 1500 },
    { id: 'dxGWiUT', name: 'Ленар Саляхов', region: 'Уфа', sum: 1000 },
    {
        id: 'CQxOjpe',
        name: 'Александр',
        region: 'Московская область',
        sum: 1500
    },
    { id: 'KjnMnNL', name: 'Сергей', region: '', sum: 5000 },
    {
        id: 'gKFBGgR',
        name: 'Артём Петров',
        region: 'Санкт-Петербург',
        sum: 3000
    },
    { id: 'QQmKSfg', name: 'Тимофей Самсонов', region: 'Тверь', sum: 300 },
    { id: 'pozBVZH', name: 'Татьяна', region: 'Рязань', sum: 500 },
    {
        id: 'QQKqVUz',
        name: 'Olga Dvoretskaya',
        region: 'Московская область',
        sum: 2000
    },
    { id: 'jEZXYXq', name: 'Яна', region: 'Москва', sum: 1000 },
    { id: 'eCmCcuN', name: 'Екатерина', region: 'Санкт-Петербург', sum: 100 },
    { id: 'oYiORhf', name: 'Алексей', region: ' ', sum: 1000 },
    {
        id: 'zozXCfO',
        name: 'Александр Баранчиков',
        region: 'Москва',
        sum: 3200
    },
    { id: 'sJmuyhC', name: 'Pavel', region: ' ', sum: 500 },
    { id: 'tZdtQBD', name: 'Михаил Лохматов', region: 'Москва', sum: 2000 },
    { id: 'xRHUxcj', name: 'Аня Савельева', region: 'Москва', sum: 600 },
    { id: 'XyMkTnO', name: 'Ольга', region: 'Санкт-Петербург', sum: 100 },
    { id: 'BtSBYvU', name: 'Ирина', region: 'Санкт-Петербург', sum: 500 },
    { id: 'NyQriRH', name: 'Ирина', region: ' ', sum: 200 },
    { id: 'EjShbFQ', name: 'Nadia', region: 'Санкт-Петербург', sum: 300 },
    { id: 'PEGyPvg', name: 'Полина', region: 'Москва', sum: 500 },
    {
        id: 'MjeZtGI',
        name: 'Евгения Митина',
        region: 'Московская область',
        sum: 1000
    },
    {
        id: 'ZbrOJRH',
        name: 'Юлия Балихина',
        region: 'Нижний Новгород',
        sum: 1000
    },
    { id: 'hzMbtNi', name: 'Галина', region: 'Московская область', sum: 1500 },
    { id: 'DRfTrnW', name: 'Вера', region: 'Москва', sum: 500 },
    {
        id: 'VZSgOiV',
        name: 'Дмитрий Инкин',
        region: ' Екатеринбург',
        sum: 1000
    },
    {
        id: 'yJPIfch',
        name: 'Анна Рубцова',
        region: ' Санкт-Петербург',
        sum: 1000
    },
    {
        id: 'scdkwXE',
        name: 'Татьяна Низовкина',
        region: ' Санкт-Петербург',
        sum: 1500
    },
    {
        id: 'HGXlenW',
        name: 'Игорь Панасенко',
        region: ' Мурманская область',
        sum: 1000
    },
    { id: 'wmRhpUX', name: 'Илья', region: ' Московская область', sum: 1000 },
    { id: 'QmqdUrp', name: 'Александр Крохин', region: ' Москва', sum: 200 },
    { id: 'cnqgdzR', name: 'Наталия', region: 'Москва', sum: 2200 },
    { id: 'EDJfBYg', name: 'Антон', region: 'Екатеринбург', sum: 1000 },
    { id: 'lFGYhnN', name: 'Полина', region: ' Москва', sum: 300 },
    { id: 'YQuNWhH', name: 'Инга', region: 'Санкт-Петербург', sum: 800 },
    { id: 'iWcfCVs', name: 'Юлия', region: 'Москва', sum: 1200 },
    { id: 'ZqHjLUj', name: 'Геннадий', region: 'Москва', sum: 50000 },
    { id: 'PTcfzqN', name: 'Лена', region: ' Санкт-Петербург', sum: 1000 },
    { id: 'CpljLST', name: 'Марат Каскеев', region: ' Пенза', sum: 1000 },
    { id: 'iFcUEPo', name: 'Alexander ', region: '', sum: 4000 },
    { id: 'WQRWwOt', name: 'Тимофей', region: 'Самара', sum: 1000 },
    { id: 'NUqdlIs', name: 'Галина', region: '', sum: 500 },
    {
        id: 'zIfhKHs',
        name: 'Михаил Музыка',
        region: ' Архангельская область',
        sum: 1000
    },
    { id: 'pflUWYR', name: 'Виктор', region: 'Москва', sum: 400 },
    { id: 'CODDeiE', name: 'Анастасия', region: ' Москва', sum: 300 },
    { id: 'oTDzglU', name: 'Алексей Орлов', region: ' Москва', sum: 1000 },
    { id: 'gctNRqZ', name: 'Tamara', region: '', sum: 1700 },
    { id: 'ebcEshh', name: 'Ольга', region: 'Москва', sum: 500 },
    { id: 'xGdMOtP', name: 'Ольга', region: '', sum: 300 },
    { id: 'XnjBySw', name: 'Андрей', region: 'Москва', sum: 900 },
    { id: 'xzcLZwG', name: 'Станислав', region: 'Москва', sum: 2900 },
    {
        id: 'woSXOvY',
        name: 'Дмитрий',
        region: 'Москва',
        sum: 300
    },
    {
        id: 'eFiiUWv',
        name: 'Ekaterina',
        region: 'Санкт-Петербург',
        sum: 1000
    },
    { id: 'ypUdPoI', name: 'Тимофей', region: ' Новосибирск', sum: 300 },
    {
        id: 'eDfeZLY',
        name: 'Стругова Инна Юрьевна',
        region: ' Москва',
        sum: 1000
    },
    { id: 'CtUxQTV', name: 'Вероника', region: ' Москва', sum: 500 },
    {
        id: 'dmyiExN',
        name: 'Антон',
        region: '',
        sum: 1000
    },
    {
        id: 'UENRXrH',
        name: 'Максим',
        region: 'Краснодар',
        sum: 500
    },
    { id: 'bscBOUm', name: 'Дима Л', region: '', sum: 5000 },
    {
        id: 'TnrvIti',
        name: 'Константин',
        region: 'Москва',
        sum: 300
    },
    { id: 'uXcgBiq', name: 'Полина', region: 'Москва', sum: 300 },
    {
        id: 'WeJzshe',
        name: 'Малика',
        region: ' Москва',
        sum: 2300
    },
    { id: 'ENzBiuZ', name: 'Дмитрий Долгулев', region: ' Вологда', sum: 1000 },
    {
        id: 'TrfHSys',
        name: 'Александр Мозговой',
        region: ' Московская область',
        sum: 2000
    },
    {
        id: 'gkfyXLT',
        name: 'Дмитрий Ерохин',
        region: ' Челябинская область',
        sum: 1150
    },
    { id: 'kzVbgHE', name: 'Роман Вольф', region: ' Новосибирск', sum: 1000 },
    {
        id: 'rOIDRpl',
        name: 'Владимир Рыбин',
        region: ' Москва',
        sum: 1000
    },
    {
        id: 'lFVepKT',
        name: 'Хилюк Юрий Владимирович ',
        region: ' Калуга',
        sum: 400
    },
    {
        id: 'wdBQGZf',
        name: 'Наталья Пятина',
        region: ' Екатеринбург',
        sum: 200
    },
    {
        id: 'rQWcGlQ',
        name: 'Ирина',
        region: ' Смоленск',
        sum: 2500
    },
    {
        id: 'gfrVuUp',
        name: 'Владимир',
        region: ' Московская область',
        sum: 500
    },
    {
        id: 'zBXkSuK',
        name: 'Михаил Сорокин',
        region: ' Москва',
        sum: 400
    },
    { id: 'umxkMLk', name: 'Марина', region: 'Санкт-Петербург', sum: 1100 },
    {
        id: 'JKyTPGP',
        name: 'Юлия',
        region: ' Москва',
        sum: 1100
    },
    { id: 'qZsopse', name: 'Вячеслав', region: ' Москва', sum: 300 },
    {
        id: 'BTgqoLh',
        name: 'Алексей',
        region: 'Самара',
        sum: 300
    },
    {
        id: 'NsVYzlh',
        name: 'Аня Масленникова',
        region: ' Московская область',
        sum: 300
    },
    {
        id: 'bfHqbEO',
        name: 'Константин Сергеев',
        region: ' Санкт-Петербург',
        sum: 202200
    },
    { id: 'izfwbUx', name: 'Алексей ', region: ' Москва', sum: 1000 },
    {
        id: 'zOEQzHH',
        name: 'Андрей',
        region: ' Калуга',
        sum: 950
    },
    { id: 'ZmSnbtb', name: 'Валентина', region: 'Москва', sum: 700 },
    {
        id: 'uMOfTgL',
        name: 'Надежда Усманова',
        region: ' Москва',
        sum: 1000
    },
    { id: 'fwitrKH', name: 'Elena', region: ' Тула', sum: 300 },
    {
        id: 'HMWDlhD',
        name: 'Владислав',
        region: ' Москва',
        sum: 1300
    },
    { id: 'oDvKSxt', name: 'Николенко Светлана', region: '', sum: 3000 },
    { id: 'kUYXWNb', name: 'Вероника', region: 'Москва', sum: 800 },
    {
        id: 'WdULRoS',
        name: 'Владислав',
        region: '',
        sum: 350
    },
    { id: 'oIvwVbC', name: 'Александр', region: ' Санкт-Петербург', sum: 800 }
];

supporters.reverse();

export const capital =
    supporters.reduce((acc, item) => acc + item.sum, 0) + 9000;

export default supporters;
