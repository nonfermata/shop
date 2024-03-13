import _ from 'lodash';

const regions = [
    {
        id: '001',
        name: 'Республика Адыгея',
        areaId: '02'
    },
    {
        id: '002',
        name: 'Республика Алтай',
        areaId: '10'
    },
    {
        id: '003',
        name: 'Республика Башкортостан',
        areaId: '06'
    },
    {
        id: '004',
        name: 'Республика Бурятия',
        areaId: '13'
    },
    {
        id: '005',
        name: 'Республика Дагестан',
        areaId: '05'
    },
    {
        id: '006',
        name: 'Республика Ингушетия',
        areaId: '02'
    },
    {
        id: '007',
        name: 'Кабардино-Балкарская Республика',
        areaId: '02'
    },
    {
        id: '008',
        name: 'Республика Калмыкия',
        areaId: '04'
    },
    {
        id: '009',
        name: 'Карачаево-Черкесская Республика',
        areaId: '02'
    },
    {
        id: '010',
        name: 'Республика Карелия',
        areaId: '07'
    },
    {
        id: '011',
        name: 'Республика Коми',
        areaId: '09'
    },
    {
        id: '012',
        name: 'Республика Крым',
        areaId: '03'
    },
    {
        id: '013',
        name: 'Республика Марий Эл',
        areaId: '02'
    },
    {
        id: '014',
        name: 'Республика Мордовия',
        areaId: '02'
    },
    {
        id: '015',
        name: 'Республика Саха (Якутия)',
        areaId: '13'
    },
    {
        id: '016',
        name: 'Республика Северная Осетия – Алания',
        areaId: '07'
    },
    {
        id: '017',
        name: 'Республика Татарстан',
        areaId: '04'
    },
    {
        id: '018',
        name: 'Республика Тыва (Тува)',
        areaId: '10'
    },
    {
        id: '019',
        name: 'Удмуртская Республика',
        areaId: '06'
    },
    {
        id: '020',
        name: 'Республика Хакасия',
        areaId: '10'
    },
    {
        id: '021',
        name: 'Чеченская Республика',
        areaId: '03'
    },
    {
        id: '022',
        name: 'Чувашская Республика – Чувашия',
        areaId: '01'
    },
    {
        id: '023',
        name: 'Алтайский край',
        areaId: '10'
    },
    {
        id: '024',
        name: 'Забайкальский край',
        areaId: '11'
    },
    {
        id: '025',
        name: 'Камчатский край',
        areaId: '15'
    },
    {
        id: '026',
        name: 'Краснодарский край',
        areaId: '04'
    },
    {
        id: '027',
        name: 'Красноярский край',
        areaId: '03'
    },
    {
        id: '028',
        name: 'Пермский край',
        areaId: '06'
    },
    {
        id: '029',
        name: 'Приморский край',
        areaId: '16'
    },
    {
        id: '030',
        name: 'Ставропольский край',
        areaId: '04'
    },
    {
        id: '031',
        name: 'Хабаровский край',
        areaId: '16'
    },
    {
        id: '032',
        name: 'Амурская область',
        areaId: '13'
    },
    {
        id: '033',
        name: 'Архангельская область',
        areaId: '08'
    },
    {
        id: '034',
        name: 'Астраханская область',
        areaId: '02'
    },
    {
        id: '035',
        name: 'Белгородская область',
        areaId: '02'
    },
    {
        id: '036',
        name: 'Брянская область',
        areaId: '01'
    },
    {
        id: '037',
        name: 'Владимирская область',
        areaId: '01'
    },
    {
        id: '038',
        name: 'Волгоградская область',
        areaId: '04'
    },
    {
        id: '039',
        name: 'Вологодская область',
        areaId: '01'
    },
    {
        id: '040',
        name: 'Воронежская область',
        areaId: '01'
    },
    {
        id: '041',
        name: 'Ивановская область',
        areaId: '01'
    },
    {
        id: '042',
        name: 'Иркутская область',
        areaId: '13'
    },
    {
        id: '043',
        name: 'Калининградская область',
        areaId: '09'
    },
    {
        id: '044',
        name: 'Калужская область',
        areaId: '01'
    },
    {
        id: '045',
        name: 'Кемеровская область',
        areaId: '03'
    },
    {
        id: '046',
        name: 'Кировская область',
        areaId: '04'
    },
    {
        id: '047',
        name: 'Костромская область',
        areaId: '01'
    },
    {
        id: '048',
        name: 'Курганская область',
        areaId: '10'
    },
    {
        id: '049',
        name: 'Курская область',
        areaId: '01'
    },
    {
        id: '050',
        name: 'Ленинградская область',
        areaId: '06'
    },
    {
        id: '051',
        name: 'Липецкая область',
        areaId: '01'
    },
    {
        id: '052',
        name: 'Магаданская область',
        areaId: '16'
    },
    {
        id: '053',
        name: 'Московская область',
        areaId: '01'
    },
    {
        id: '054',
        name: 'Мурманская область',
        areaId: '06'
    },
    {
        id: '055',
        name: 'Нижегородская область',
        areaId: '01'
    },
    {
        id: '056',
        name: 'Новгородская область',
        areaId: '02'
    },
    {
        id: '057',
        name: 'Новосибирская область',
        areaId: '05'
    },
    {
        id: '058',
        name: 'Омская область',
        areaId: '10'
    },
    {
        id: '059',
        name: 'Оренбургская область',
        areaId: '08'
    },
    {
        id: '060',
        name: 'Орловская область',
        areaId: '01'
    },
    {
        id: '061',
        name: 'Пензенская область',
        areaId: '02'
    },
    {
        id: '062',
        name: 'Псковская область',
        areaId: '01'
    },
    {
        id: '063',
        name: 'Ростовская область',
        areaId: '04'
    },
    {
        id: '064',
        name: 'Рязанская область',
        areaId: '01'
    },
    {
        id: '065',
        name: 'Самарская область',
        areaId: '04'
    },
    {
        id: '066',
        name: 'Саратовская область',
        areaId: '04'
    },
    {
        id: '067',
        name: 'Сахалинская область',
        areaId: '17'
    },
    {
        id: '068',
        name: 'Свердловская область',
        areaId: '06'
    },
    {
        id: '069',
        name: 'Смоленская область',
        areaId: '01'
    },
    {
        id: '070',
        name: 'Тамбовская область',
        areaId: '01'
    },
    {
        id: '071',
        name: 'Тверская область',
        areaId: '01'
    },
    {
        id: '072',
        name: 'Томская область',
        areaId: '03'
    },
    {
        id: '073',
        name: 'Тульская область',
        areaId: '01'
    },
    {
        id: '074',
        name: 'Тюменская область',
        areaId: '10'
    },
    {
        id: '075',
        name: 'Ульяновская область',
        areaId: '02'
    },
    {
        id: '076',
        name: 'Челябинская область',
        areaId: '06'
    },
    {
        id: '077',
        name: 'Ярославская область',
        areaId: '01'
    },
    {
        id: '079',
        name: 'Еврейская автономная область',
        areaId: '14'
    },
    {
        id: '080',
        name: 'Ненецкий автономный округ',
        areaId: '18'
    },
    {
        id: '081',
        name: 'Ханты-Мансийский автономный округ – Югра',
        areaId: '10'
    },
    {
        id: '082',
        name: 'Чукотский автономный округ',
        areaId: '19'
    },
    {
        id: '083',
        name: 'Ямало-Ненецкий автономный округ',
        areaId: '10'
    },
    {
        id: '084',
        name: 'Майкоп',
        areaId: '02'
    },
    {
        id: '085',
        name: 'Горно-Алтайск',
        areaId: '10'
    },
    {
        id: '086',
        name: 'Уфа',
        areaId: '06'
    },
    {
        id: '087',
        name: 'Улан-Удэ',
        areaId: '13'
    },
    {
        id: '088',
        name: 'Махачкала',
        areaId: '05'
    },
    {
        id: '089',
        name: 'Магас',
        areaId: '02'
    },
    {
        id: '090',
        name: 'Нальчик',
        areaId: '02'
    },
    {
        id: '091',
        name: 'Элиста',
        areaId: '04'
    },
    {
        id: '092',
        name: 'Черкесск',
        areaId: '02'
    },
    {
        id: '093',
        name: 'Петрозаводск',
        areaId: '07'
    },
    {
        id: '094',
        name: 'Сыктывкар',
        areaId: '09'
    },
    {
        id: '095',
        name: 'Симферополь',
        areaId: '03'
    },
    {
        id: '096',
        name: 'Йошкар-Ола',
        areaId: '02'
    },
    {
        id: '097',
        name: 'Саранск',
        areaId: '02'
    },
    {
        id: '098',
        name: 'Якутск',
        areaId: '13'
    },
    {
        id: '099',
        name: 'Владикавказ',
        areaId: '07'
    },
    {
        id: '100',
        name: 'Казань',
        areaId: '04'
    },
    {
        id: '101',
        name: 'Кызыл',
        areaId: '10'
    },
    {
        id: '102',
        name: 'Ижевск',
        areaId: '06'
    },
    {
        id: '103',
        name: 'Абакан',
        areaId: '10'
    },
    {
        id: '104',
        name: 'Грозный',
        areaId: '03'
    },
    {
        id: '105',
        name: 'Чебоксары',
        areaId: '01'
    },
    {
        id: '106',
        name: 'Барнаул',
        areaId: '10'
    },
    {
        id: '107',
        name: 'Чита',
        areaId: '11'
    },
    {
        id: '108',
        name: 'Петропавловск-Камчатский',
        areaId: '15'
    },
    {
        id: '109',
        name: 'Краснодар',
        areaId: '04'
    },
    {
        id: '110',
        name: 'Красноярск',
        areaId: '03'
    },
    {
        id: '111',
        name: 'Пермь',
        areaId: '06'
    },
    {
        id: '112',
        name: 'Владивосток',
        areaId: '16'
    },
    {
        id: '113',
        name: 'Ставрополь',
        areaId: '04'
    },
    {
        id: '114',
        name: 'Хабаровск',
        areaId: '16'
    },
    {
        id: '115',
        name: 'Благовещенск',
        areaId: '13'
    },
    {
        id: '116',
        name: 'Архангельск',
        areaId: '08'
    },
    {
        id: '117',
        name: 'Астрахань',
        areaId: '02'
    },
    {
        id: '118',
        name: 'Белгород',
        areaId: '02'
    },
    {
        id: '119',
        name: 'Брянск',
        areaId: '01'
    },
    {
        id: '120',
        name: 'Владимир',
        areaId: '01'
    },
    {
        id: '121',
        name: 'Волгоград',
        areaId: '04'
    },
    {
        id: '122',
        name: 'Вологда',
        areaId: '01'
    },
    {
        id: '123',
        name: 'Воронеж',
        areaId: '01'
    },
    {
        id: '124',
        name: 'Иваново',
        areaId: '01'
    },
    {
        id: '125',
        name: 'Иркутск',
        areaId: '13'
    },
    {
        id: '126',
        name: 'Калининград',
        areaId: '09'
    },
    {
        id: '127',
        name: 'Калуга',
        areaId: '01'
    },
    {
        id: '128',
        name: 'Кемерово',
        areaId: '03'
    },
    {
        id: '129',
        name: 'Киров',
        areaId: '04'
    },
    {
        id: '130',
        name: 'Кострома',
        areaId: '01'
    },
    {
        id: '131',
        name: 'Курган',
        areaId: '10'
    },
    {
        id: '132',
        name: 'Курск',
        areaId: '01'
    },
    {
        id: '133',
        name: 'Гатчина',
        areaId: '06'
    },
    {
        id: '134',
        name: 'Липецк',
        areaId: '01'
    },
    {
        id: '135',
        name: 'Магадан',
        areaId: '16'
    },
    {
        id: '136',
        name: 'Мурманск',
        areaId: '06'
    },
    {
        id: '137',
        name: 'Нижний Новгород',
        areaId: '01'
    },
    {
        id: '138',
        name: 'Великий Новгород',
        areaId: '02'
    },
    {
        id: '139',
        name: 'Новосибирск',
        areaId: '05'
    },
    {
        id: '140',
        name: 'Омск',
        areaId: '10'
    },
    {
        id: '141',
        name: 'Оренбург',
        areaId: '08'
    },
    {
        id: '142',
        name: 'Орёл',
        areaId: '01'
    },
    {
        id: '143',
        name: 'Пенза',
        areaId: '02'
    },
    {
        id: '144',
        name: 'Псков',
        areaId: '01'
    },
    {
        id: '145',
        name: 'Ростов-на-Дону',
        areaId: '04'
    },
    {
        id: '146',
        name: 'Рязань',
        areaId: '01'
    },
    {
        id: '147',
        name: 'Самара',
        areaId: '04'
    },
    {
        id: '148',
        name: 'Саратов',
        areaId: '04'
    },
    {
        id: '149',
        name: 'Южно-Сахалинск',
        areaId: '17'
    },
    {
        id: '150',
        name: 'Екатеринбург',
        areaId: '06'
    },
    {
        id: '151',
        name: 'Смоленск',
        areaId: '01'
    },
    {
        id: '152',
        name: 'Тамбов',
        areaId: '01'
    },
    {
        id: '153',
        name: 'Тверь',
        areaId: '01'
    },
    {
        id: '154',
        name: 'Томск',
        areaId: '03'
    },
    {
        id: '155',
        name: 'Тула',
        areaId: '01'
    },
    {
        id: '156',
        name: 'Тюмень',
        areaId: '10'
    },
    {
        id: '157',
        name: 'Ульяновск',
        areaId: '02'
    },
    {
        id: '158',
        name: 'Челябинск',
        areaId: '06'
    },
    {
        id: '159',
        name: 'Ярославль',
        areaId: '01'
    },
    {
        id: '160',
        name: 'Москва',
        areaId: '01'
    },
    {
        id: '161',
        name: 'Санкт-Петербург',
        areaId: '04'
    },
    {
        id: '162',
        name: 'Севастополь',
        areaId: '03'
    },
    {
        id: '163',
        name: 'Биробиджан',
        areaId: '14'
    },
    {
        id: '164',
        name: 'Нарьян-Мар',
        areaId: '18'
    },
    {
        id: '165',
        name: 'Ханты-Мансийск',
        areaId: '10'
    },
    {
        id: '166',
        name: 'Анадырь',
        areaId: '19'
    },
    {
        id: '167',
        name: 'Салехард',
        areaId: '10'
    }
];

export default _.orderBy(regions, ['name']);