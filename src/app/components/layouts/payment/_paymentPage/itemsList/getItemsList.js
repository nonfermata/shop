/* eslint-disable indent */
import getUpperFirst from '../../../../../utils/getUpperFirst';
import { getItemSum } from '../../../../../utils/cartUtil';

export const getItemsList = (cart) =>
    cart.map(({ name, id, donations, subtitle, year }) => ({
        id,
        name,
        year: year || '',
        subtitle: subtitle ? getUpperFirst(subtitle) : '',
        amount: donations.length,
        itemSum: getItemSum(donations)
    }));

export const getItemsListForEmail = (cart) =>
    cart.map(({ name, donations, subtitle, year }) => {
        const adding = year
            ? `, ${year} год. ${getUpperFirst(subtitle)}. ${
                  donations.length
              } шт`
            : '';
        return {
            name: `• ${name}${adding}`,
            itemSum: 'На общую сумму ' + getItemSum(donations) + ' ₽'
        };
    });

export const getDeliveryStringForEmail = (
    regionName,
    weight,
    deliverySum,
    totalSum
) =>
    `\n+ доставка ${deliverySum} ₽\n(вес: ${weight} г, регион доставки: ${regionName})\n\nИтого с доставкой: ${totalSum} ₽`;
