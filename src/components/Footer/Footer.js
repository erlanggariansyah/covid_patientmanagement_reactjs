import ItemList from "../ItemList/ItemList";
import styles from "./Footer.module.css"

const Footer = () => {
    const { container, footer, footer__title, footer__author } = styles;
    const title = <p className={footer__title}>Covid ID</p>;
    const author = <p className={footer__author}>Developed by Erlangga Riansyah</p>;

    return (
        <div className={container}>
            <footer className={footer}>
                <div>
                    {title}
                    {author}
                </div>
                <div>
                    <ItemList />
                </div>
            </footer>
        </div>
    )
}

export default Footer;
