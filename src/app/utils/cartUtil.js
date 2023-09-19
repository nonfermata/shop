import { gratis, cd, mp3, flac, wav, books, epub } from '../data/data';

const allItems = [gratis, ...cd, ...mp3, ...flac, ...wav, ...books, ...epub];

export const getAllCart = (cart) =>
    cart.length === 0
        ? []
        : cart.map((item) => ({
              ...allItems.find((subItem) => subItem.id === item.id),
              donations: item.donations
          }));

export const getAllTotalSum = (cart) =>
    cart.reduce((acc, item) => {
        return (
            acc +
            item.donations.reduce((itemAcc, donation) => {
                return itemAcc + donation;
            }, 0)
        );
    }, 0);
