import React from 'react'
import styles from './Home.module.css'

const HomePortrait = () => {
    return (
        <div>
            <div className="content">
                <h1 className={styles.title}>
                    <h2>Hi,</h2>
                    <h2>I'm Obed,</h2>
                    <h2> web developer</h2>

                    <div className={styles.aurora}>
                        <div className={styles['aurora__item']}></div>
                        <div className={styles['aurora__item']}></div>
                        <div className={styles['aurora__item']}></div>
                        <div className={styles['aurora__item']}></div>
                    </div>
                </h1>
                <p className={styles.subtitle}>Made with love and only the CSS.</p>
            </div>
        </div>
    )
}

export default HomePortrait