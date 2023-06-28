import { Thumbnail } from '@/src/components';
import { AppContext } from '@/src/context';
import { AppContextType } from '@/src/interfaces/main';
import { PlaylistTrackResponse, SinglePlaylistResponse } from '@/src/interfaces/spotify';
import { formatArtists, getLimitedText, getMinutes } from '@/src/utilities/common';
import { spotify } from '@/src/utilities/spotify';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Clock } from 'react-feather';
import { Layout } from '../../containers';

function Playlist() {
    const router = useRouter();
    const [playlist, setPlaylist] = useState<SinglePlaylistResponse | null>(null);
    const [name, setName] = useState("");
    const { background, setTitle } = useContext(AppContext) as AppContextType

    const { query, isReady } = router

    useEffect(() => {
        if (router.isReady) {
            const playlistID = `${query.id}`;
            spotify.getPlaylist(playlistID)
                .then(r => {
                    setPlaylist(r)
                    setTitle(r.name)
                })
        }
    }, [query.id]);
    return (
        <Layout>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
                <div>
                    <h1 className='text-6xl font-bold'>{playlist?.name}</h1>
                    <h1 className='text-default-lighter text-sm'>
                        <span className='text-default-lighter text-sm capitalize'>{playlist?.type}</span> {" . "}
                        {playlist?.description}
                    </h1>

                    <h1> {playlist?.owner.images && <img src={playlist?.owner.images[0].url} alt="" />} {playlist?.owner.display_name} . {playlist?.tracks.total} Songs</h1>
                </div>
                <table className="table-auto w-full text-left border-spacing-10">
                    <thead className='border-b border-default-lighter border-opacity-25 border-spacing-y-60'>
                        <tr className='text-default-lighter'>
                            <th className='p-2'>#</th>
                            <th className='p-2'>Title</th>
                            <th className='p-2'>Album</th>
                            <th className='p-2'>Date Added</th>
                            <th className='p-2'><Clock height={18} /></th>
                        </tr>
                    </thead>
                    <tbody className='pt-10'>
                        {playlist?.tracks?.items.slice(0, 20).map((pl, i) => (

                            <tr key={pl.track.id} className="p-2 mb-10 hover:bg-default-light rounded-xl cursor-pointer">
                                <td className="p-2">{i + 1}</td>
                                <td style={{ maxWidth: "320px" }} className="p-2">
                                    <div className='flex items-center gap-2'>
                                        <img src={pl.track.album?.images[0].url || `/img/default-track.png`} alt="" className='w-10 h-10' />
                                        <div>
                                            <div>{getLimitedText(pl.track.name)}</div>
                                            <div className='text-default-lighter capitalize text-sm'>{formatArtists(pl.track.artists)}</div>

                                        </div>

                                    </div>
                                </td>
                                <td className='text-default-lighter p-2'>{getLimitedText(pl.track.album?.name)}</td>
                                <td className='text-default-lighter p-2'>{moment(pl.added_at).fromNow()}</td>
                                <td className='text-default-lighter p-2'>{getMinutes(pl.track.duration_ms)}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </Layout>
    )
}

export default Playlist