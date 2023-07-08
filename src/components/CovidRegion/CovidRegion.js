import DoubleItemBox from "../DoubleItemBox/DoubleItemBox";
import Heading from "../Heading/Heading";
import styles from "./CovidRegion.module.css"

const CovidRegion = (props) => {
    const { boxContainer, box } = styles;
    const { data, setData } = props;
    const boxes = [];

    for (let i = 0; i < data.length; i++) {
        boxes.push(
            <div className={box}>
                <DoubleItemBox name={data[i].name} numbers={data[i].numbers} />
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

export default CovidRegion;
