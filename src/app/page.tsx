import styles from "./page.module.css";
import SocialList from "@/app/components/social-list/social-list";
import Avatar from "@/app/components/avatar/avatar";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <Avatar/>
            </div>
            <SocialList/>
        </div>
    </main>
  );
}
