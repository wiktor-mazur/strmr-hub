import styles from "./BaseLayout.module.css";
import SocialList from "@/app/components/social-list/social-list";
import Avatar from "@/app/components/avatar/avatar";
import { services } from "@/services/services";
import Menu from "@/app/components/menu/menu";
import React from "react";

export interface BaseLayoutProps {
    children: React.JSX.Element;
    title: string;
}

export default async function BaseLayout(props: BaseLayoutProps) {
    const socials = await services.contentful.getSocials();

    return (
    <div className={styles.page}>
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <Avatar title={props.title} />
            </div>
            <div className={styles.menu}>
                <Menu />
            </div>
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
    </div>
  );
}
