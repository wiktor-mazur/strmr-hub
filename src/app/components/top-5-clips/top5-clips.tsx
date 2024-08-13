import styles from "./top5-clips.module.css";
import { Top5Item } from "@/services/contentful/types";

export interface Top5ClipsProps {
    items: Top5Item[];
}

export default function Top5Clips(props: Top5ClipsProps) {
    return (
        <ul className={styles.main}>
            {
                props.items.length === 0 &&
                <li className={styles.item}>
                    <center>Nie znaleziono wpisów</center>
                </li>
            }
            {props.items.map(v => (
                <li className={styles.item} key={v.title}>
                    <h2 className={styles.title}><span className={styles.titleTop}>Top {v.order}&nbsp;&nbsp;|&nbsp;&nbsp;</span>{v.title}</h2>
                    <iframe className={styles.video} src={v.url.replace('watch?v=', 'embed/')}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <div className={styles.footer}>
                        {v.author && <p className={styles.author}>Klip stworzony przez: {v.author}</p>}
                        <a className={styles.visit} href={v.url} target="_blank">
                            Zobacz na Kick
                            <img className={styles.linkImage} src="link.png" alt=""/>
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    );
}
