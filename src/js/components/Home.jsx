import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [peliculas, setPeliculas] = useState([])
	const [hover, setHover] = useState(null)


	return (
		<div className="bg-dark padre">
			<h1 className="titulo">Guarda tus películas favoritas</h1>
			<div className="input-group input-group-sm mb-3 inputStyle">
				<input id="input" type="text" className="form-control" aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-sm" onChange={e => setInputValue(e.target.value)}
					value={inputValue} onKeyDown={e => {
						if (e.key === "Enter") {
							setPeliculas([...peliculas, inputValue])
							setInputValue("")

						}
					}
					}
				/>

			</div>
			<ul>
				{
					peliculas.map((pelicula, index) => (
						<li
							key={index}
							className="text-white fs-1 fw-bold hover-effect"
							onMouseEnter={() => setHover(index)}
							onMouseLeave={() => setHover(null)}
							style={{
								backgroundColor: hover === index ? "#444" : "#222",
								transition: "0.3s",
								listStyle: "none"
							}}
						>
							{pelicula}
						</li>
					))
				}
			</ul>

		</div>

	);
};

export default Home;