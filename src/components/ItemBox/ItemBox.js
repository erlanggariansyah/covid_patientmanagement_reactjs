import ItemBoxStyled from "../../styled/ItemBoxStyled";

const ItemBox = (props) => {
    const { titleText, subtitleText } = props;
    const conditionalColor = { color: 'black' }
    let titleTextFinal;

    if (titleText === "confirmed") {
        conditionalColor.color = "#06D6A0"
        titleTextFinal = "Confirmed"
    } else if (titleText === "recovered") {
        conditionalColor.color = "#118AB2"
        titleTextFinal = "Recovered"
    } else {
        conditionalColor.color = "red"
        titleTextFinal = "Death"
    }

    return (
        <ItemBoxStyled>
            <p className="title">{titleTextFinal}</p>
            <p className="subtitle" style={conditionalColor}>{subtitleText.toLocaleString()}</p>
        </ItemBoxStyled>
    )
}

export default ItemBox;
