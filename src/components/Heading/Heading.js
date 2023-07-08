import styles from "./Heading.module.css"

const Heading = (props) => {
    const { container, title, subtitle } = styles;
    const { titleText, subtitleText } = props;

    return (
        <div className={container}>
            <p className={title}>{titleText}</p>
            <p className={subtitle}>{subtitleText}</p>
        </div>
    )
}

export default Heading;
