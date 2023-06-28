// context/index.tsx

import React, { useState, createContext, useEffect } from 'react';
import { AppContextType, User, ComponentWithChildrenType, CustomItem } from '../interfaces/main';
import { SearchResponse } from '../interfaces/spotify';
import { COLORS } from '../utilities/config';
import { spotify } from '../utilities/spotify';

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: ComponentWithChildrenType) => {
    const [user, setUser] = useState<User | undefined>();
    const [item, setItem] = useState<CustomItem | undefined>();
    const [isPlaying, setIsplaying] = useState<boolean>(false);
    const [background, setBackground] = useState(COLORS['5']); // can change to bg-default-light
    const [title, setTitle] = useState("");
    const [searching, setSearching] = useState(false)

    const [query, setQuery] = useState("")
    const [previousQ, setPreviousQ] = useState("")
    const [searchResults, setSearchResults] = useState<SearchResponse>()

    const togglePlaying = () => {
        setIsplaying(!isPlaying)
    }


    const playEntity = (id: string, type: string) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
    };


    useEffect(() => {
        if (query.length > 0) {
            setSearching(true);
            // if (Math.abs(query.length - previousQ.length) > 2) {
                spotify.search(query, ["track", "album", "artist", "playlist"], { limit: 20 })
                    .then(r => {
                        console.log(r)
                        setSearchResults(r)
                    })
            // }
        } else {
            setSearchResults(undefined)
            setSearching(false);
        }
    }, [query])

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            item,
            setItem,
            isPlaying,
            setIsplaying,
            togglePlaying,
            background,
            setBackground,
            title,
            setTitle,
            searching,
            setSearching,
            query,
            setQuery,
            searchResults,
            playEntity,
        }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppProvider;