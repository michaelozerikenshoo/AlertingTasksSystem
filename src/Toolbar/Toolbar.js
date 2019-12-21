import React from 'react';
import styles from './Toolbar.module.css'

const Toolbar = (props) => {
    return (
        <div className={styles.Toolbar}>
            <button onClick={props.toggleGrid} className={styles.button}> Grid</button>
        </div>
    );
};

export default Toolbar;