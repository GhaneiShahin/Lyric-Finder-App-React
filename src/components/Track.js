import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaPlay, FaCompactDisc, FaCaretRight } from 'react-icons/fa';

const Track = ({ track }) => {
  return (
    <div className="col-md-6">
      <Card className="mb-4">
        {/* <Card.Header as="h5">Featured</Card.Header> */}
        <Card.Body>
          <Card.Title>{track.artist_name}</Card.Title>
          <Card.Text>
            <strong>
              <FaPlay className="text-secondary mr-1 mb-1" />
              Track
            </strong>
            : {track.track_name}
          </Card.Text>
          <Card.Text>
            <strong>
              <FaCompactDisc className="text-secondary mr-1 mb-1" />
              Album
            </strong>
            : {track.album_name}
          </Card.Text>
          <Link to={`lyrics/track/${track.track_id}`} className="text-light">
            <Button variant="dark" block>
              <FaCaretRight className="mb-1" style={{ fontSize: '25px' }} />
              View Lyrics
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Track;
