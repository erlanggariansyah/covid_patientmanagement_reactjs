import { useSelector } from "react-redux";
import Heading from "../Heading/Heading";
import styles from "./CovidProvinsi.module.css"

const CovidProvinsi = () => {
    const { tableContainer } = styles;
    const tableData = [];
    const covids = useSelector((state) => state.provinces.provinces);
    const data = covids;

    for (let i = 0; i < data.length; i++) {
        let kota = data[i].kota;
        let kasus = data[i].sembuh + data[i].meninggal + data[i].dirawat;
        let sembuh = data[i].sembuh;
        let dirawat = data[i].dirawat;
        let meninggal = data[i].meninggal;

        tableData.push(
            <>
                <tr>
                    <td>{i + 1}</td>
                    <td>{kota}</td>
                    <td>{kasus}</td>
                    <td>{sembuh}</td>
                    <td>{dirawat}</td>
                    <td>{meninggal}</td>
                </tr>
            </>
        )
    }
    
    return (
        <div>
            <Heading titleText="Situation by Provinces" subtitleText="Data Covid berdasarkan Provinsi"/>
            <div className={tableContainer}>
                <table>
                    <tr>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                        {tableData}
                </table>
            </div>
        </div>
    )
}

export default CovidProvinsi;
