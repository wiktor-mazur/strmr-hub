import styles from "./page.module.css";
import SocialList from "@/app/components/social-list/social-list";
import { services } from "@/services/services";
import BaseLayout from "@/_base_layout/BaseLayout";
import { DEFAULT_TITLE } from "@/app/config";
import { metadata } from "@/app/harmonogram/page";

export default async function Home() {
    const socials = await services.contentful.getSocials();

    return (
    <BaseLayout title={metadata.title?.toString() || DEFAULT_TITLE}>
        <SocialList socials={socials}/>
    </BaseLayout>
  );
}
