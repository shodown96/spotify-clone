import React, { useContext, useEffect, useState } from 'react';
import { Category } from '../components';
import { Layout } from '../containers';
import {
    SearchedAlbums,
    SearchedAll,
    SearchedArtists,
    SearchedPlaylists,
    SearchedSongs
} from '../containers/search';
import { AppContext } from '../context';
import { AppContextType } from '../interfaces/main';
import { CategoryObject } from '../interfaces/spotify';
import { config, SEARCH_TABS } from '../utilities/config';
import { spotify } from '../utilities/spotify';
import { setState } from '../utilities/storage';

function Search() {
    const { user, searching, searchResults } = useContext(AppContext) as AppContextType
    const [cats, setCats] = useState<CategoryObject[]>([])
    const [selected, setSelected] = useState("All")


    useEffect(() => {
        if (user) {
            spotify.setAccessToken(user.token)
            spotify.getCategories()
                .then(categories => {
                    setState({
                        categories
                    })
                    setCats(categories.categories.items)
                })
        }
    }, []);

    return (
        <Layout>

            <div className={`${searching ? 'block' : 'hidden'}`}>
                <div className='flex gap-4 mb-4'>
                    {config.SEARCH_TABS.map(tab => (
                        <span
                            key={tab.replace(" ", "")}
                            onClick={() => setSelected(tab)}
                            style={{ maxWidth: "100px" }}
                            className={`text-sm p-2 px-4 rounded-full cursor-pointer 
                            ${selected === tab ? 'bg-white text-black' : 'bg-default-light text-white hover:bg-opacity-40'}`}>
                            {tab}
                        </span>
                    ))}
                </div>

                <div className={`${searchResults ? 'block' : 'hidden'}`}>
                    {selected === SEARCH_TABS.All && (
                        <SearchedAll searchResults={searchResults} />)}

                    {selected === SEARCH_TABS.Songs && (
                        <SearchedSongs searchResults={searchResults} />)}

                    {selected === SEARCH_TABS.Artists &&
                        (<SearchedArtists searchResults={searchResults} />)}

                    {selected === SEARCH_TABS.Albums &&
                        (<SearchedAlbums searchResults={searchResults} />)}

                    {selected === SEARCH_TABS.Playlists &&
                        (<SearchedPlaylists searchResults={searchResults} />)}
                </div>
            </div>

            <div className={`${searching ? 'hidden' : 'block'}`}>
                <div className='font-bold text-2xl mb-4'>Browse all </div>

                <div className="flex gap-5 flex-wrap">
                    {cats.map(category => (
                        <Category
                            id={category.id}
                            key={category.id}
                            name={category.name}
                            icon={category.icons[0].url} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Search