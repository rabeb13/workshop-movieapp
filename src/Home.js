import React from "react";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import MovieDesc from "./Components/MovieDescription/MovieDesc";
import NavBar from "./NavBar";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/movie/:id' element={<MovieDesc />} />
			</Routes>
		</div>
	);
};

export default Home;