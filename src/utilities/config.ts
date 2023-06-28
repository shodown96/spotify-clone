
export const SEARCH_TABS = {
    All: 'All',
    Songs: 'Songs',
    Artists: 'Artists',
    Albums: 'Albums',
    Playlists: 'Playlists',
}
export const config = {
    PRIMARY_TABS: [
        'Playlist',
        'Artists',
        'Albums',
        // 'Podcasts & Shows'
    ],
    SEARCH_TABS: [
        SEARCH_TABS.All,
        SEARCH_TABS.Songs,
        SEARCH_TABS.Artists,
        SEARCH_TABS.Albums,
        SEARCH_TABS.Playlists,
    ],

    PATHS: {
        Home: '/home',
        Search: '/search',
        Download: '/download',
        Categories: '/categories',
        Playlists: '/playlists',
        Albums: '/albums',
        Login: '/'
    },
    PAGES: {
        Home: 'home',
        Search: 'search',
        Login: ''
    },
    IMAGES: {
        Download: 'https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png',
        Icon: '',
        Brand: 'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
    },
    EXTERNAL_LINKS: {
        Download: 'https://www.spotify.com/download/'
    },
    OBJECT_TYPES: {
        Album: 'album',
        Playlist: 'playlist',
        Artist: 'artist',
        Track: 'track',
    }
}

export const COLORS: any = {
    "1": "bg-orange-600",
    "2": "bg-purple-600",
    "3": "bg-pink-600",
    "4": "bg-red-600",
    "5": "bg-gray-600"
}