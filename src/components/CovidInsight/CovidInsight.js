import CovidInsightStyled from "../../styled/CovidInsightStyled";
import Heading from "../Heading/Heading";
import ItemBox from "../ItemBox/ItemBox";

const CovidInsight = (props) => {
    const boxes = [];
    const { data } = props;

    for (let i = 0; i < data.length; i++) {
        boxes.push(
            <div className="box">
                <ItemBox titleText={data[i].status} subtitleText={data[i].total} />
            </div>
        )
    }

    return (
        <CovidInsightStyled>
            <Heading titleText={props.title} subtitleText={props.description}/>
            <div className="boxContainer">
                {boxes}
            </div>
        </CovidInsightStyled>
    )
}

export default CovidInsight;
