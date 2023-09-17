const categories = {
    people: ['человек', 'человек', 'человека'],
    hours: ['часов', 'час', 'часа'],
    minutes: ['минут', 'минута', 'минуты'],
    days: ['дней', 'день', 'дня'],
    months: ['месяцев', 'месяц', 'месяца'],
    years: ['лет', 'год', 'года'],
    divisors: ['делителей', 'делитель', 'делителя'],
    positions: ['позиций', 'позиция', 'позиции'],
    rubles: ['рублей', 'рубль', 'рубля'],
    pieces: ['штук','штука','штуки']
};

const getDeclination = (number, category) => {
    const arr = categories[category];
    let word = arr[0];
    const lastSymbol = Math.floor(number % 10);
    if (
        lastSymbol > 0 &&
        lastSymbol < 5 &&
        Math.floor((number / 10) % 10) !== 1
    ) {
        word = lastSymbol === 1 ? arr[1] : arr[2];
    }
    return word;
};

export default getDeclination;
