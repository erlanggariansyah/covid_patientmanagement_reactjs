import { ReactComponent as ImageHeroFooter } from "../../assets/hero_img_form.svg"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProvince } from "../../features/slices/provinceSlice";
import CovidFormStyled from "../../styled/CovidFormStyled";
import GeneralConstant from "../../utils/constants/general";

const CovidForm = () => {
    const [formData, setFormData] = useState({ total: "", province: "", patientStatus: "" })
    const [ totalNull, setTotalNull ] = useState(false);
    const [ provinceNull, setProvinceNull ] = useState(false);
    const [ patientStatusNull, setPatientStatusNull ] = useState(false);
    const covids = useSelector((state) => state.provinces.provinces)
    const provinces = [];
    const dispatch = useDispatch();

    const validate = () => {
        if (formData.total === "") {
            setTotalNull(true);
            return false;
        } else if (formData.province === "") { 
            setProvinceNull(true);
            return false;
        } else if (formData.patientStatus === "") {
            setPatientStatusNull(true);
            return false;
        }

        return true;
    }

    const update = () => {
        const updatedCovids = covids.map((covidItem) => {
            if (covidItem.kota === formData.province) {
                const covidItemTemp = { ...covidItem };

                if (formData.patientStatus === "sembuh") {
                    covidItemTemp.sembuh = parseInt(formData.total);
                } else if (formData.patientStatus === "meninggal") {
                    covidItemTemp.meninggal = parseInt(formData.total);
                } else if (formData.patientStatus === "dirawat") {
                    covidItemTemp.dirawat = parseInt(formData.total);
                }

                return covidItemTemp;
            }

            return covidItem;   
        });

        dispatch(updateProvince(updatedCovids));
    }

    const handleClick = (e) => {
        e.preventDefault()

        validate() && update()
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    for (let j = 0; j < covids.length; j++) {
        provinces.push(
            <>
                <option value={covids[j].kota}>{covids[j].kota}</option>
            </>
        )
    }

    return (
        <CovidFormStyled>
            <div className="container">
                <section>
                    <div className="form__left">
                        <ImageHeroFooter />
                    </div>
                    <div className="form__right">
                        <h2 className="form__title">Form Covid</h2>
                        <div>
                            <form onSubmit={handleClick}>
                                { provinceNull ? <p>Provinsi wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_PROVINCE}</label>
                                    <select id="province" name="province" value={formData.province} onChange={handleChange}>
                                        {provinces}
                                    </select>
                                </div>
                                { patientStatusNull ? <p>Status wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_STATUS}</label>
                                    <select id="patientStatus" name="patientStatus" value={formData.patientStatus} onChange={handleChange}>
                                        <option value="dirawat" selected>Dirawat</option>
                                        <option value="meninggal">Meninggal</option>
                                        <option value="sembuh">Sembuh</option>
                                    </select>
                                </div>
                                { totalNull ? <p>Total wajib di isi.</p> : null }
                                <div className="form__field">
                                    <label>{GeneralConstant.FORM_LABEL_TOTAL}</label>
                                    <input id="total" value={formData.total} type="number" name="total" onChange={handleChange} />
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </CovidFormStyled>
    )
}

export default CovidForm;
