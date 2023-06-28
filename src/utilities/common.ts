import { ArtistObjectSimplified } from "../interfaces/spotify";
import { COLORS, config } from "./config";

export const getGreeting = () => {
    const time = new Date().getHours();

    if (time < 12) {
        return "Good morning"
    }
    if (time >= 12 && time < 16) {
        return "Good afternoon"
    }
    if (time >= 16) {
        return "Good evening"
    }
}


function getRandomInt(max: number = 5) {
    return Math.floor(Math.random() * max);
}

export const getRandomColors = () => {
    const i: string = `${getRandomInt()}`
    return COLORS[`${i}`]
}

export const getMinutes = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.round((millis % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export const formatArtists = (artists: ArtistObjectSimplified[] | undefined, limit?: boolean) => {
    if (!artists) {
        return ""
    }
    const formatted = artists.map((artist: any) => artist.name).join(", ")
    if (limit) {
        return getLimitedText(formatted)
    }
    return formatted
}

export const getLimitedText = (text: string = "") => {
    if (!text) {
        return ""
    }
    return (text.length > 25 ? `${text.slice(0, 25)}...` : text)
};
