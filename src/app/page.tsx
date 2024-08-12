import styles from "./page.module.css";
import SocialList from "@/app/components/social-list/social-list";
import Avatar from "@/app/components/avatar/avatar";
import { services } from "@/services/services";

export default async function Home() {
    const socials = await services.contentful.getSocials();

    return (
    <div className={styles.page}>
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <Avatar/>
            </div>
            {/*<div className={styles.menu}>*/}
            {/*    <Menu/>*/}
            {/*</div>*/}
            <main className={styles.main}>
                <SocialList socials={socials}/>
            </main>
        </div>
    </div>
  );
}
