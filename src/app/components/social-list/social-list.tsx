import styles from "./social-list.module.css";
import SocialItem, {SocialItemProps} from "@/app/components/social-item/social-item";

const socialItems: SocialItemProps[] = [
    {
        name: "Kick",
        title: "Tazy8",
        subtitle: "kick.com/tazy8",
        text: "Wpadnij na mój stream!",
        url: "https://kick.com/tazy8",
        image: "social/kick.png",
        imageHover: "social/kick-hover.png",
    },
    {
        name: "Instagram",
        title: "Taazy282",
        subtitle: "instagram.com/taazy282",
        text: "Wpadnij sprawdzić najnowsze informacje o mnie",
        url: "https://instagram.coim/taazy282",
        image: "social/instagram.png",
        imageHover: "social/instagram-hover.png",
    },
    {
        name: "Discord",
        title: "Serdelki Taazego",
        subtitle: "discord.com/invite/XFaP4sFgN7",
        text: "Dołącz do naszego Discordowego community",
        url: "https://discord.com/invite/XFaP4sFgN7",
        image: "social/discord.png",
        imageHover: "social/discord-hover.png",
    },
    {
        name: "Prime MMA",
        title: "PRIME SHOW MMA 9",
        subtitle: "primemma.tv/taazy",
        text: "Wykup PPV na galę z mojego linku",
        url: "https://primemma.tv/taazy",
        image: "social/prime.png",
        imageHover: "social/prime-hover.png",
    },
    {
        name: "YouTube",
        title: "Tazy_282",
        subtitle: "youtube.com/channel/UC8_3FUlf_i4Zl4Cm9bbI7MA",
        text: "Zostaw subskrypcję na moim YouTube",
        url: "https://youtube.com/channel/UC8_3FUlf_i4Zl4Cm9bbI7MA",
        image: "social/youtube.png",
        imageHover: "social/youtube-hover.png",
    }
]

export default function SocialList() {
    return (
        <ul className={styles.main}>
            {socialItems.map(v => (
                <li className={styles.item}>
                    <SocialItem {...v}/>
                </li>
            ))}
        </ul>
    );
}
