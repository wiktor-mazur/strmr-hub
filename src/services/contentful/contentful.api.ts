import { ContentfulClientApi, createClient, Asset, EntrySkeletonType } from "contentful";
import { Social } from "./types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document } from "@contentful/rich-text-types";

export class ContentfulClient {
    private client: ContentfulClientApi<undefined>;

    constructor() {
        this.client = createClient({
            space: process.env.CONTENTFUL_SPACE || "",
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
        });
    }

    public async getSocials(): Promise<Social[]> {
        try {
            const result = await this.client.getEntries({ content_type: "social" });

            return result.items.map((social) => {
                const icon = this.parseImage(social.fields.icon as Asset);
                const iconHover = this.parseImage(social.fields.iconHover as Asset);

                return {
                    ...social.fields,
                    icon,
                    iconHover,
                } as Social;
            }).sort((a, b) => a.order - b.order );
        } catch (e) {
            return [];
        }
    }

    public async getAboutMe(): Promise<Document | null> {
        try {
            const result = await this.client.getEntries<EntrySkeletonType<Document>>({ content_type: "aboutMe" });

            if (result.total < 1) {
                throw new Error("Not enough elements.");
            }

            return result.items[0].fields.content;
        } catch (e) {
            return null;
        }
    }

    public async getStreamSchedule(): Promise<Document | null> {
        try {
            const result = await this.client.getEntries<EntrySkeletonType<Document>>({ content_type: "streamSchedule" });

            if (result.total < 1) {
                throw new Error("Not enough elements.");
            }

            return result.items[0].fields.content;
        } catch (e) {
            return null;
        }
    }

    private parseImage(image: Asset): string {
        return image?.fields?.file?.url?.toString() || "";
    }
}