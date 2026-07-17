import React, { useState } from "react";
import { useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const urlBase = "https://musical-telegram-779q699r6497hp4gr.github.dev/"
	const [inputValue, setInputValue] = useState("");
	const [compras, setCompras] = useState([]);
	const [hover, setHover] = useState(null);

	const traerTareas = async () => {
		const response = await fetch(`https://playground.4geeks.com/todo/users/usuarioPractica
`)
		const data = await response.json()

		if (response.ok){
			console.log(data)
			setCompras(data.todos)
			console.log(compras)
		}
		else{
			crearUsuario()
		}
		
	}

	const crearUsuario = async () => {
		const response = await fetch(`https://playground.4geeks.com/todo/users/usuarioPractica`,
			{
				method: "POST"
			}

		)
		const data = await response.json()
		console.log(data)
	}

	const crearTareas = async (compra) => {
		const response = await fetch(`https://playground.4geeks.com/todo/todos/usuarioPractica`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify( {
					"label": compra,
					"is_done": false
				})
			}
		)
		traerTareas()
	}

	const borrarTareas = async (elemento)=>{
		const response = await fetch(`https://playground.4geeks.com/todo/todos/${elemento}`,
			{
				method:"DELETE"
			}
		)
		traerTareas()
	}

	useEffect(() => {
        traerTareas()

    }, [])


	return (
		<div className="container py-4">

			<div className="row mb-3">
				<div className="col-12">
					<h1 className="titulo text-center text-success">
						CREA TU LISTA DE LA COMPRA:
					</h1>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-12 col-md-8 mx-auto">
					<input
						type="text"
						className="inputStyle form-control form-control-lg"
						placeholder="->Agrega productos aqui<-"
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						onKeyDown={e => {
							if (e.key === "Enter") {
								if (!inputValue.trim()) {
									alert("No se admite texto vacío");
								} else {
									crearTareas(inputValue)
									setInputValue("");
								}
							}
						}}
					/>
				</div>
			</div>

			<div className="row mt-3">
				<div className="col-10 col-md-6 mx-auto contenedor">
					<div className="contenedorContador  text-white text-center p-3 rounded">
						<h2 className="proTotales text-success">{compras.length > 0 ? `PRODUCTOS TOTALES: ${compras.length}` : "No hay productos añadidos :("}</h2>
					</div>
				</div>
			</div>

			<div className="row contenedorLista">
				<div className="col-12 col-md-8 mx-auto">
					<ul className="list-group">
						{compras.map((compra) => {
							return(
							<li
								key={compra.id}
								className="mb-3 list-group-item d-flex justify-content-between align-items-center fs-4"
								onMouseEnter={() => setHover(compra.id)}
								onMouseLeave={() => setHover(null)}
								style={{
									backgroundColor: hover === compra.id ? "#e9ecef" : "",
									transition: "0.3s"
								}}
							>
								{compra.label}

								{hover === compra.id && (
									<button
										className="btn btn-danger btn-sm"
										onClick={() =>
											borrarTareas(compra.id)
										}
									>
										X
									</button>
								)}
							</li>

							)

						})}

					</ul>
				</div>
			</div>

		</div>
	);
};

export default Home;