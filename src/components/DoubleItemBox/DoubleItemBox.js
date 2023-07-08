import styles from "./DoubleItemBox.module.css"

const DoubleItemBox = (props) => {
    const { container, title, subtitle } = styles;
    const { name } = props;
    const { numbers } = props;

    return (
        <div className={container}>
            <p className={title}>{name}</p>
            <div style={{textAlign: "left"}}>
                <p className={subtitle}>Confirmed</p>
                <p style={{color: "#06D6A0", marginTop: 0}}>{numbers.confirmed.toLocaleString()}</p> 
            </div>
            <div style={{textAlign: "left"}}>
                <p className={subtitle}>Recovered</p>
                <p style={{color: "#118AB2", marginTop: 0}}>{numbers.recovered.toLocaleString()}</p> 
            </div>
            <div style={{textAlign: "left"}}>
                <p className={subtitle}>Death</p>
                <p style={{color: "red",  marginTop: 0}}>{numbers.death.toLocaleString()}</p> 
            </div>
        </div>
    )
}

export default DoubleItemBox;
