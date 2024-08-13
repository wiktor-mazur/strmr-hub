export enum Routes {
    Socials = '/',
    AboutMe = '/o-mnie',
    StreamSchedule = '/harmonogram',
    Top5 = '/top5',
}

export function getAllRoutes(): string[] {
    return Object.values(Routes);
}
