import React from 'react'
import styles from "./Footer.module.scss"
import { Link } from 'react-router'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.input}>
                <input type="text" name="" id="" />
                <button>Send</button>
            </div>
            <div className={styles.about}>
                <h2>About</h2>
                <Link>About Us</Link>
                <Link>Our Partners</Link>
                <Link>Our Services</Link>
            </div>
            <div className={styles.contact}>
                <h2>Contact</h2>
                <Link>Contact Us</Link>
                <Link>FAQ Page</Link>
                <Link>About Me</Link>
            </div>
            <div className={styles.about}>
                <h2>Follow Us</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer