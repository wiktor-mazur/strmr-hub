import styles from "./page.module.css";
import SocialList from "@/app/components/social-list/social-list";
import { services } from "@/services/services";
import BaseLayout from "@/_base_layout/BaseLayout";

export default async function Home() {
    const socials = await services.contentful.getSocials();

    return (
    <BaseLayout>
        <SocialList socials={socials}/>
    </BaseLayout>
  );
}
