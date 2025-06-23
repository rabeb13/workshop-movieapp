import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../../data";
import { Button, Col, Container, Row } from "react-bootstrap";

const MovieDesc = () => {
	const navigate = useNavigate();

	/********************* Method with useParams ***************/
	const params = useParams();
	const [movie, setmovie] = useState({});

	useEffect(() => {
		setmovie(moviesData.find((movie) => movie.id === +params.id));
	}, [params.id]);
	return (
		<div>
			<Container>
				<Row>
					<Col sm={8}>
						<div style={{ marginTop: "100px", width: "360px" }}>
							<h1>Description of: {movie.title}</h1>
							{movie.description}
						</div>
					</Col>
					<Col sm={4}>
						<iframe
							title='this is a unique title key'
							style={{
								paddingRight: "350px",
								marginTop: "100px",
								width: "760px",
								height: "300px",
							}}
							src={movie.trailer}
						/>
					</Col>
				</Row>
			</Container>
			{/* navigate(-1) => history go back  */}
			<Button
				variant='secondary'
				onClick={() => navigate(-1)}
				style={{ marginLeft: "30%" }}>
				Go Back
			</Button>
			<div style={{ marginTop: "100px" }}></div>
		</div>
	);
};

export default MovieDesc;