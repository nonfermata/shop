import devochki1 from '../assets/spreads/devochki_08_09.png';
import devochki2 from '../assets/spreads/devochki_24_25.png';
import devochki3 from '../assets/spreads/devochki_56_57.png';
import devochki4 from '../assets/spreads/devochki_76_77.png';
import vsePesni1 from '../assets/spreads/vse_pesni_12_13.png';
import vsePesni2 from '../assets/spreads/vse_pesni_18_19.png';
import vsePesni3 from '../assets/spreads/vse_pesni_186_187.png';
import vsePesni4 from '../assets/spreads/vse_pesni_220_221.png';
import inreview1 from '../assets/spreads/interview_42_43.png';
import inreview2 from '../assets/spreads/interview_110_111.png';
import inreview3 from '../assets/spreads/interview_148_149.png';
import inreview4 from '../assets/spreads/interview_186_187.png';
import fiveStories1 from '../assets/spreads/five_stories_40_41.png';
import fiveStories2 from '../assets/spreads/five_stories_48_49.png';
import fiveStories3 from '../assets/spreads/five_stories_70_71.png';
import fiveStories4 from '../assets/spreads/five_stories_114_115.png';

const devochki = [
    { id: 'spr01', image: devochki1, title: 'фрагмент из сказки "Все девочки мечтают о бальных платьях"' },
    { id: 'spr02', image: devochki2, title: 'фрагмент из сказки "Василёк и Серафима"' },
    { id: 'spr03', image: devochki3, title: 'фрагмент из сказки "Куколка для Сесиль"' },
    { id: 'spr04', image: devochki4, title: 'фрагмент из сказки "Жёлтая машина"' }
];
const vsePesni = [
    { id: 'spr05', image: vsePesni1, title: '' },
    { id: 'spr06', image: vsePesni2, title: '' },
    { id: 'spr07', image: vsePesni3, title: '' },
    { id: 'spr08', image: vsePesni4, title: '' }
];
const interview = [
    { id: 'spr09', image: inreview1, title: '' },
    { id: 'spr10', image: inreview2, title: '' },
    { id: 'spr11', image: inreview3, title: '' },
    { id: 'spr12', image: inreview4, title: '' }
];
const fiveStories = [
    { id: 'spr13', image: fiveStories1, title: '' },
    { id: 'spr14', image: fiveStories2, title: 'фрагмент из рассказа "Английская чашка"' },
    { id: 'spr15', image: fiveStories3, title: 'фрагмент из рассказа "Двадцать минут четвертого"' },
    { id: 'spr16', image: fiveStories4, title: 'фрагмент из рассказа "Тоннель"' }
];

const spreads = [
    {
        name: 'Зоя Ященко. "Все девочки мечтают о бальных платьях"',
        spreads: devochki
    },
    {
        name: 'Группа "Белая Гвардия". Все песни, все аккорды',
        spreads: vsePesni
    },
    {
        name: 'Зоя Ященко. "За два часа до начала лета"',
        spreads: interview
    },
    {
        name: 'Зоя Ященко. 25 песен и 5 рассказов',
        spreads: fiveStories
    }
];

export default spreads;
