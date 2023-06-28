import React from 'react'
import { AppContext } from '@/src/context';
import { AppContextType } from '@/src/interfaces/main';
import { SingleAlbumResponse } from '@/src/interfaces/spotify';
import { formatArtists, getMinutes } from '@/src/utilities/common';
import { spotify } from '@/src/utilities/spotify';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Layout } from '../../containers';
import { Clock } from 'react-feather';

function Playlist() {
    const router = useRouter();
    const [album, setAlbum] = useState<SingleAlbumResponse | null>(null);
    const [name, setName] = useState("");
    const { background, setTitle } = useContext(AppContext) as AppContextType

    const { query, isReady } = router

    useEffect(() => {
        if (router.isReady) {
            const albumID = `${query.id}`;
            spotify.getAlbum(albumID)
                .then(r => {
                    setAlbum(r)
                    setTitle(r.name)
                })
        }
    }, [query.id]);
    return (
        <Layout>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
                <div>
                    <h1 className='text-6xl font-bold'>{album?.name}</h1>
                    <h1 className='text-default-lighter text-sm capitalize'>
                        {album?.type}
                    </h1>

                    <h1> {formatArtists(album?.artists)} . {album?.tracks.total} Songs</h1>
                </div>
                <table className="table-auto w-full text-left border-spacing-10">
                    <thead className='border-b border-default-lighter border-opacity-25 border-spacing-y-60'>
                        <tr className='text-default-lighter'>
                            <th className='p-2'>#</th>
                            <th className='p-2'>Title</th>
                            <th className='p-2'><Clock height={18}/></th>
                        </tr>
                    </thead>
                    <tbody className='pt-10'>
                        {album?.tracks?.items.slice(0, 20).map((pl, i) => (

                            <tr key={pl.id} className="p-2 mb-10 hover:bg-default-light rounded-xl cursor-pointer">
                                <td className="p-2 w-10">{pl.track_number}</td>
                                <td className="p-2" style={{ maxWidth: "320px" }}>
                                    <div>{pl.name}</div>
                                    <div className='text-default-lighter capitalize text-sm'>{formatArtists(pl.artists)}</div>
                                </td>
                                <td className='text-default-lighter p-2'>{getMinutes(pl.duration_ms)}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </Layout>
    )
}

export default Playlist