"use client";

import styles from "./avatar.module.css";

export interface AvatarProps {
    title: string;
}

export default function Avatar(props: AvatarProps) {
    const doShare = async () => {
        await navigator.share({
            title: "Taazy.pl | Social hub",
            text: "Wpadaj na stronę, aby być na bieżąco ze wszystkimi nowościami",
            url: "https://taazy.pl/"
        });
    };

    return (
        <div className={styles.main}>
            <a href="/">
                <h1 className={styles.h1}>
                    <img src="avatar.png" className={styles.img} alt={props.title}/>
                </h1>
            </a>
            <button className={styles.share} title="Share" onClick={doShare}>
                <img src="share-icon.png" alt="Share" className={styles.shareImg}/>
            </button>
        </div>
    );
}
