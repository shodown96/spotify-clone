import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context'
import { AppContextType, AppState } from '../interfaces/main'
import { config } from '../utilities/config'
import { accessUrl, getTokenFromResponse, spotify } from '../utilities/spotify'
import { getState, setState } from '../utilities/storage'

function Login() {
    const router = useRouter()

    const { user, setUser, item } = useContext(AppContext) as AppContextType

    useEffect(() => {
        const hash = getTokenFromResponse();
        // window.location.hash = "";
        const state: AppState = getState()
        let _token: string;
        console.log(state)
        if (state.token) {
            _token = state.token
        } else {
            _token = hash.access_token;
        }

        if (_token) {
            spotify.setAccessToken(_token);

            if (!user) {
                spotify.getMe().then((user) => {
                    setState({ token: _token })
                    setUser({
                        ...user,
                        token: _token
                    });

                }).catch(e => {
                    console.log("token-undefined",e)
                    setState({
                        token: undefined
                    })
                })
            }

            spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
                setState({
                    discover_weekly: response,
                })
            );

            spotify.getMyTopArtists().then((response) =>
                setState({
                    top_artists: response,
                })
            );

            spotify.getUserPlaylists().then((playlists) => {
                setState({
                    playlists,
                });
            });

            spotify.getFeaturedPlaylists().then((featured_playlists) => {
                setState({
                    featured_playlists,
                });
            });

            spotify.getNewReleases().then((new_releases) => {
                setState({
                    new_releases,
                });
            });

            spotify.getMySavedAlbums().then((albums) => {
                setState({
                    saved_albums: albums,
                });
            })



        }
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        if (user?.token) {
            router.push(config.PATHS.Home)
        }
    }, [user])
    return (
        <div className='flex flex-col justify-center items-center pt-10 absolute h-screen w-screen z-50'>
            <div className="mb-10">
                <img
                    src={config.IMAGES.Brand}
                    alt=""
                />
            </div>
            <div className='bottom-20 absolute md:relative'>
                <button onClick={() => router.push(accessUrl)} className="p-4 cursor-pointer font-bold rounded-full bg-primary text-white">
                    LOG IN TO SPOTIFY
                </button>
            </div>
        </div>
    )
}

export default Login