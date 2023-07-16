import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__wrapper}>
                    <nav className={styles.header__navigation}>
                        <a href="#">Women</a>
                        <a href="#">Men</a>
                        <a href="#">Collections</a>
                        <a href="#">Summer sale</a>
                    </nav>
                    <Link href="/">
                        <p className={styles.header__logo}>PracticePractice</p>
                    </Link>
                    <p className={styles.header__checkout}>Checkout (0)</p>
                </div>
            </div>
        </header>
    )
}

export default Header
