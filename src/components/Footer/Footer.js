import FooterStyled from "../../styled/FooterStyled";
import GeneralConstant from "../../utils/constants/general";
import ItemList from "../ItemList/ItemList";

const Footer = () => {
    return (
        <FooterStyled>
            <footer>
                <div>
                    <p className="footer__title">{GeneralConstant.PROJECT_NAME}</p>
                    <p className="footer__author">{GeneralConstant.PROJECT_CREDIT}</p>
                </div>
                <div>
                    <ItemList />
                </div>
            </footer>
        </FooterStyled>
    )
}

export default Footer;
