import stylezin from "./Card.module.css"
import {useState} from "react";

function Card({ item }){
    const [confirma, setConfirma] = useState("1")
    const [deleta, setDeleta] = useState("flex")
    function confirmar(event){
        setConfirma("0.2")
    }

    function deletar(){
        setDeleta("none")
    }
    return (
        <div style={{opacity:confirma, display: deleta}} className={stylezin.cardzinho}>
            <p className={stylezin.nomeProdutoQtd}>{item.produto}</p>
            <p  className={stylezin.nomeProdutoQtd}>Qtd: {item.quantidade} X</p>
            <div className={stylezin.divicons}>
                <button id={stylezin.i1} onClick={confirmar}>
                    <i className="fa-solid fa-check"></i>
                </button>
                <button id={stylezin.i2} onClick={deletar}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default Card