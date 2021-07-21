import React from "react";
import Album from "../components/Album";
import Artist from "../components/Artist";
import SongRow from "../components/SongRow";
import { useStateValue } from "../context_api/StateProvider";

function Search() {
  const [{ search_results, query, spotify }, dispatch] = useStateValue();
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


  const renderHelpText = () => {
    if (query === "" || query === null) {
      return <h1>Search for something</h1>;
    } else if ( search_results &&
      (search_results.albums?.length +
        search_results.artists?.length +
        search_results.tracks?.length) <=
      0
    ) {
      return (
        <>
          <h3>No results found for "{query}"</h3>
          <p>
            Please make sure your words are spelled correctly or use less or
            different keywords.
          </p>
        </>
      );
    }
  };
  return (
    <div>
      {renderHelpText()}

          {search_results.tracks?.items?.length > 0 && (
          <>
            <h3>Tracks</h3>
            <div className="tracks">
            {search_results?.tracks?.items.slice(0,3).map((item) => (
                <SongRow playSong={playSong} track={item} />
              ))}
            </div>
          </>
        )}

        {search_results.artists?.items?.length > 0 && (
          <>
            <h3>Artists</h3>
            <div className="artists">
            {search_results.artists.items.slice(0, 6).map((artist) => (
              <Artist artist={artist} />
            ))}
            </div>
          </>
        )}
      <br />
        {search_results.albums?.items?.length > 0 && (
          <>
            <h3>Album</h3>
            <div className="albums">
            {search_results.albums.items.slice(0, 6).map((album) => (
              <Album album={album} />
            ))}
            </div>
          </>
        )}
      <br />
    </div>
  );
}

export default Search;
