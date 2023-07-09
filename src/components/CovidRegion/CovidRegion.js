import CovidRegionStyled from "../../styled/CovidRegionStyled";
import DoubleItemBox from "../DoubleItemBox/DoubleItemBox";
import Heading from "../Heading/Heading";

const CovidRegion = (props) => {
    const { data } = props;
    const boxes = [];

    for (let i = 0; i < data.length; i++) {
        boxes.push(
            <div className="box">
                <DoubleItemBox name={data[i].name} numbers={data[i].numbers} />
            </div>
        )
    }

    return (
        <CovidRegionStyled>
            <Heading titleText={props.title} subtitleText={props.description}/>
            <div className="boxContainer">
                {boxes}
            </div>
        </CovidRegionStyled>
    )
}

export default CovidRegion;
