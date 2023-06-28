import React, { useContext } from 'react'
import { Thumbnail } from '../components';
import { Layout } from '../containers';
import { AppContext } from '../context';
import { AppContextType, AppState } from '../interfaces/main';
import { getGreeting } from '../utilities/common';
import { getState } from '../utilities/storage';

function Home() {
  const { user, setUser, item } = useContext(AppContext) as AppContextType
  const state: AppState = getState()

  return (
    <Layout>
      <div className='font-bold text-2xl mb-10'>{getGreeting()} </div>
      {/* made for shodown */}
      <div className='font-bold text-2xl mb-4'>{state?.featured_playlists?.message} </div>
      <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
        {state?.featured_playlists?.playlists.items.slice(0, 4).map(pl => (
          <Thumbnail
            key={pl.id}
            src={pl.images[0]?.url}
            id={pl.id}
            type={pl.type}
            text1={pl.name} />
        ))}
      </div>

      {/* Your playlists */}

      <div className='font-bold text-2xl mb-4'>Your playlists </div>
      <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
        {state?.playlists?.items.slice(0, 4).map(pl => (
          <Thumbnail
            key={pl.id}
            id={pl.id}
            type={pl.type}
            src={pl.images[0].url}
            text1={pl.name}
            text2={`By ${pl.owner.display_name}`} />
        ))}
      </div>


      <div className='font-bold text-2xl mb-4'>Popular new Releases </div>
      <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
        {state?.new_releases?.albums.items.slice(0, 4).map(pl => (
          <Thumbnail
            key={pl.id}
            id={pl.id}
            type={pl.type}
            src={pl.images[0].url}
            text1={pl.name}
            text2={pl.artists && pl.artists[0]?.name} />
        ))}
      </div>
    </Layout>
  )
}

export default Home