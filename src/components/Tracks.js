import React, { useContext, Fragment } from 'react';
import { GlobalContext } from '../context/globalState';
import SpinnerLoading from './Spinner';
import Track from './Track';

const Tracks = () => {
  const { trackList, heading } = useContext(GlobalContext);

  return (
    <div>
      {trackList === undefined || trackList.length === 0 ? (
        <SpinnerLoading />
      ) : (
        <Fragment>
          <h3 className="text-center mb-4">{heading}</h3>
          <div className="row">
            {trackList.map((item) => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Tracks;
