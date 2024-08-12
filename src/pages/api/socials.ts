import { ContentfulClient } from "@/services/contentful/contentful.api";

export default async function handler(req: any, res: any) {
    const client = new ContentfulClient();
    const socials = await client.getSocials();

    res.status(200).json(socials);
}