import SocialList from "@/app/components/social-list/social-list";
import { services } from "@/services/services";
import BaseLayout from "@/_base_layout/BaseLayout";
import { DEFAULT_TITLE } from "@/app/config";
import { metadata } from "@/app/harmonogram/page";
import { getTwitchStream } from "@/services/twitch/twitch.api";

export default async function Home() {
    const twitchInfo = await getTwitchStream();

    const socials = (await services.contentful.getSocials()).map(social => {
        if (social.socialName.toLowerCase() === 'twitch') {
            if (twitchInfo) {
                return {
                    ...social,
                    description: twitchInfo.title,
                    category: twitchInfo.gameName,
                    live: true
                }
            } else {
                return {
                    ...social,
                    live: false
                }
            }
        }

        return social;
    });



    return (
    <BaseLayout title={metadata.title?.toString() || DEFAULT_TITLE}>
        <SocialList socials={socials}/>
    </BaseLayout>
  );
}
