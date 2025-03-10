import React from "react";

//include images into your bundle
import Header from './header';
import Card from './card';
import Navbar from "./navbar";


const Home = () => {
	const arrobj = [
		{
			id: 1,
			title: "Card1",
			color: "black",
			Image: "src/img/rigo-baby.jpg",
		},
		{
			id: 2,
			title: "Card2",
			color: "yellow",
			Image: "src/img/rigo-baby.jpg",
		},
		{
			id: 3,
			title: "Card3",
			color: "red",
			Image: "src/img/rigo-baby.jpg",
		},
		{
			id: 4,
			title: "Card4",
			color: "blue",
			Image: "src/img/rigo-baby.jpg",
		}
	]

	return (
		<div>

			<Navbar />

			<Header />


			<div className='container'>
				<div className="row">
					{
						arrobj.map(item => (<Card key={item.id} title={item.title} image={item.image} color={item.color} />))
					}
				</div>
			</div>

		</div>
	);
};

export default Home;