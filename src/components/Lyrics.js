import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import SpinnerLoading from './Spinner';
import { Button, Card, ListGroup } from 'react-bootstrap';

const Lyrics = ({ match }) => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  const getData = async () => {
    await axios
      .get(
        `/track.lyrics.get?track_id=${match.params.id}
      &apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        setLyrics(res.data.message.body.lyrics);

        return axios.get(
          `/track.get?track_id=${match.params.id}
        &apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then((res) => {
        setTrack(res.data.message.body.track);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      {track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0 ? (
        <SpinnerLoading />
      ) : (
        <Fragment>
          <Link to="/">
            <Button className="mb-4" variant="outline-info" size="sm">
              Go Back
            </Button>
          </Link>
          <Card>
            <Card.Header as="h5">
              {track.track_name} by:{' '}
              <span className="text-secondary">{track.artist_name}</span>
            </Card.Header>
            <Card.Body>
              <Card.Text>{lyrics.lyrics_body}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Album ID</strong> : {track.album_id}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  as="a"
                  href={track.track_share_url}
                  target="_blank"
                  variant="white"
                  className="text-left"
                >
                  <p className="text-primary">
                    <strong className="text-dark mr-2">URL :</strong>
                    {track.track_share_url}
                  </p>
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Explicit Words : </strong>
                {track.explicit === 0 ? 'NO' : 'YES'}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Release Date : </strong>
                <Moment format="DD.MM.YYYY">{track.updated_time}</Moment>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Fragment>
      )}
    </div>
  );
};

export default Lyrics;
