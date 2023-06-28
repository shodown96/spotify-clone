import React, { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';
import { Footer, Library, Navbar, SideTopNav } from '../components';
import { AppContext } from '../context';
import { AppContextType } from '../interfaces/main';
import { config } from '../utilities/config';
import { spotify } from '../utilities/spotify'
import { getState } from '../utilities/storage';


// install react-spotify-player


export default function Layout({ children }: any) {

  const { user, item, isPlaying, setIsplaying, searching } = useContext(AppContext) as AppContextType
  const router = useRouter()

  const keyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.code);
    if (event.code === "Space" && !searching) {
      if (isPlaying) {
        spotify.pause()
        setIsplaying(false)
      } else {
        spotify.play()
        setIsplaying(true)
      }
    }
  };


  useEffect(() => {
    if (!user?.token) {
      router.push(config.PATHS.Login)
    } else {

    }
  }, [router.isReady])


  return (
    <div onKeyDown={keyDownEvent} tabIndex={0} className="overflow-x-hidden">
      {user && <div className='w-full pt-2 pb-24 h-screen overflow-hidden'>
        <div className='flex'>
          {/* sidebar */}
          <div className='overflow-hidden h-screen sidebar'>
            <SideTopNav />
            <Library />
          </div>

          {/* content */}
          <div className='w-full overflow-hidden'>
            <div className='bg-default z-40 overflow-auto rounded ml-2 w-full h-screen'>
              <Navbar item={item} />

              {/* Body */}
              <div className='p-5 pb-36 bg-gradient-blue'>
                {children}
              </div>
              {/* End body */}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>}
    </div>
  );
}


