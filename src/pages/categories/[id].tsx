import { Thumbnail } from '@/src/components';
import { AppContext } from '@/src/context';
import { AppContextType } from '@/src/interfaces/main';
import { PagingObject, PlaylistObjectSimplified } from '@/src/interfaces/spotify';
import { config } from '@/src/utilities/config';
import { spotify } from '@/src/utilities/spotify';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Layout } from '../../containers';

function Category() {
    const router = useRouter();
    const [playlists, setPlaylists] = useState<PagingObject<PlaylistObjectSimplified> | null>(null);
    const [id, setId] = useState("");
    const { background } = useContext(AppContext) as AppContextType

    const { query, isReady } = router

    useEffect(() => {
        if (router.isReady) {
            const playlistID = `${query.id}`;
            setId(playlistID)
            spotify.getCategoryPlaylists(playlistID)
                .then(r => {
                    setPlaylists(r.playlists)
                })
        }
    }, []);

    const routeToPlaylist = (id: string) => {
        router.push(`${config.PATHS.Playlists}/${id}`)
    }

    return (
        <Layout>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
                {playlists?.items.slice(0, 12).map(pl => (
                    <Thumbnail
                        key={pl.id}
                        id={pl.id}
                        type={config.OBJECT_TYPES.Playlist}
                        src={pl.images[0]?.url}
                        text1={pl.name}
                        onClick={() => routeToPlaylist(pl.id)} />
                ))}
            </div>

        </Layout>
    )
}

export default Category