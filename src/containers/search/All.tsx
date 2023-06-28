import { Thumbnail } from '@/src/components'
import { AppContext } from '@/src/context'
import { AppContextType, SearchContainerInterface } from '@/src/interfaces/main'
import { formatArtists, getLimitedText, getMinutes } from '@/src/utilities/common'
import { config } from '@/src/utilities/config'
import React, { useContext } from 'react'
import { Play } from 'react-feather'


function All(props: SearchContainerInterface) {
    const { playEntity, searchResults } = useContext(AppContext) as AppContextType
    const handlePlayPause = () => {
        playEntity(`${searchResults?.tracks?.items[0].id}`, config.OBJECT_TYPES.Track)
    };
    return (
        <div>
            <div className='flex md:flex-nowrap flex-wrap gap-10 mb-5'>
                {/* Top result */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold mb-5">Top result</h1>

                    <div className='p-5 rounded bg-default-light'>
                        <div>
                            <img
                                className='w-24 h-24 mb-2 shadow-md rounded'
                                src={searchResults?.tracks?.items[0].album.images[0]?.url || '/img/default-track.png'} alt="" />

                            <h1 className="text-2xl font-bold mb-5">{searchResults?.tracks?.items[0]?.name}</h1>

                            <div className="flex items-center gap-2">
                                <div className='text-sm text-default-lighter'>{formatArtists(searchResults?.tracks?.items[0]?.artists)}</div>
                                <div className='capitalize text-sm p-2 px-4 rounded-full font-medium bg-default-dark'>{searchResults?.tracks?.items[0]?.type.replace("track", "song")}</div>
                            </div>

                            <div className="flex justify-end -mt-8">
                                <Play onClick={handlePlayPause} className='text-black fill-black rounded-full bg-white p-2 pl-3 cursor-pointer  h-10 w-10 hover:bg-primary' />
                            </div>


                        </div>
                    </div>
                </div>

                {/* Songs */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold mb-5">Songs</h1>
                    {searchResults && searchResults.tracks?.items.slice(0, 5).map(song => (
                        <div className="flex justify-between" key={song.id}>
                            <div style={{ maxWidth: "320px" }} className="p-2">
                                <div className='flex items-center gap-2'>
                                    <img src={song.album.images[0]?.url || '/img/default-track.png'} alt="" className='w-10 h-10' />
                                    <div>
                                        <div>{getLimitedText(song.name)}</div>
                                        <div className='text-sm text-default-lighter'>{formatArtists(song.artists, true)}</div>
                                    </div>

                                </div>
                            </div>
                            <div className='text-default-lighter p-2'>{getMinutes(song.duration_ms)}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-5">
                <div className='font-bold text-2xl mb-4'>Albums </div>
                <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
                    {searchResults?.albums?.items.slice(0, 4).map(pl => (
                        <Thumbnail
                            key={pl.id}
                            id={pl.id}
                            type={pl.type}
                            src={pl.images[0].url}
                            text1={pl.name}
                            text2={pl.artists && pl.artists[0]?.name} />
                    ))}
                </div>
            </div>



            <div className="mb-5">
                <div className='font-bold text-2xl mb-4'>Artists </div>
                <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
                    {searchResults?.artists?.items.slice(0, 4).map(artist => (
                        <Thumbnail
                            key={artist.id}
                            id={artist.id}
                            type={artist.type}
                            src={artist.images[0]?.url}
                            text1={artist.name}
                            text2={artist.type} />
                    ))}
                </div>
            </div>



            <div className="mb-5">
                <div className='font-bold text-2xl mb-4'>Playlists </div>
                <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
                    {searchResults?.playlists?.items.slice(0, 4).map(pl => (
                        <Thumbnail
                            key={pl.id}
                            id={pl.id}
                            type={pl.type}
                            src={pl.images[0]?.url}
                            text1={pl.name}
                            text2={`By ${pl.owner.display_name}`} />
                    ))}
                </div>
            </div>



        </div>
    )
}

export default All