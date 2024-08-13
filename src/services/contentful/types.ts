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
    url: string;
    icon: string;
    iconHover: string;
    order: number;
}

export interface Top5Item {
    title: string;
    order: number;
    url: string;
    author: string | null;
}
