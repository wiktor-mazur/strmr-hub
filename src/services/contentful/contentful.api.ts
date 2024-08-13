import { ContentfulClientApi, createClient, Asset, EntrySkeletonType } from "contentful";
import { ContentType, Social, Top5Item } from "./types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document } from "@contentful/rich-text-types";
import { Routes } from "@/app/routes";

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
            const result = await this.client.getEntries({ content_type: ContentType.Social });

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
            const result = await this.client.getEntries<EntrySkeletonType<Document>>({ content_type: ContentType.AboutMe });

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
            const result = await this.client.getEntries<EntrySkeletonType<Document>>({ content_type: ContentType.StreamSchedule });

            if (result.total < 1) {
                throw new Error("Not enough elements.");
            }

            return result.items[0].fields.content;
        } catch (e) {
            return null;
        }
    }

    public async getTop5(): Promise<Top5Item[]> {
        try {
            const result = await this.client.getEntries({ content_type: ContentType.Top5 });

            if (result.total < 1) {
                return [];
            }

            return result.items.map((item) => {
                return {
                    ...item.fields,
                } as unknown as Top5Item;
            }).sort((a, b) => a.order - b.order );
        } catch (e) {
            return [];
        }
    }

    public contentTypeToRoutes(contentType: string): string[] {
        switch (contentType) {
            case ContentType.Social:
                return [Routes.Socials];
            case ContentType.AboutMe:
                return [Routes.AboutMe];
            case ContentType.StreamSchedule:
                return [Routes.StreamSchedule];
            case ContentType.Top5:
                return [Routes.Top5];
            default:
                throw new Error(`Unknown ContentType: ${contentType}.`)
        }
    }

    private parseImage(image: Asset): string {
        return image?.fields?.file?.url?.toString() || "";
    }
}