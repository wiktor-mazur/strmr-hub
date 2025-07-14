export enum ContentType {
    Social= 'social',
    AboutMe = 'aboutMe',
    StreamSchedule = 'streamSchedule',
    Top5 = 'top5',
}

export interface Social {
    socialName: string;
    title: string;
    subtitle: string;
    description: string;
    category?: string;
    url: string;
    icon: string;
    iconHover: string;
    order: number;
    live: boolean | null;
}

export interface Top5Item {
    title: string;
    order: number;
    url: string;
    author: string | null;
}
