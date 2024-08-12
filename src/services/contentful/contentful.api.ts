import { ContentfulClientApi, createClient, Asset } from "contentful";
import { Social } from "./types";

export class ContentfulClient {
    private client: ContentfulClientApi<undefined>;

    constructor() {
        this.client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID || "",
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
        });
    }

    // @TODO error handling
    public async getSocials(): Promise<Social[]> {
        const result = await this.client.getEntries({ content_type: "social" });

        return result.items.map((social) => {
           const icon = this.parseImage(social.fields.icon as Asset);
           const iconHover = this.parseImage(social.fields.iconHover as Asset);

           return {
               ...social.fields,
               icon,
               iconHover,
           } as Social;
        });
    }

    private parseImage(image: Asset): string {
        return image?.fields?.file?.url?.toString() || "";
    }
}