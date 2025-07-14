export enum Routes {
    Socials = '/',
    AboutMe = '/o-mnie',
    StreamSchedule = '/harmonogram',
    Wideo = '/wideo',
}

export function getAllRoutes(): string[] {
    return Object.values(Routes);
}
