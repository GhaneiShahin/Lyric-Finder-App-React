import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/globalState';
import { Card, Form, Button } from 'react-bootstrap';
import { FaMusic } from 'react-icons/fa';

const Search = () => {
  const [trackTitle, setTrackTitle] = useState('');
  const [userInput, setUserInput] = useState('');
  const { setTrackList, setHeading } = useContext(GlobalContext);


 


  useEffect(() => {
    const searchRequest = async () => {
      await axios
      .get(
        `/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`      )
      .then((res) => {
        setTrackList(res.data.message.body.track_list);
        setHeading('Search Results');
        console.log(trackTitle)
      })
      .catch((err) => console.log(err));
    }

    searchRequest();
  }, [trackTitle]);

  const findTrack = async (e) => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  // const onChange = (e) => {
  //   setUserInput(e.target.value);
  // };

  return (
    <Card className="mb-5 shadow">
      <Card.Body className="text-center">
        <Card.Title>
          <h2>
            <FaMusic className="text-secondary" /> Search for a Music
          </h2>
        </Card.Title>
        <Card.Text>Get the lyrics for any song</Card.Text>
        <Form onSubmit={findTrack}>
          <Form.Control
            type="text"
            placeholder="Song title..."
            name="trackTitle"
            value={trackTitle}
            onChange={(e) =>setUserInput(e.target.value)}
          />
          <Button variant="outline-info mb-4 mt-3" type="submit" block>
            Get Track Lyrics
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Search;
