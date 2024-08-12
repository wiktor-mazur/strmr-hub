import BaseLayout from "@/_base_layout/BaseLayout";
import Text from "@/app/components/text/text";
import { services } from "@/services/services";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default async function AboutMe() {
    const document = await services.contentful.getAboutMe();
    const html: string = document ? documentToHtmlString(document) : "Wystąpił błąd. Nie udało się pobrać zawartości strony.";

    const getHtml = () => {
        return {
            __html: html
        }
    }

    return (
        <BaseLayout>
            <Text>
                <div dangerouslySetInnerHTML={getHtml()}/>
            </Text>
        </BaseLayout>
    );
}
