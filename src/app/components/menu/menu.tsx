import styles from "./menu.module.css";

export default function Menu() {
    return (
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <a className={styles.link} href="#">Social media</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href="#">O mnie</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href="#">Harmonogram</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href="#">Top 5</a>
            </li>
        </ul>
    );
}
