import { allItems } from '../../redux/cartReducer';

export const getCart = (list) => {
    const arr = allItems.filter(
        (item) =>
            list.find((subItem) => subItem[item.id] !== undefined)[item.id] !==
            0
    );
    return arr.map((item) => ({
        ...item,
        amount: list.find((subItem) => subItem[item.id] !== undefined)[item.id]
    }));
};

export const getTotalPrice = (cart) =>
    cart.reduce((acc, item) => {
        return acc + item.price * item.amount;
    }, 0);
