import React from 'react'
import styles from "./Sect5.module.scss"
const Sect5 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.texts}>
                <span>Contacts</span>
                <h1>Our Team</h1>
            </div>
            <div className={styles.mans}>
                <div className={styles.man}>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                    <h2>Velva Kopf</h2>
                    <p>Biologist</p>
                </div>
                <div className={styles.man}>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                    <h2>Sarah Palmer</h2>
                    <p>Florist</p>
                </div>
                <div className={styles.man}>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
                    <h2>Jessica Swift</h2>
                    <p>Photographer</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sect5