import Heading from "../Heading/Heading";
import ItemBox from "../ItemBox/ItemBox";
import styles from "./CovidInsight.module.css"

const CovidInsight = (props) => {
    const { boxContainer, box } = styles;
    const { data, setData } = props;
    const boxes = [];

    for (let i = 0; i < data.length; i++) {
        boxes.push(
            <div className={box}>
                <ItemBox titleText={data[i].status} subtitleText={data[i].total} />
            </div>
        )
    }

    return (
        <div>
            <Heading titleText={props.title} subtitleText={props.description}/>
            <div className={boxContainer}>
                {boxes}
            </div>
        </div>
    )
}

export default CovidInsight;
