import { Link } from "react-router-dom";
import ItemListStyled from "../../styled/ItemListStyled";

const ItemList = () => {
    return (
        <ItemListStyled>
            <ul>
                <li>
                    <Link to="/">Global</Link>
                </li>
                <li>
                    <Link to="/indonesia">Indonesia</Link>
                </li>
                <li>
                    <Link to="/provinsi">Provinsi</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </ItemListStyled>
    )
}

export default ItemList;
