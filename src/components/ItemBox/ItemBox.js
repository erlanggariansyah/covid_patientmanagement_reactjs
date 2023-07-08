import styles from "./ItemBox.module.css"

const ItemBox = (props) => {
    const { container, title, subtitle } = styles;
    const { titleText, subtitleText } = props;
    const conditionalColor = {
        color: 'black'
    }

    if (titleText === "confirmed") {
        conditionalColor.color = "#06D6A0"
    } else if (titleText === "recovered") {
        conditionalColor.color = "#118AB2"
    } else {
        conditionalColor.color = "red"
    }

    return (
        <div className={container}>
            <p className={title}>{titleText}</p>
            <p className={subtitle} style={conditionalColor}>{subtitleText.toLocaleString()}</p>
        </div>
    )
}

export default ItemBox;
