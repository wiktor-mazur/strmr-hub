import { ContentfulClient } from "@/services/contentful/contentful.api";

export const services = {
    contentful: new ContentfulClient(),
};