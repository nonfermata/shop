import { gratis, cd, mp3, flac, wav, books, epub } from '../data/allItems';
import areas from '../data/areas';

const allItems = [gratis, ...cd, ...mp3, ...flac, ...wav, ...books, ...epub];

export const getAllCart = (cart) =>
    cart.length === 0
        ? []
        : cart.map((item) => ({
              ...allItems.find((subItem) => subItem.id === item.id),
              donations: item.donations
          }));

export const getItemsSum = (cart) =>
    cart.reduce((acc, item) => acc + getItemSum(item.donations), 0);

export const getItemSum = (donations) => {
    return donations.reduce((acc, item) => acc + item, 0);
};

export const getTotalWeight = (cart) =>
    cart
        .filter((item) => !item.isDigital)
        .reduce((acc, item) => acc + item.donations.length * item.weight, 0);

export const getDeliverySum = (areaId, cart) => {
    const totalWeight = getTotalWeight(cart);
    const { startPrice, extra } = areas.find((item) => item.id === areaId);
    const deliverySum = startPrice + extra * (Math.ceil(totalWeight / 500) - 1);
    const tips = deliverySum % 50 < 26 ? 50 : 100;
    return deliverySum - (deliverySum % 50) + tips;
};
