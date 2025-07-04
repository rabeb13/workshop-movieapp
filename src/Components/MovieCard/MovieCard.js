import React from 'react'
import './MovieCard.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MovieCard = ({movie}) => {
return (
    <div className='movie-card'>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterUrl} /><Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.rate}</Card.Text>

        <Link to={`/movie/${movie.id}`} state={movie}>
						<Button variant='primary'>Description</Button>
					</Link>   
     </Card.Body>
    </Card>
    </div>
  );
}


export default MovieCard
