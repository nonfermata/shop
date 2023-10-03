import devochki_1 from '../assets/spreads/devochki_08_09.png';
import devochki_2 from '../assets/spreads/devochki_24_25.png';
import devochki_3 from '../assets/spreads/devochki_56_57.png';
import devochki_4 from '../assets/spreads/devochki_76_77.png';
import vse_pesni_1 from '../assets/spreads/vse_pesni_12_13.png';
import vse_pesni_2 from '../assets/spreads/vse_pesni_18_19.png';
import vse_pesni_3 from '../assets/spreads/vse_pesni_186_187.png';
import vse_pesni_4 from '../assets/spreads/vse_pesni_220_221.png';
import inreview_1 from '../assets/spreads/interview_42_43.png';
import inreview_2 from '../assets/spreads/interview_110_111.png';
import inreview_3 from '../assets/spreads/interview_148_149.png';
import inreview_4 from '../assets/spreads/interview_186_187.png';
import five_stories_1 from '../assets/spreads/five_stories_40_41.png';
import five_stories_2 from '../assets/spreads/five_stories_48_49.png';
import five_stories_3 from '../assets/spreads/five_stories_70_71.png';
import five_stories_4 from '../assets/spreads/five_stories_114_115.png';

const devochki = [
    { id: 'spr01', image: devochki_1 },
    { id: 'spr02', image: devochki_2 },
    { id: 'spr03', image: devochki_3 },
    { id: 'spr04', image: devochki_4 }
];
const vse_pesni = [
    { id: 'spr05', image: vse_pesni_1 },
    { id: 'spr06', image: vse_pesni_2 },
    { id: 'spr07', image: vse_pesni_3 },
    { id: 'spr08', image: vse_pesni_4 }
];
const interview = [
    { id: 'spr09', image: inreview_1 },
    { id: 'spr10', image: inreview_2 },
    { id: 'spr11', image: inreview_3 },
    { id: 'spr12', image: inreview_4 }
];
const five_stories = [
    { id: 'spr13', image: five_stories_1 },
    { id: 'spr14', image: five_stories_2 },
    { id: 'spr15', image: five_stories_3 },
    { id: 'spr16', image: five_stories_4 }
];

const spreads = [
    {
        name: 'Зоя Ященко. "Все девочки мечтают о бальных платьях"',
        spreads: devochki
    },
    {
        name: 'Группа "Белая Гвардия". Все песни, все аккорды',
        spreads: vse_pesni
    },
    {
        name: 'Зоя Ященко. "За два часа до начала лета"',
        spreads: interview
    },
    {
        name: 'Зоя Ященко. 25 песен и 5 рассказов',
        spreads: five_stories
    }
];

export default spreads;
