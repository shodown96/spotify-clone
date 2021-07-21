import React from 'react'
import Album from '../components/Album';
import Artist from '../components/Artist';
import { useStateValue } from "../context_api/StateProvider";

function Library() {

  const [{ saved_albums, top_artists }] = useStateValue();
    console.log(saved_albums)
    return (
        <div>
            <h1>Your Library</h1>

            <h3>Your Liked Albums</h3>
            <div className="albums">
            {saved_albums?.items?.slice(0, 10).map((album) => (
              <Album album={album.album} />
            ))}
            </div>

            <h3>Your Top Artists</h3>
            <div className="artists">
            {top_artists?.items?.slice(0, 4).map((artist) => (
              <Artist artist={artist} />
            ))}

            </div>
        </div>
    )
}

export default Library
