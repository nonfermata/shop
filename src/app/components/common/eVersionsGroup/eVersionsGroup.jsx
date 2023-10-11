import React from 'react';
import { Link } from 'react-router-dom';
import classes from './eVersionsGroup.module.css';

const EVersionsGroup = () => {
    return (
        <div className={classes.getEVersion}>
            Вы можете приобрести электронную версию:
            <div className={classes.eVersionsGroup}>
                <Link to='../mp3' title='MP3-версия'>
                    MP3
                </Link>
                |
                <Link to='../flac' title='FLAC-версия'>
                    FLAC
                </Link>
                |
                <Link to='../wav' title='WAV-версия'>
                    WAV
                </Link>
            </div>
        </div>
    );
};

export default EVersionsGroup;
