import styles from "./avatar.module.css";

export interface AvatarProps {
    title: string;
}

export default function Avatar(props: AvatarProps) {
    return (
        <div className={styles.main}>
            <a href="/">
                <h1 className={styles.h1}>
                    <img src="avatar.png" className={styles.img} alt={props.title}/>
                </h1>
            </a>
            <a href="" className={styles.share} title="Share">
                <img src="share-icon.png" alt="Share" className={styles.shareImg}/>
            </a>
        </div>
    );
}
