import axios from "axios"
import CovidInsight from "../components/CovidInsight/CovidInsight"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import Endpoint from "../utils/constants/endpoint"
import GeneralConstant from "../utils/constants/general"
import { useEffect, useState } from "react"
import CovidRegion from "../components/CovidRegion/CovidRegion"

const Global = () => {
    const [covids, setCovids] = useState([]);
    const [covidRegions, setCovidRegions] = useState([]);

    const fetchData = async () => {
        const response = await axios(Endpoint.GLOBAL);
        setCovids(response.data.global);
        setCovidRegions(response.data.regions)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Navbar/>
            <Hero/>
            <CovidInsight title={GeneralConstant.GLOBAL_SITUATION} description={GeneralConstant.GLOBAL_SITUATION_DESC} data={covids} setData={setCovids} />
            <CovidRegion title={GeneralConstant.REGION_SITUATION} description={GeneralConstant.REGION_SITUATION_DESC} data={covidRegions} setData={setCovidRegions} />
            <Footer/>
        </>
    )
}

export default Global;
