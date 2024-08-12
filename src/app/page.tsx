import styles from "./page.module.css";
import SocialList from "@/app/components/social-list/social-list";
import Avatar from "@/app/components/avatar/avatar";

async function getSocials() {
    const res = await fetch('http://127.0.0.1:3000/api/socials', { next: { revalidate: 30 }})

    return await res.json();
}

export default async function Home() {
    const socials = await getSocials();

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
