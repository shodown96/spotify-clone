import {
    CurrentUsersProfileResponse,
    ListOfFeaturedPlaylistsResponse,
    ListOfNewReleasesResponse,
    ListOfUsersPlaylistsResponse,
    MultipleCategoriesResponse,
    SearchResponse,
    SinglePlaylistResponse,
    TrackObjectFull,
    UsersSavedAlbumsResponse
} from "./spotify"

export type ComponentWithChildrenType = {
    children: React.ReactNode | React.ReactNode[]
}

export interface AppState {
    user: User | null,
    playlists: ListOfUsersPlaylistsResponse | null,
    spotify?: any,
    discover_weekly: SinglePlaylistResponse | null,
    top_artists: any,
    playing: boolean,
    item: CustomItem | null,
    saved_albums: UsersSavedAlbumsResponse | null,
    featured_playlists: ListOfFeaturedPlaylistsResponse | null,
    new_releases: ListOfNewReleasesResponse | null,
    categories: MultipleCategoriesResponse | null,
    liked_tracks: any,
    search_results: any,
    query: string,
    token: string
}

export interface CustomItem extends TrackObjectFull {
    is_playing?: boolean
}

export type AppContextType = {
    item?: CustomItem,
    user?: User,
    setUser: (data: User) => void,
    setItem: (data: CustomItem) => void,
    isPlaying: boolean,
    setIsplaying: (param: boolean) => void,
    togglePlaying: () => void,
    background: string,
    setBackground: (param: string) => void
    title: string,
    setTitle: (param: string) => void
    searching: boolean,
    setSearching: (param: boolean) => void
    query: string,
    setQuery: (param: string) => void
    searchResults?: SearchResponse 
    playEntity: (id:string, type:string) => void
}


export interface User extends CurrentUsersProfileResponse {
    token: string,
}

export interface SearchContainerInterface {
    searchResults?: SearchResponse
}