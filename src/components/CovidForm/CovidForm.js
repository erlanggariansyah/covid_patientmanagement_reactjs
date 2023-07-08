import styles from "./CovidForm.module.css"
import { ReactComponent as ImageHeroFooter } from "../../assets/hero_img_form.svg"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProvince } from "../../features/slices/provinceSlice";

const CovidForm = () => {
    const { container, form, form__field, form__left, form__right, form__title, form__button, form__subtitle } = styles;
    const [formData, setFormData] = useState({ total: "", province: "", patientStatus: "" })
    const [ totalNull, setTotalNull ] = useState(false);
    const [ provinceNull, setProvinceNull ] = useState(false);
    const [ patientStatusNull, setPatientStatusNull ] = useState(false);
    const covids = useSelector((state) => state.provinces.provinces)    
    const button = <button className={form__button} type="submit">Submit</button>
    const titleForm = <h2 className={form__title}>Form Covid</h2>
    const covidTotal = <label className={form__subtitle}>Jumlah</label>
    const covidProvince = <label className={form__subtitle}>Provinsi</label>
    const covidStatus = <label className={form__subtitle}>Status</label>
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

    const covidForm = (
        <div>
            <form onSubmit={handleClick}>
                { provinceNull ? <p>Provinsi wajib di isi.</p> : null }
                <div className={form__field}>
                    {covidProvince}
                    <select id="province" name="province" value={formData.province} onChange={handleChange}>
                        {provinces}
                    </select>
                </div>
                { patientStatusNull ? <p>Status wajib di isi.</p> : null }
                <div className={form__field}>
                    {covidStatus}
                    <select id="patientStatus" name="patientStatus" value={formData.patientStatus} onChange={handleChange}>
                        <option value="dirawat" selected>Dirawat</option>
                        <option value="meninggal">Meninggal</option>
                        <option value="sembuh">Sembuh</option>
                    </select>
                </div>
                { totalNull ? <p>Total wajib di isi.</p> : null }
                <div className={form__field}>
                    {covidTotal}
                    <input id="total" value={formData.total} type="number" title={covidTotal} name="total" onChange={handleChange} />
                </div>
                {button}
            </form>
        </div>
    )

    return (
        <div className={container}>
            <section className={form}>
                <div className={form__left}>
                    <ImageHeroFooter />
                </div>
                <div className={form__right}>
                    {titleForm}
                    {covidForm}
                </div>
            </section>
        </div>
    )
}

export default CovidForm;
