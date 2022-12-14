import React from 'react';
import styles from './TrendingButton.module.css';

function TrendingButton({ mode, text, trendingMode, changeTrendingMode }) {
    const [buttonState, setButtonState] = React.useState(trendingMode == mode);

    React.useEffect(() => {
        setButtonState(trendingMode == mode);
    }, [trendingMode, mode]);

    const handleOnclickButton = () => {
        changeTrendingMode();
    };

    return (
        <button onClick={handleOnclickButton} className={styles.TrendingButtonGroup}>
            <span className={styles.shadow}></span>
            <span className={styles.edge}></span>
            <span className={`${styles.front} ${styles.text} ${buttonState ? styles.buttonPress : ''}`}>{text}</span>
        </button>
    );
}

export { TrendingButton };
