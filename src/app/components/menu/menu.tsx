import styles from "./menu.module.css";

export default function Menu() {
    return (
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <a className={styles.link} href="/">Social media</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href="o-mnie">O mnie</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href="harmonogram">Harmonogram</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href="top5">Top 5</a>
            </li>
        </ul>
    );
}
