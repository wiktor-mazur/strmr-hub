import styles from "./avatar.module.css";

export default function Avatar() {
    return (
        <div className={styles.main}>
            <img src="avatar.png" className={styles.img} alt="Taazy"/>
            <a href="" className={styles.share} title="Share">
                <img src="share-icon.png" alt="Share" className={styles.shareImg}/>
            </a>
        </div>
    );
}
