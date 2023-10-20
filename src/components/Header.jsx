import styles from './Header.module.css'
function Header(){
    return(
        <header className={styles.header}>
            <h1 className={styles.titulo}>Lista de Compras</h1>
            <i className="fa-solid fa-cart-shopping" id={styles.carrinho}></i>
        </header>
    )
}
export default Header