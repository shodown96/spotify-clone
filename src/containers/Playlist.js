import React, {useEffect, useState} from 'react'
import SongRow from '../components/SongRow'
import { useStateValue } from '../context_api/StateProvider'

function Playlist(props) {
    const playlist_id = props.match.params.id
    const [playlist, setPlaylist] = useState(null)
    const [{spotify}, dispatch] = useStateValue()
    
    useEffect(() => {
      spotify.getAlbum(playlist_id, {market:"US"}).then(r => setPlaylist(r));
    }, [spotify])

    const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return (
        <div>
            <h3>Track</h3>
            <div className="tracks">
            {playlist?.tracks?.items.map((item, i) => (
          <SongRow playSong={playSong} track={item} key={i}/>
        ))}
            </div>
        </div>
    )
}

export default Playlist
