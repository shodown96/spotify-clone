import React, { useContext, useEffect, useState } from 'react'

import {
    DevicePhoneMobileIcon,
    HeartIcon, MicrophoneIcon, QueueListIcon, SpeakerWaveIcon,
} from '@heroicons/react/20/solid'
import { FastForward, Maximize, Maximize2, PauseCircle, Play, PlayCircle, Repeat, Rewind, Shuffle } from 'react-feather'
import { LocalStorage } from '../utilities/storage'
import { spotify } from '../utilities/spotify'
import { AppContext } from '../context'
import { AppContextType, AppState } from '../interfaces/main'
import { formatArtists } from '../utilities/common'

function Footer() {
    const storage = new LocalStorage()
    const state: AppState = storage.getItem("state")
    const setState = (data: any) => {
        const current = storage.getItem("state")
        storage.setItem("state", {
            ...current,
            ...data
        })
    }

    const { user, setUser, item, setItem, isPlaying, setIsplaying } = useContext(AppContext) as AppContextType


    const handlePlayPause = () => {
        if (isPlaying) {
            spotify.pause()
                .then(() => setState({ playing: false }))
                .catch(() => setState({ playing: true }));

        } else {
            spotify.play()
                .then(() => setState({ playing: true }))
                .catch(() => setState({ playing: false }));

        }
    };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r: any) => {
            setState({
                item: r.item,

            });
            setItem(r.item)
        });
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r: any) => {
            setState({
                item: r.item,
            });
            setItem(r.item)
        });
    };

    const getPlayback = () => {
        if (user) {
            spotify.setAccessToken(user.token)
        } else { return }
        spotify.getMyCurrentPlaybackState().then((r: any) => {
            if (r !== "") {
                setState({
                    playing: r.is_playing,
                    item: r.item,
                });
                setItem(r.item)
            } else {
                if (state?.item) {
                    setItem(state.item)
                }
                console.log("The developer isn't working with a PREMIUM ACCOUNT.")
            }

        });
    }


    useEffect(() => {
        let timer1 = setInterval(() => {
            getPlayback()
        }, 1000)
        return () => {
            clearInterval(timer1);
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (item) {
            setIsplaying(true)
        } else {
            setIsplaying(false)
        }
    }, []);


    return (
        <div className={`flex bg-black items-center justify-between absolute 
        bottom-0 h-24 px-5 text-white text-xs z-50 w-full`}>
            {/* Song */}
            <div className='flex items-center gap-4 song-area'>
                <img
                    className='w-16 h-16'
                    src={item?.album.images[0].url}
                    alt={item ? item.name : ""} />
                {item ? (
                    <div className="footer__songInfo">
                        <h4 className='text-sm'>{item.name}</h4>
                        <p>{formatArtists(item.artists)}</p>
                    </div>
                ) : (
                    <div className="footer__songInfo">
                        <h4 className='text-sm'>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
                <div>
                    <HeartIcon className={`w-5 h-5 ${'text-primary'}`} />
                </div>
            </div>

            {/* Player */}
            <div className='flex flex-col items-center justify-center '>
                <div className='flex gap-4 justify-center items-center w-full'>
                    <Shuffle className='cursor-pointer hover:text-primary' />

                    <Rewind onClick={skipPrevious} fill='white' className='cursor-pointer hover:text-primary hover:fill-primary' />

                    {state.playing ? <PauseCircle onClick={handlePlayPause} className='fill-white p-2 cursor-pointer text-black h-14 w-14 hover:fill-primary' /> :
                        <Play onClick={handlePlayPause} className='text-black fill-black rounded-full bg-white p-1 pl-2 cursor-pointer  h-8 w-8 hover:bg-primary' />}

                    <FastForward onClick={skipNext} fill='white' className='cursor-pointer hover:text-primary hover:fill-primary' />

                    <Repeat className='cursor-pointer hover:text-primary' />
                </div>
                <div className="range w-full">
                    <input type="range" name="" id="" style={{ minWidth: "500px" }}
                        className='w-full h-1 bg-white appearance-none' />
                </div>
            </div>

            {/* volume */}
            <div className='flex items-center gap-4 text-white'>
                <div className='flex gap-4 items-center'>
                    <MicrophoneIcon className='h-5 w-5' />
                    <QueueListIcon className='h-5 w-5' />
                    <DevicePhoneMobileIcon className='h-5 w-5' />
                    <SpeakerWaveIcon className='h-5 w-5' />
                </div>
                <div className="range w-full -mt-1">
                    <input type="range" name="" id="" className='w-full h-1 bg-white appearance-none' />
                </div>

                <Maximize2 className='h-10 w-10' />

            </div>

        </div>
    )
}

export default Footer