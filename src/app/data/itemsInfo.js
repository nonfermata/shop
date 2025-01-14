import retroBack from '../assets/covers/cd/2016_retro_back.png';

const itemsInfo = [
    {
        name: 'Прописью на стене',
        trackList: [
            'Никогда ни слова',
            'Черный февраль',
            'Из красного снега',
            'Под вечер',
            'Колыбельная Мариуполю',
            'Прописью на стене',
            'Ненадолго',
            'Забытый мир',
            'Охота',
            'Запугали',
            'Призраки',
            'По ту сторону синей границы'
        ],
        description: [
            'Зоя Ященко – стихи, музыка, вокал',
            'Дмитрий Баулин – стихи (12), музыка, вокал (11, 12), аранжировки, гитары, клавишные, перкуссия, сэмплы',
            'Александр Тарасов – аккордеон',
            'Артем Руденко – скрипка',
            'Соня Баулина – вокал (9), фортепиано',
            'Ольга Волкова – флейта',
            'Владимир Зерновский – виолончель'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Деревья',
        trackList: [
            'Сарафан',
            'Деревья',
            'Репетиция',
            'Даниилу Андрееву',
            'Поэту К.А.',
            'Пёрышко',
            'Дельфы в августе',
            'Переезжаем',
            'В тех городах',
            'Несколько минут',
            'Мешок'
        ],
        description: [
            'Зоя Ященко – стихи, музыка, вокал',
            'Дмитрий Баулин – стихи (10, 11), музыка, вокал, аранжировки, гитары, клавишные, перкуссия, сэмплы',
            'Артем Руденко – скрипка',
            'Дмитрий Каргин – флейта',
            'Александр Тарасов – аккордеон',
            'Соня Баулина – фортепиано'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Письма из прошлого',
        trackList: [
            'Новая лодка',
            'Грустно трамвай...',
            'Ты ветер',
            'Балерины и лошади',
            'За два часа до начала лета',
            'Весенний блюз',
            'Мой дом',
            'Гувернантка',
            'Калоши',
            'По Льюису Кэрроллу',
            'Однажды',
            'Коньки',
            'Отпускаю',
            'Цветы'
        ],
        description: [
            'Зоя Ященко – стихи, музыка (2-4, 7-9) вокал (1-7, 12-14)',
            'Дмитрий Баулин – музыка (1, 5, 6, 10-14), вокал (10, 11), аранжировки, гитары, клавишные, перкуссия, сэмплы',
            'Артем Руденко – скрипка (1, 4, 6, 7, 12-14)',
            'Дмитрий Каргин – флейта (3, 7, 11-13)',
            'Александр Тарасов – аккордеон (6, 9, 11, 14)',
            'Соня Баулина – вокал (8, 9), пианино (13)'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Вишневое варенье',
        trackList: [
            'И никто не знает',
            'Вишневое варенье',
            'Война',
            'Тонкие миры',
            'Крылья стрекоз',
            'Необитаемый город',
            'Факультет журналистики',
            'Рыжие девушки',
            'То, что ты придумаешь сам',
            'Свидание',
            'Белый ветер января',
            'Мечтаю о Лиссабоне'
        ],
        description: [
            'Зоя Ященко – стихи, музыка (3, 5-8) вокал',
            'Олег Заливако – музыка (1, 2, 4, 7-10)',
            'Дмитрий Баулин – музыка (11, 12), вокал, аранжировки, гитары, клавишные, перкуссия, сэмплы',
            'Артем Руденко – скрипка',
            'Александр Тарасов – аккордеон',
            'Дмитрий Каргин – флейта',
            'Константин Реутов – бас'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Венеция',
        trackList: [
            'Венеция',
            'Поэты',
            'Белый танец',
            'Возвращаться не хочется',
            'Грузия',
            'Люблю',
            'Семейное фото',
            'Твоими нитями',
            'Мне бы хотелось',
            'Шли они',
            'Один на один с пустотой',
            'Новогодняя'
        ],
        description: [
            'Зоя Ященко – стихи (1-10, 12), вокал',
            'Дмитрий Баулин – стихи (11), музыка, вокал, аранжировки, гитары, клавишные, перкуссия, сэмплы',
            'Артем Руденко – скрипка',
            'Александр Тарасов – аккордеон',
            'Дмитрий Каргин – флейта, вистл',
            'Константин Реутов – бас',
            'Лиза – вокал (”Новогодняя”, 2-й куплет)',
            'Соня – вокал (”Новогодняя”, 3-й куплет)'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Ретроспектива',
        trackList: {
            list1: [
                'Дорожный блюз',
                'Кузнечик',
                'Память о небе',
                'Приходила мама',
                'Песня рядового',
                'В контексте вечности',
                'Куклы',
                'Фотография',
                'Зазеркалье',
                'Я хочу нравиться тебе',
                'Далеко от Парижа',
                'Питер',
                'Я так люблю лето',
                'Зеленый чай',
                'Kathakali',
                'Про счастье',
                'Увертюры белых рек',
                'У пяти прудов'
            ],
            list2: [
                'А в лесу сосновом...',
                'Марина',
                'Генералы Гражданской войны',
                'Белая гвардия',
                'Сад',
                'Всего лишь смерть',
                'Вы там',
                'Голубая стрела',
                'С крыши город',
                'Франция',
                'Ах, Боже мой...',
                'Амулет',
                'Айседора Дункан',
                'Сто лет одиночества',
                'Шляпа',
                'Так восходит луна',
                'Королева',
                'Вы так далеко...'
            ]
        },
        description: {
            description1: [
                'Зоя Ященко - стихи (1-14, 16, 18), музыка (5, 9, 12, 13), вокал (1-13)',
                'Дмитрий Баулин - стихи (15, 17), музыка (1-11, 14-18), вокал (15-18), аранжировки, гитары, клавишные, перкуссия',
                'Соня Баулина - вокал (14)',
                'Артем Руденко - скрипка (1-4, 6-10, 13, 14)',
                'Василий Галкин - скрипка (5, 18)',
                'Павел Фильченко - скрипка (12)',
                'Павел Ерохин - флейта (5, 6, 10, 13, 17, 18)',
                'Дмитрий Каргин - флейта (9, 14, 15)',
                'Кристина Оболенская - флейта (3)',
                'Александр Тарасов - аккордеон (2, 11, 16)',
                'Иван Каралькевич - аккордеон (1, 4)',
                'Константин Реутов - бас (3, 4)',
                'Семен Лашкин - виолончель (7)',
                'Станислав Воробьев - виолончель (9)',
                'Алексей Баулин - музыка (18)',
                'музыкальная цитата в песне 11 - Ян Тьерсен'
            ],
            description2: [
                'Зоя Ященко - стихи (1-18), музыка (1-7, 9-16), вокал',
                'Дмитрий Баулин - музыка (17, 18), аранжировки, гитары, клавишные: (1, 3-11, 13-18)',
                'Олег Заливако - музыка (8)',
                'Николай Ларин - аранжировки, скрипка, гитары: (2, 12)',
                'Артем Руденко - скрипка (5, 8, 10, 13, 14, 16)',
                'Павел Фильченко - скрипка (17, 18)',
                'Василий Галкин - скрипка (1)',
                'Екатерина Александрова - скрипка (6)',
                'Павел Ерохин - флейта (6, 9, 11, 17, 18)',
                'Дмитрий Каргин - флейта (13)',
                'Кристина Оболенская - флейта (5)',
                'Семен Лашкин - виолончель (14)',
                'Александр Тарасов - аккордеон (15)'
            ]
        },
        copyright: 'З. Ященко, Д. Баулин',
        backImage: retroBack
    },
    {
        name: 'Зазеркалье',
        trackList: [
            'Велосипед',
            'Зазеркалье',
            'Далеко от Парижа',
            'Концерт для флейты и виолончели',
            'Ноябрь в Москве',
            'Фотография "Две девушки"',
            'Но почему',
            'По Джорджу Оруэллу',
            'Ты плачешь, Будда',
            'Конец мира',
            'Зеленый чай',
            'Про счастье',
            'Спи, Маруся',
            'Франция'
        ],
        description: [
            'Зоя Ященко – стихи (2-14), музыка (2, 5, 7, 14), вокал (2-10, 14)',
            'Дмитрий Баулин – музыка (1-13), вокал (10, 12, 13), аранжировки, гитары, клавишные, перкуссия, сэмплы, дудук (6)',
            'Артем Руденко – скрипка (2, 7, 9, 11, 14)',
            'Александр Тарасов – аккордеон (1, 3-5, 12)',
            'Дмитрий Каргин – флейта (1, 2, 4, 8, 9, 11)',
            'Станислав Воровьев – виолончель (1, 2, 4, 8, 10)',
            'Соня Баулина – вокал (11)'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Так восходит луна',
        trackList: [
            'Мандариновый пирог',
            'Он не верит в меня',
            'Голубая стрела',
            'Малыш',
            'Австралия',
            'Айседора Дункан',
            'Так восходит луна',
            'Шляпа',
            'Санкт-Петербург',
            'Я говорю тебе "да"',
            'Сумасшедший вечер',
            'Бурлаки',
            'Твоя рубашка'
        ],
        description: [
            'Зоя Ященко – стихи (1-13), музыка (2,4-8,11), голос',
            'Олег Заливако – музыка (1, 3, 9, 10, 12)',
            'Дмитрий Баулин – музыка (13), голос, аранжировки, гитары, клавишные, перкуссия, сэмплы',
            'Артем Руденко – скрипка',
            'Александр Тарасов – аккордеон',
            'Дмитрий Каргин – флейта'
        ],
        copyright: 'З. Ященко'
    },
    {
        name: 'Сказки Метерлинка',
        trackList: [
            'Мой город',
            'Кузнечик',
            'После цунами',
            'Великаны',
            'Аргентинское танго',
            'Куклы',
            'Сказки Метерлинка',
            'Стоять перед морем',
            'Этот самолет летит в Индию',
            'Копейка',
            'Дождь',
            'Kathakali'
        ],
        description: [
            'Зоя Ященко – стихи (1-11), голос',
            'Дмитрий Баулин – музыка, стихи (12), голос, аранжировки, гитары, клавишные, перкуссия, сэмплы',
            'Артем Руденко – скрипка (1, 2, 4-9, 11)',
            'Александр Тарасов – аккордеон (1, 2, 4, 5, 8, 9)',
            'Дмитрий Каргин – флейта (4, 7, 12)',
            'Семен Лашкин – виолончель (5-7, 11)',
            'Павел Ерохин – саксофон (10)',
            'Павел Фильченко – скрипка (10)'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Это все Ты',
        trackList: [
            'Ruhanie',
            'Птицы',
            'Рождество',
            'Игра в бильярд',
            'В лодке твоей',
            'О тиграх',
            'Это все Ты',
            'Рано утром',
            'День сурка',
            'Сто лет одиночества',
            'Одуванчик',
            'Я буду лететь'
        ],
        description: [
            'Зоя Ященко – стихи (2-12), музыка (2-12), голос',
            'Дмитрий Баулин – музыка (1), аранжировки, голос, гитары, клавишные, перкуссия, блок-флейта',
            'Артем Руденко – скрипка',
            'Александр Тарасов – аккордеон (11, 12)',
            'Кристина Оболенская – флейта (7, 8, 11)',
            'Семен Лашкин – виолончель (3, 6, 10)',
            'Павел Ерохин – флейта (5)',
            'Александр Волков – саксофон (4)',
            'Соня – голос (11)'
        ],
        copyright: 'З. Ященко'
    },
    {
        name: 'Один шаг',
        trackList: [
            'Я с тобой',
            'В храме ночных электричек',
            'Дети',
            'Причины',
            'Дьявол',
            'Один шаг',
            'Самолет',
            'Танец',
            'Дом без ключей',
            'Мой Бог',
            'Последняя сказка',
            'У пяти прудов',
            'Весна',
            'Увертюры белых рек',
            'Смешное кино'
        ],
        description: [
            'Дмитрий Баулин – стихи (1-11, 13-15), музыка, голос, аранжировки, гитары, флейты (2, 12), клавишные, перкуссия',
            'Зоя Ященко – стихи (12)',
            'Артем Руденко – скрипка (2, 5, 6, 10)',
            'Павел Ерохин – флейта (4, 5, 14)',
            'Василий Галкин – скрипка (12)',
            'Иван Каралькевич – аккордеон (8)',
            'Алексей Баулин – музыка (12)'
        ],
        copyright: 'Д. Баулин'
    },
    {
        name: 'Ключ из пепла',
        trackList: [
            'Память о небе',
            'Ключ из пепла',
            'Сад',
            'Приходила мама',
            'Фотография',
            'Сны',
            'Его звали Федор',
            'Индия',
            'Танец',
            'Самолет',
            'Дорожный блюз'
        ],
        description: [
            'Зоя Ященко – стихи (1-8, 11), музыка (2, 3, 8, 11), голос',
            'Дмитрий Баулин – музыка (1, 4-7, 9, 10), стихи (9, 10), голос, аранжировки, гитары, клавишные, перкуссия, сэмплы',
            'Артем Руденко – скрипка',
            'Константин Реутов – бас-гитара (1, 4, 7)',
            'Иван Каралькевич – аккордеон',
            'Александр Волков – саксофон',
            'Кристина Оболенская – флейта'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Заводной сверчок',
        trackList: [
            'Я так люблю лето',
            'Танец льва',
            'В контексте вечности',
            'Лодка',
            'Заводной сверчок',
            'У моей чашки',
            'Королева',
            'Вы так далеко...',
            'Дьявол',
            'Дом без ключей',
            'Я хочу нравиться тебе'
        ],
        description: [
            'Зоя Ященко – стихи (1-8, 11), музыка (1, 2, 4-6), голос (1-8, 11)',
            'Дмитрий Баулин – стихи (9, 10), музыка (3, 5-10), голос (7-10), гитары, аранжировки, клавишные, перкуссия, сэмплы',
            'Павел Ерохин - флейта',
            'Артем Руденко – скрипка (1-3, 6, 9, 11)',
            'Павел Фильченко – скрипка (5, 7, 8)'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Питер',
        trackList: [
            'Питер',
            'Черта',
            'Еще один блюз',
            'Грустный мотив',
            'Ночной дозор',
            'Маленький',
            'Весна',
            'Увертюры белых рек',
            'Смешное кино',
            'Германия',
            'Птичка',
            'Один из семи'
        ],
        description: [
            'Зоя Ященко – стихи (1-6, 10-12), музыка (1, 5, 6, 10, 12), голос',
            'Дмитрий Баулин – стихи (7-9), музыка (2-4, 6-9, 11, 12), гитары, , голос, аранжировки, клавишные, перкуссия, губная гармошка',
            'Павел Ерохин – флейта, саксофон',
            'Павел Фильченко – скрипка'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Кукла в кармане',
        trackList: [
            'Кафе на тротуаре',
            'Песня рядового',
            'Кукла в кармане',
            'Сердце мое',
            'Глаза цвета кофе',
            'Алый парус',
            'Стояли стройные пальмы',
            'Наизнанку',
            'Что-то еще',
            'Я с тобой',
            'Причины',
            'У пяти прудов'
        ],
        description: [
            'Зоя Ященко – стихи, музыка (1, 2, 6-8), голос, гитара',
            'Дмитрий Баулин – стихи (10, 11), музыка (3-5, 9-12), гитары, голос, аранжировки, клавишные, перкуссия',
            'Павел Ерохин – флейта',
            'Василий Галкин – скрипка',
            'Лиза – голос (6)',
            'Алексей Баулин – музыка (12)'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Когда ты вернешься',
        trackList: [
            'Комната',
            'Белая гвардия',
            'Музыка',
            'Попрошайка',
            'Вы – там',
            'Девочка',
            'Генералы Гражданской войны',
            'Подросток',
            'Как трудно',
            'Вере Матвеевой',
            'Ах, Боже мой...',
            'С крыши город',
            'Кофейни',
            'Телефонный монолог',
            'А в лесу сосновом...',
            'Пророчество',
            'В сентябре',
            'Плясовая'
        ],
        description: [
            'Зоя Ященко – стихи, музыка, голос, гитара',
            'Дмитрий Баулин – аранжировки, гитары, клавишные, перкуссия, голос',
            'Олег Заливако – музыка (8, 14, 16)',
            'Павел Ерохин – флейта',
            'Василий Галкин – скрипка'
        ],
        copyright: 'З. Ященко'
    },
    {
        name: 'Другие острова',
        trackList: [
            'Танцы с волками',
            'Абсолютная ночь',
            'Всего лишь смерть',
            'Между этим миром и тем',
            'Маково поле',
            'Сияющий челн',
            'Дженни',
            'Желтые бабочки',
            'Какофония большого города',
            'Увидеть тебя',
            'Сегодня твой день',
            'Солнце над Киммерией'
        ],
        description: [
            'Зоя Ященко – стихи, музыка, вокал',
            'Дмитрий Баулин – аранжироки, музыка, гитары, бас, барабаны, клавишные, аккордеон, голос',
            'Пивел Ерохин – флейты, виолончель, саксофон',
            'Алексей Питецкий – бас',
            'Виктор Лемм – перкуссия',
            'Катя Александрова – скрипка'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Зной',
        trackList: [
            'Подводный город',
            'Зной',
            'Тогда огонь',
            'Сумерки',
            'На Ивана Купала',
            'Я буду ждать',
            'Синий цвет',
            'Печорин',
            'Мираж',
            'Океан',
            'Шпана'
        ],
        description: [
            'Зоя Ященко – стихи, музыка, голос',
            'Николай Ларин – аранжировки',
            'Олег Заливако – музыка (8, 11)',
            'Игорь Гор – голос (1)',
            'Александр Хитров – флейта (1, 4)'
        ],
        copyright: 'З. Ященко'
    },
    {
        name: 'Амулет',
        trackList: [
            'Амулет',
            'Море',
            'Лето',
            'Я люблю',
            'Трава',
            'Мой герой',
            'Белый лотос',
            'Демон',
            'Только музыка',
            'Поединок',
            'Марина',
            'Дверь',
            'Там',
            'Бенгальский залив'
        ],
        description: [
            'Зоя Ященко – стихи, музыка, голос',
            'Олег Заливако – музыка (3, 5, 8-10, 12, 14), аранжировки (3, 5, 8-10), голос, гитара',
            'Николай Ларин – аранжировки, аккордеон, флейта, гусли, клавишные, мандолина, скрипка, бас, соло-гитара, перкуссия'
        ],
        copyright: 'З. Ященко'
    },
    {
        name: 'Зоя Ященко. "Рим и Анйов"',
        trackList: [
            'Эта книга написана по реальным событиям. В ней собраны истории людей, по-своему переживающих трагедию последних двух с половиной лет. Каждый из них остался один на один с нынешним временем. Кто-то научился жить внутри системы, кто-то оказался в самой горячей точке, кто-то уехал, кто-то не дожил до конца повествования. Все имена изменены автором текста, все судьбы – реалиями наших дней. Всё могло бы сложиться иначе, если бы не...\n',
            'А ответ на вопрос, почему истории именно этих людей собраны под одной обложкой, вы получите, дочитав книгу до конца.\n'
        ],
        copyright: 'З. Ященко'
    },
    {
        name: 'Зоя Ященко. "Поля и снеговик"',
        trackList: [
            'Дорогие мамы и папы маленьких девочек и мальчиков!\n',
            'Из этой книги вы узнаете о девочке Поле, которая растёт в такой же семье, как ваша. В начале повествования Поле всего два года. У нее есть любимые куклы, книжки и фильмы. Ей нравятся маленькие путешествия по окрестностям. Она очень любознательная. \n',
            'С ней постоянно происходят всякие волшебные вещи! Разве может быть детство без волшебства?\n\n',
            'В книгу вошло 45 коротких историй и 100 иллюстраций.\n' +
                'Здесь вы можете познакомиться с некоторыми из историй ▼\n'
        ],
        copyright: 'З. Ященко'
    },
    {
        name: 'Зоя Ященко. "Все девочки мечтают о бальных платьях"',
        trackList: [
            'В эту книгу вошло восемь волшебных историй для детей и взрослых – о дружбе, о музыке, о путешествиях в другие города и незнакомые миры.\n\n' +
                'Несколько разворотов из книги ▼'
        ],
        copyright: 'З. Ященко'
    },
    {
        name: 'Группа "Белая Гвардия". Все песни, все аккорды',
        trackList: [
            'В этот сборник вошли тексты песен группы «Белая Гвардия», написанные с 1993 по 2018 год. К песням прилагаются аккорды.\n' +
                'Тексты для удобства расставлены не в хронологическом, а в алфавитном порядке.\n\n' +
                'Несколько разворотов из книги ▼'
        ],
        copyright: 'З. Ященко, Д. Баулин'
    },
    {
        name: 'Зоя Ященко. "За два часа до начала лета"',
        trackList: [
            'Книга представляет собой виртуальное интервью. Журналист Анатолий Обыдёнкин прислал свои вопросы по электронной почте автору песен «Белой Гвардии» Зое Ященко. Зоя пишет ответы, которые постепенно формируются в книгу.\n',
            'В каждую главу книги включены фотографии и тексты песен. Эта книга о группе, о песнях, о жизни.\n\n' +
                'Несколько разворотов из книги ▼'
        ],
        copyright: 'З. Ященко'
    },
    {
        name: 'Зоя Ященко. 25 песен и 5 рассказов',
        trackList: [
            'Название книги говорит само за себя. Это небольшой сборник поэзии и прозы.\n',
            'Проза Зои Ященко ранее нигде не издавалась и публикуется впервые.\n\n' +
                'Несколько разворотов из книги ▼'
        ],
        copyright: 'З. Ященко'
    }
];

export const getItemInfoByName = (name) =>
    itemsInfo.find((item) => item.name === name);
