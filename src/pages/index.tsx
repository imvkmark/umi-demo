import React from 'react';
import { Link } from 'umi';
import styles from './index.less';
import imgLoading from '@/assets/images/logo.png'

export default () => {
    return (
        <div>
            <Link to={{ pathname: `/home` }}>
                {' '}
                <button className={styles.title}>Home</button>
                {' '}
            </Link>
            <Link to={{ pathname: `/user` }}>
                <button className={styles.title}>User</button>
                {' '}
            </Link>
            <div>
                <img src={imgLoading} alt="OK"/>
            </div>
        </div>

    );
};
