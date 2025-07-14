import BaseLayout from "@/_base_layout/BaseLayout";
import { Metadata } from "next";
import { DEFAULT_TITLE } from "@/app/config";
import { services } from "@/services/services";
import Top5Clips from "@/app/components/top-5-clips/top5-clips";

export const metadata: Metadata = {
    title: "Wideo | Taazy",
};

export default async function Top5() {
    const items = await services.contentful.getTop5();

    return (
        <BaseLayout title={metadata.title?.toString() || DEFAULT_TITLE}>
            <Top5Clips items={items}/>
        </BaseLayout>
    );
}
