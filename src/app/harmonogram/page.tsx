import BaseLayout from "@/_base_layout/BaseLayout";
import Text from "@/app/components/text/text";
import { services } from "@/services/services";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Metadata } from "next";
import { DEFAULT_TITLE } from "@/app/config";

export const metadata: Metadata = {
    title: "Harmonogram streamów | Taazy",
};

export default async function StreamSchedule() {
    const document = await services.contentful.getStreamSchedule();
    const html: string = document ? documentToHtmlString(document) : "Wystąpił błąd. Nie udało się pobrać zawartości strony.";

    const getHtml = () => {
        return {
            __html: html
        }
    }

    return (
        <BaseLayout title={metadata.title?.toString() || DEFAULT_TITLE}>
            <Text>
                <div dangerouslySetInnerHTML={getHtml()}/>
            </Text>
        </BaseLayout>
    );
}
