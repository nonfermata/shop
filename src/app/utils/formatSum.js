const formatSum = (sum) => {
    const arr = sum.toString().split('');
    arr.reverse();
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        if ((i + 1) % 3 === 0) {
            newArr.push(' ');
        }
    }

    return newArr.reverse().join('');
};

export default formatSum;
