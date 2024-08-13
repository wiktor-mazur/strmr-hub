"use client";

import styles from "./avatar.module.css";
import { Routes } from "@/app/routes";

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
            <a href={Routes.Socials}>
                <h1 className={styles.h1}>
                    <img src="avatar.png" className={styles.img} alt={props.title}/>
                </h1>
            </a>
            <p className={styles.title}>
                <span className={styles.green}>@</span>taazy
            </p>
            <p className={styles.subtitle}>
                <span className={styles.grey}>Biznes:</span> <a href="mailto:wspolpraca@taazy.pl">wspolpraca@taazy.pl</a>
            </p>
            <button className={styles.share} title="Share" onClick={doShare}>
                <img src="share-icon.png" alt="Share" className={styles.shareImg}/>
            </button>
        </div>
    );
}
