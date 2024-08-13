import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { services } from "@/services/services";
import { getAllRoutes } from "@/app/routes";

export async function POST(request: NextRequest) {
    const secret = request.headers.get("Secret");

    if (secret !== process.env.REVALIDATE_CACHE_SECRET) {
        return new NextResponse("Unauthorized", {
            status: 401,
        });
    }

    const body = await request.json();

    let pages: string[] = [];

    switch (body.sys.type) {
        case "Entry":
            pages = services.contentful.contentTypeToRoutes(body.sys.contentType.sys.id);
            break;
        default:
            pages = getAllRoutes();
    }

    for (const page of pages) {
        await revalidatePath(page);
    }

    return new NextResponse(JSON.stringify({ revalidated: true }), {
        status: 200,
    });
}