import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [compras, setCompras] = useState([]);
    const [hover, setHover] = useState(null);

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
                        placeholder="Añade a tu lista de la compra"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                if (!inputValue.trim()) {
                                    alert("No se admite texto vacío");
                                } else {
                                    setCompras([...compras, inputValue]);
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
                        <h2 className="proTotales text-success">{ compras.length > 0 ? `PRODUCTOS TOTALES: ${compras.length}`: "No hay productos añadidos :(" }</h2>
                    </div>
                </div>
            </div>

            <div className="row contenedorLista">
                <div className="col-12 col-md-8 mx-auto">
                    <ul className="list-group">
                        {compras.map((compra, index) => (
                            <li
                                key={index}
                                className="mb-3 list-group-item d-flex justify-content-between align-items-center fs-4"
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(null)}
                                style={{
                                    backgroundColor: hover === index ? "#e9ecef" : "",
                                    transition: "0.3s"
                                }}
                            >
                                {compra}

                                {hover === index && (
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            setCompras(compras.filter((_, i) => i !== index))
                                        }
                                    >
                                        X
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Home;