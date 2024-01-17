import styles from './CarrosDisp.module.css'

const CarrosDisp = ({modelo, preco, km}) => {

    return (
        <ul>
            <h3 className={styles.titulo_car}>Modelo: {modelo}</h3>
            <li>Preço: {preco}</li>
            <li>KM: {km}</li>
        </ul>
    )
};

export default CarrosDisp;