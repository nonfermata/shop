import propis from '../assets/covers/2023_propis.png';
import derevia from '../assets/covers/2020_derevia.png';
import pisma from '../assets/covers/2019_pisma.png';
import varenie from '../assets/covers/2018_varenie.png';
import venice from '../assets/covers/2017_venice.png';
import retro from '../assets/covers/2016_retro.png';
import zazerkalie from '../assets/covers/2015_zazerkalie.png';
import luna from '../assets/covers/2013_luna.png';
import skazki from '../assets/covers/2011_skazki.png';
import eto from '../assets/covers/2010_eto_vse_ty.png';
import shag from '../assets/covers/2009_shag.jpg';
import kluch from '../assets/covers/2009_kluch.jpg';
import sverchok from '../assets/covers/2009_sverchok.jpg';
import piter from '../assets/covers/2005_piter.jpg';
import kukla from '../assets/covers/2005_kukla.jpg';
import kogda from '../assets/covers/2002_kogda.jpg';
import drugie from '../assets/covers/2001_drugie.jpg';
import znoy from '../assets/covers/1997_znoy.jpg';
import amulet from '../assets/covers/1996_amulet.jpg';
import devochki from '../assets/covers/book_devochki.png';
import accords from '../assets/covers/book_vse_akkordy.jpg';
import interview from '../assets/covers/book_do_nachala.jpg';
import fiveStories from '../assets/covers/book_five_stories.jpg';

class Item {
    constructor(id, name, price, year, image, isAvailable) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.year = year;
        this.image = image;
        this.isAvailable = isAvailable;
    }
}

export const cd = [
    new Item('cd1_2023', 'Прописью на стене', 600, 2023, propis, true),
    new Item('cd1_2020', 'Деревья', 500, 2020, derevia, true),
    new Item('cd1_2019', 'Письма из прошлого', 400, 2019, pisma, true),
    new Item('cd1_2018', 'Вишневое варенье', 500, 2018, varenie, true),
    new Item('cd1_2017', 'Венеция', 500, 2017, venice, true),
    new Item('cd1_2016', 'Ретроспектива', 800, 2016, retro, true),
    new Item('cd1_2015', 'Зазеркалье', 400, 2015, zazerkalie, false),
    new Item('cd1_2013', 'Так восходит луна', 400, 2013, luna, false)
];

export const books = [
    new Item(
        'bk1_2023',
        'Зоя Ященко. "Все девочки мечтают о бальных платьях"',
        2200,
        2023,
        devochki,
        true
    ),
    new Item(
        'bk1_20218',
        'Группа "Белая Гвардия". Все песни, все аккорды',
        1000,
        2018,
        accords,
        true
    ),
    new Item(
        'bk1_2017',
        'Зоя Ященко. "За два часа до начала лета"',
        800,
        2017,
        interview,
        true
    ),
    new Item(
        'bk1_2006',
        'Зоя Ященко. 25 песен и 5 рассказов',
        300,
        2006,
        fiveStories,
        true
    )
];
