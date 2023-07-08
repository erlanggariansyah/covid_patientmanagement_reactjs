import { Link } from "react-router-dom";
import styles from "./ItemList.module.css"

const ItemList = () => {
    const { item__list, item__item } = styles;

    return (
        <div>
            <ul className={item__list}>
                <li className={item__item}>
                    <Link to="/">Global</Link>
                </li>
                <li className={item__item}>
                    <Link to="/indonesia">Indonesia</Link>
                </li>
                <li className={item__item}>
                    <Link to="/provinsi">Provinsi</Link>
                </li>
                <li className={item__item}>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default ItemList;
