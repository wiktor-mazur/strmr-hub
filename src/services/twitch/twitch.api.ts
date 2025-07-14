async function getToken() {
    const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&grant_type=client_credentials&client_secret=${process.env.TWITCH_CLIENT_SECRET}`, {
        method: 'POST',
    });

    if (!res.ok) {
        return null;
    }

    const data = await res.json();

    return data.access_token || null;
}

export async function getTwitchStream() {
    try {
        const token = await getToken();

        const res = await fetch(`https://api.twitch.tv/helix/streams?user_id=${process.env.TWITCH_BROADCASTER_ID}`, {
            method: "GET",
            headers: {
                'Client-Id': process.env.TWITCH_CLIENT_ID || '',
                Authorization: `Bearer ${token}`,
            }
        });

        if (!res.ok) {
            return null;
        }

        const jsonData: any = await res.json();

        const liveStreams = (jsonData?.data || []).filter((v: any) => v.type === 'live');

        if (!liveStreams || !liveStreams.length) {
            return null;
        }

        const liveStream = liveStreams[0];

        return {
            title: liveStream.title,
            gameName: liveStream.game_name
        }
    } catch {
        return null;
    }
}


export async function getFollowersCount(): Promise<number | null> {
   try {
       const token = await getToken();

       const res = await fetch(`https://api.twitch.tv/helix/channels/followers?broadcaster_id=${process.env.TWITCH_BROADCASTER_ID}`, {
           method: "GET",
           headers: {
               'Client-Id': process.env.TWITCH_CLIENT_ID || '',
               Authorization: `Bearer ${token}`,
           }
       });

       if (!res.ok) {
           return null;
       }

       const jsonData = await res.json();

       if ((jsonData.status && jsonData.status !== 200) || !jsonData.total) {
           return null;
       }

       return jsonData.total;
   } catch {
       return null;
   }
}
