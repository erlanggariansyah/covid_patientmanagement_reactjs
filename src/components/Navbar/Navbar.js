import styles from "./Navbar.module.css"
import ItemList from "../ItemList/ItemList";

const Navbar = () => {
    const { container, navbar, navbar__brand } = styles;

    return (
        <div className={container}>
            <nav className={navbar}>
                <div>
                    <h1 className={navbar__brand}>Covid ID</h1>
                </div>
                <ItemList />
            </nav>
        </div>
    )
}

export default Navbar;
