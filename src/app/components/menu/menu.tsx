import styles from "./menu.module.css";
import { Routes } from "@/app/routes";

export default function Menu() {
    return (
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <a className={styles.link} href={Routes.Socials}>Social media</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href={Routes.AboutMe}>O mnie</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href={Routes.StreamSchedule}>Harmonogram</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href={Routes.Wideo}>Wideo</a>
            </li>
        </ul>
    );
}
