import styles from "./social-item.module.css";
import { Social } from "@/services/contentful/types";

export default function SocialItem(props: Social) {
    return (
        <a className={styles.main} href={props.url} target="_blank">
            <div className={styles.imageWrapper}>
                <img className={`${styles.image} ${styles.imageUnhover} `} src={props.icon} alt={props.socialName} />
                <img className={`${styles.image} ${styles.imageHover} `} src={props.iconHover} alt={props.socialName} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.subtitle}>{props.subtitle}</p>
                <p className={styles.text} title={props.description}>{props.description}</p>
            </div>
            <img className={styles.linkIcon} src="link-icon.png" alt={"Go to " + props.socialName} />
        </a>
    );
}
