import style from "./Form.module.css"
import {useState} from "react";
import styles from "./Content.module.css";
import Card from "./Card";

function Form() {
    const [produto, setProduto] = useState('')
    const [add, setAdd] = useState(0)
    const [tudo, setTudo] = useState([])

    function listar(){
        console.log(tudo)
        setTudo([
                ...tudo,
                {"produto": produto, "quantidade": add}
            ]
        )
    }
// tres pontos destrincha uma lista
    function produtos(event){
        setProduto(event.target.value)
    }

    function soma() {
        setAdd(add + 1)
    }

    function tira() {
        if (add != 0){
            setAdd(add - 1)
        }

    }

    return (
        <div className={style.geral}>
            <input value={produto} onChange={produtos} type="text" placeholder="Nome do produto" className={style.texto} />
            <div>
                <h5>Quantidade</h5>
                <div className={style.botoes}>
                    <button className={style.btn} onClick={tira}>-</button>
                    <p>{add}</p>
                    <button className={style.btn} onClick={soma} >+</button>
                </div>
            </div>
            <button className={style.btn2} onClick={listar}>Adicionar</button>

            <div className={styles.cards}>
                {tudo.map((item) => <Card item={item}></Card>)}
            </div>
        </div>
    )
}

export default Form