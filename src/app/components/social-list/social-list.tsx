import styles from "./social-list.module.css";
import SocialItem from "@/app/components/social-item/social-item";
import { Social } from "@/services/contentful/types";

export interface SocialListProps {
    socials: Social[];
}

export default function SocialList(props: SocialListProps) {
    return (
        <ul className={styles.main}>
            {
                props.socials.length === 0 &&
                <li className={styles.item}>
                    Nie znaleziono wpisów
                </li>
            }
            {props.socials.map(v => (
                <li className={styles.item} key={v.socialName}>
                    <SocialItem {...v}/>
                </li>
            ))}
        </ul>
    );
}
