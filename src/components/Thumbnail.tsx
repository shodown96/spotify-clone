import { useRouter } from 'next/router';
import React from 'react'
import { getLimitedText } from '../utilities/common';
import { config } from '../utilities/config';

interface props {
    src: string;
    text1: string;
    text2?: string;
    onClick?: Function;
    id: string;
    type: string;
}
function Thumbnail({ src, text1, text2, type, id, onClick }: props) {
    const router = useRouter()
    const routeToAlbumPlaylist = () => {
        if (type === config.OBJECT_TYPES.Album) {
            router.push(`${config.PATHS.Albums}/${id}`)
        } else if (type === config.OBJECT_TYPES.Playlist) {
            router.push(`${config.PATHS.Playlists}/${id}`)
        }
    }
    const handleClick = () => {
        if (onClick) {
            onClick()
        } else {
            routeToAlbumPlaylist()
        }
    }
    return (
        <div className='p-4 rounded-md bg-default-dark cursor-pointer' onClick={handleClick}>
            <img src={src || "/img/default-track.png"} alt="" className={`h-48 w-48 mb-4 
            ${type === config.OBJECT_TYPES.Artist ? 'rounded-full' : 'rounded-md'}`} />
            <div style={{ maxWidth: "190px" }}>
                <div className='mb-2'>{getLimitedText(text1)}</div>
                {text2 && <div className='text-default-lighter capitalize'>{text2}</div>}
            </div>
        </div>
    )
}

export default Thumbnail