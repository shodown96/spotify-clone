import { PlusIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowRight, Book, ChevronDown, Plus, Search } from 'react-feather'
import { AppState } from '../interfaces/main'
import { ListOfUsersPlaylistsResponse, PlaylistObjectSimplified, SavedAlbumObject, UsersSavedAlbumsResponse } from '../interfaces/spotify'
import { formatArtists } from '../utilities/common'
import { config } from '../utilities/config'
import { getState } from '../utilities/storage'
import LibraryItem from './LibraryItem'

const Library = () => {
    const state: AppState = getState()
    // const [items, setItems] = useState<PlaylistObjectSimplified | SavedAlbumObject>()
    // useEffect(()=> {
    //     if(state.playlists?.items){
    //         setItems([
    //             ...state.playlists?.items,
    //             ...state.saved_albums?.items,
    //         ])
    //     }
    //     if(state.saved_albums?.items){
    //         setItems([
    //             ...items,
    //             ...state.saved_albums?.items,
    //         ])
    //     }
    // },[])
    return (
        <div className='bg-default z-40 rounded text-white py-4'>
            <div className='pb-2 mb-4 shadow-2xl px-4 text-default-lighter'>
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex gap-2 cursor-pointer hover:text-white'><Book /> Your Library</div>
                    <div className='flex gap-2'>
                        <Plus className='p-2 hover:bg-default-dark h-10 w-10 rounded-full cursor-pointer hover:text-white' />
                        <ArrowRight className='p-2 hover:bg-default-dark h-10 w-10 rounded-full cursor-pointer hover:text-white' />
                    </div>
                </div>

                <div className='flex gap-2 mb-4'>
                    {config.PRIMARY_TABS.map(tab => (
                        <span
                            key={tab.replace(" ", "")}
                            style={{ maxWidth: "100px" }}
                            className='text-sm p-1 px-3 rounded-full bg-default-light text-white'>
                            {tab}
                        </span>
                    ))}
                </div>
            </div>

            <div className='overflow-auto px-2  pb-24' style={{ height: "calc(100vh - 290px)" }}>
                <div className='flex justify-between mb-2 text-default-lighter'>
                    <div><Search className='h-5 w-5  cursor-pointer hover:text-white' /></div>
                    <div className='flex items-end cursor-pointer hover:text-white'>Recent <ChevronDown height={20} /></div>
                </div>
                {state?.playlists?.items.map(playlist => (
                    <LibraryItem
                        key={playlist.id}
                        id={playlist.id}
                        type={playlist.type}
                        src={playlist.images[0]?.url || ""}
                        text1={playlist.name}
                        text2={`${playlist.type} · ${playlist.owner.display_name}`}
                    />
                ))}
                {state?.saved_albums?.items.map(playlist => (

                    <LibraryItem
                        key={playlist.album.id}
                        id={playlist.album.id}
                        type={playlist.album.type}
                        src={playlist.album.images[0]?.url || ""}
                        text1={playlist.album.name}
                        text2={`Album · ${formatArtists(playlist.album.artists)}`}
                    />
                ))}
            </div>

        </div>
    )
}

export default Library