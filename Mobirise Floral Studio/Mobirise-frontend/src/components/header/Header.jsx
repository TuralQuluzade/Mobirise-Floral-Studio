import React from 'react'
import styles from "./Header.module.scss"
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.logo}>
                <h1>Floral Studio</h1>
            </div>
            <div className={styles.info}>
                <Link to="/">Home</Link>
                <Link >About Us</Link>
                <Link>Portfolio</Link>
                <Link to="/basket">Basket</Link>
                <Link to="/wish">Wish</Link>
            </div>
            <FaBars className={styles.bars}/>
        </div>
    </div>
  )
}

export default Header