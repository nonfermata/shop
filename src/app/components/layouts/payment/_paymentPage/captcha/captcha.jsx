import React, { useEffect } from 'react';
import classes from './captcha.module.css';
import { useDispatch } from 'react-redux';
import { modifyCaptcha } from '../../../../../../redux/captchaReducer';

const Captcha = React.memo(({ rerender }) => {
    const dispatch = useDispatch();
    const arr = 'bdfghmnqstu12345789'.split('');
    const randArr = [];
    for (let i = 1; i <= 5; i++) {
        let index = Math.round(Math.random() * 18);
        while (randArr.find((item) => item === arr[index])) {
            index = Math.round(Math.random() * 18);
        }
        randArr.push(arr[index]);
    }
    const string = randArr.join('');
    useEffect(() => {
        dispatch(modifyCaptcha(string));
    }, [rerender]);

    const getOneBgrClr = () => Math.round(Math.random() * 130);
    const getBgrColor = () =>
        `rgb(${getOneBgrClr()},${getOneBgrClr()},${getOneBgrClr()})`;
    const getOneClr = () => Math.round(Math.random() * 100 + 135);
    const getColor = () => `rgb(${getOneClr()},${getOneClr()},${getOneClr()})`;
    const getAngle = () => Math.round(Math.random() * 30 - 15);
    const getCmpr = () => Math.round(Math.random() * 4 + 8) / 10;
    const getMrgn = () => Math.round(Math.random() * 6 + 5);
    const getSize = () => Math.round(Math.random() * 5 + 13) / 10;
    const getLineMrgn = () => Math.round(Math.random() * 30 + 5);
    const getLineHeight = () => Math.round(Math.random() * 4 + 1);

    return (
        <div
            className={classes.captchaWrap}
            style={{
                background:
                    'linear-gradient(to top, ' +
                    getBgrColor() +
                    ', ' +
                    getBgrColor() +
                    ', ' +
                    getBgrColor() +
                    ', ' +
                    getBgrColor() +
                    ', ' +
                    getBgrColor() +
                    ')'
            }}
        >
            {randArr.map((item) => (
                <div
                    key={item}
                    style={{
                        color: getColor(),
                        transform:
                            'rotate(' +
                            getAngle() +
                            'deg) skewX(' +
                            getAngle() +
                            'deg)  scaleX(' +
                            getCmpr() +
                            ')',
                        marginLeft: getMrgn() + 'px',
                        marginRight: getMrgn() + 'px',
                        marginTop: getMrgn() - 10 + 'px',
                        fontSize: getSize() + 'rem',
                        backgroundColor: 'transparent'
                    }}
                >
                    {item}
                </div>
            ))}
            <>
                <div
                    className={classes.line}
                    style={{
                        transform: 'rotate(' + getAngle() + 'deg)',
                        top: getLineMrgn(),
                        backgroundColor: getBgrColor(),
                        height: getLineHeight()
                    }}
                ></div>
                <div
                    className={classes.line}
                    style={{
                        transform: 'rotate(' + getAngle() + 'deg)',
                        top: getLineMrgn(),
                        backgroundColor: getBgrColor(),
                        height: getLineHeight()
                    }}
                ></div>
                <div
                    className={classes.line}
                    style={{
                        transform: 'rotate(' + getAngle() + 'deg)',
                        top: getLineMrgn(),
                        backgroundColor: getBgrColor(),
                        height: getLineHeight()
                    }}
                ></div>
                <div
                    className={classes.line}
                    style={{
                        transform: 'rotate(' + getAngle() + 'deg)',
                        top: getLineMrgn(),
                        backgroundColor: getBgrColor(),
                        height: getLineHeight()
                    }}
                ></div>
            </>
        </div>
    );
});

export default Captcha;
