import BaseLayout from "@/_base_layout/BaseLayout";
import Text from "@/app/components/text/text";
import { Metadata } from "next";
import { DEFAULT_TITLE } from "@/app/config";

export const metadata: Metadata = {
    title: "Top 5 | Taazy",
};

export default async function Top5() {
    return (
        <BaseLayout title={metadata.title?.toString() || DEFAULT_TITLE}>
            <Text>
                <center>
                    <p>Strona w budowie</p>
                </center>
            </Text>
        </BaseLayout>
    );
}
