import devochki from "../assets/covers/books/book_devochki.png";
import accords from "../assets/covers/books/book_vse_akkordy.jpg";
import interview from "../assets/covers/books/book_do_nachala.jpg";
import fiveStories from "../assets/covers/books/book_five_stories.jpg";

export const epubBooks = [
    new EpubItem(
        'bk1_2023',
        'Зоя Ященко. "Все девочки мечтают о бальных платьях"',
        500,
        2023,
        devochki,
        true,
        [
            'Формат 220х290мм, 112 стр.',
            'Полноцветное издание, с авторскими иллюстрациями'
        ]
    ),
    new EpubItem(
        'bk1_2018',
        'Группа "Белая Гвардия". Все песни, все аккорды',
        300,
        2018,
        accords,
        true,
        [
            'Формат 145х205мм, 366 стр.',
            'Печать черно-белая, с фотографиями и рисунками'
        ]
    ),
    new EpubItem(
        'bk1_2017',
        'Зоя Ященко. "За два часа до начала лета"',
        300,
        2017,
        interview,
        true,
        [
            'Формат 145х205мм, 318 стр.',
            'Печать черно-белая, с фотографиями и рисунками'
        ]
    ),
    new EpubItem(
        'bk1_2006',
        'Зоя Ященко. 25 песен и 5 рассказов',
        300,
        2006,
        fiveStories,
        true,
        [
            'Формат 110х162мм, 152 стр.',
            'Печать черно-белая, с фотографиями и рисунками'
        ]
    )
];