import React, { useEffect, useState } from 'react';

type Track = {
  album_art: string;
  album_name: string;
  artist_name: string;
  track_name: string;
};

type Empty = {};

const hasTrack = (t: Track | Empty): t is Track =>
  t.hasOwnProperty('album_art');

export const CurrentlyListening: React.FC = () => {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    fetch('https://jaketaylor.co/api/track')
      .then((res) => res.json())
      .then((res: Track | Empty) => {
        if (hasTrack(res)) {
          setTrack(res);
        }
      });
  }, []);

  return (
    <>
      {track ? (
        <div className="hidden md:block p-4 text-gray-300 absolute bottom-0 w-full">
          <p className="text-sm mb-1 font-semibold">
            I'm currently listening to
          </p>
          <div className="flex flex-col">
            <img
              src={track.album_art}
              alt={track.album_name}
              className="w-16 h-16 mb-2"
            />

            <div className="leading-none flex flex-col space-y-1 justify-center">
              <p className="font-semibold">{track.track_name}</p>
              <p>{track.artist_name}</p>
              <p className="italic">{track.album_name}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
