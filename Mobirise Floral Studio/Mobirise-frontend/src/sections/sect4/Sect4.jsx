import React from 'react'
import styles from "./Sect4.module.scss"
const Sect4 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.texts}>
                <span>Devoted to wonderful beauty</span>
                <h1>Events Pricing</h1>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <span style={{display:"flex",flexDirection:"row",alignItems:"center",gap:".7rem"}}><h1>$16</h1>pre table</span>
                    <h2>Birthday Event</h2>
                    <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                    <button>Shop Now</button>
                </div>
                <div className={styles.card}>
                    <span style={{display:"flex",flexDirection:"row",alignItems:"center",gap:".7rem"}}><h1>$31</h1>pre table</span>
                    <h2>Wedding Events</h2>
                    <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                    <button>Shop Now</button>
                </div>
                <div className={styles.card}>
                    <span style={{display:"flex",flexDirection:"row",alignItems:"center",gap:".7rem"}}><h1>$52</h1>pre table</span>
                    <h2>Party Events</h2>
                    <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Sect4