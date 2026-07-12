import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [compras, setCompras] = useState([])
	const [hover, setHover] = useState(null)


	return (
		<div className="padre">
			<h1 className="titulo">CREA TU LISTA DE LA COMPRA:</h1>
			<div className="input-group input-group-sm mb-3 inputStyle">
				<input id="input" type="text" className="form-control fs-1" aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-sm" placeholder="Añade a tu lista de la compra" onChange={e => setInputValue(e.target.value)}
					value={inputValue} onKeyDown={e => {
						if (e.key === "Enter") {
							if (inputValue === "") {
								alert("No se admite texto vacío")
							}
							else if (true) {
								setCompras([...compras, inputValue])
								setInputValue("")
							}

						}
					}
					}
				/>

			</div>
			<div className="bg-success">
				<h2>{TOTAL DE COMPRA: ${} }</h2>

			</div>
			<div className="contenedorLista">
				<ul>
					{
						compras.map((compra, index) => (
							<li
								key={index}
								className="text-white fs-1 fw-bold hover-effect d-flex justify-content-between align-items-center"
								onMouseEnter={() => setHover(index)}
								onMouseLeave={() => setHover(null)}
								style={{
									backgroundColor: hover === index ? "#444" : "",
									transition: "0.3s",
									listStyle: "none",
									padding: "10px 20px"
								}}
							>
								{compra}

								{hover === index && (
									<button
										style={{
											background: "transparent",
											border: "none",
											color: "red",
											fontSize: "30px",
											cursor: "pointer",
											marginLeft: "30px"
										}}
										onClick={() => {
											setCompras(compras.filter((_, i) => i !== index));
										}}
									>
										X
									</button>

								)}
							</li>
						))
					}
				</ul>
			</div>


		</div>

	);
};

export default Home;