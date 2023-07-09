import DoubleItemBoxStyled from "../../styled/DoubleItemBoxStyled";

const DoubleItemBox = (props) => {
    const { name, numbers } = props;

    return (
        <DoubleItemBoxStyled>
            <p className="title">{name}</p>
            <div className="status-row">
                <p className="subtitle">Confirmed</p>
                <p style={{color: "#06D6A0", marginTop: 0}}>{numbers.confirmed.toLocaleString()}</p> 
            </div>
            <div className="status-row">
                <p className="subtitle">Recovered</p>
                <p style={{color: "#118AB2", marginTop: 0}}>{numbers.recovered.toLocaleString()}</p> 
            </div>
            <div className="status-row">
                <p className="subtitle">Death</p>
                <p style={{color: "red",  marginTop: 0}}>{numbers.death.toLocaleString()}</p> 
            </div>
        </DoubleItemBoxStyled>
    )
}

export default DoubleItemBox;
