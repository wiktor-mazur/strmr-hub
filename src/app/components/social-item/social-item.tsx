import styles from "./social-item.module.css";

export interface SocialItemProps {
    name: string;
    title: string;
    subtitle: string;
    text: string;
    image: string;
    imageHover: string;
    url: string;
}

export default function SocialItem(props: SocialItemProps) {
    return (
        <a className={styles.main} href={props.url} target="_blank">
            <div className={styles.imageWrapper}>
                <img className={`${styles.image} ${styles.imageUnhover} `} src={props.image} alt={props.name} />
                <img className={`${styles.image} ${styles.imageHover} `} src={props.imageHover} alt={props.name} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.subtitle}>{props.subtitle}</p>
                <p className={styles.text} title={props.text}>{props.text}</p>
            </div>
            <img className={styles.linkIcon} src="link-icon.png" alt={"Go to " + props.name} />
        </a>
    );
}
