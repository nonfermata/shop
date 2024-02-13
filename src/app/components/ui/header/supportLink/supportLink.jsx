import React, { useState } from 'react';
import supporting from '../../../../assets/svg/supporting';
import { Link } from 'react-router-dom';
import classes from '../header.module.css';
import burgerClasses from '../burger/burger.module.css';
import SupportersList from '../../supportersList/supportersList';
import CrossIcon from '../../../common/crossIcon/crossIcon';

const SupportLink = ({ isMobile }) => {
    const [addedStyle, setAddedStyle] = useState('');
    const handleClick = () => {
        setAddedStyle((prevState) =>
            prevState === '' ? classes.darkScreenActive : ''
        );
    };
    return (
        <>
            {isMobile ? (
                <Link
                    className={burgerClasses.burgerLink}
                    to='support-list'
                    title='Список поддержавших этот проект'
                >
                    {supporting}
                    Нас поддержали
                </Link>
            ) : (
                <>
                    <div
                        className={classes.supportLink}
                        title='Список поддержавших этот проект'
                        onClick={handleClick}
                    >
                        Нас поддержали
                        {supporting}
                    </div>
                    <div
                        onClick={handleClick}
                        className={
                            classes.supportListDarkScreen + ' ' + addedStyle
                        }
                    >
                        <div
                            className={classes.supportListWrap}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <SupportersList />
                        </div>
                        <div className={classes.crossWrap}>
                            <CrossIcon />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default SupportLink;
