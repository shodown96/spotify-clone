import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import { config } from '../utilities/config';

interface props {
    src: string;
    id: string;
    type: string;
    text1: string;
    text2?: string;
}

function LibraryItem({ src, text1, text2, id, type }: props) {
    const router = useRouter()
    const routeToAlbumPlaylist = () => {
        if (type === config.OBJECT_TYPES.Album) {
            router.push(`${config.PATHS.Albums}/${id}`)
        } else if (type === config.OBJECT_TYPES.Playlist) {
            router.push(`${config.PATHS.Playlists}/${id}`)
        }
    }
    return (
        <div className='flex gap-2 items-center mb-1 cursor-pointer hover:bg-default-light p-2 rounded'
            onClick={routeToAlbumPlaylist}>
            <Image
                src={src}
                height={50}
                width={50}
                className="rounded"
                alt="" />
            <div>
                <div>{text1}</div>
                {text2 && <div className='capitalize text-default-lighter text-sm'>{text2}</div>}
            </div>
        </div>
    )
}

export default LibraryItem