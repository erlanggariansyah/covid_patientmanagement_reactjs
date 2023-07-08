import styles from "./CovidForm.module.css"
import { ReactComponent as ImageHeroFooter } from "../../assets/hero_img_form.svg"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProvince } from "../../features/slices/provinceSlice";

const CovidForm = () => {
    const { container, form, form__field, form__left, form__right, form__title, form__button, form__subtitle } = styles;
    const [ total, setTotal ] = useState(0)
    const [ province, setProvince ] = useState("")
    const [ status, setStatus ] = useState("")
    const [ isTotalNull, setIsTotalNull ] = useState(false)
    const [ isProvinceNull, setIsProvinceNull ] = useState(false)
    const [ isStatusNull, setIsStatusNull ] = useState(false)
    const covids = useSelector((state) => state.provinces.provinces)    
    const button = <button className={form__button} type="submit">Submit</button>
    const titleForm = <h2 className={form__title}>Form Covid</h2>
    const covidTotal = <label className={form__subtitle}>Jumlah</label>
    const covidProvince = <label className={form__subtitle}>Provinsi</label>
    const covidStatus = <label className={form__subtitle}>Status</label>
    const provinces = [];
    const dispatch = useDispatch();
    
    for (let j = 0; j < covids.length; j++) {
        provinces.push(
            <>
                <option value={covids[j].kota}>{covids[j].kota}</option>
            </>
        )
    }

    const handleClick = (e) => {
        e.preventDefault()

        if (total === "") {
            setIsTotalNull(true)
        } else if (province === "") { 
            setIsProvinceNull(true) 
        } else if (status === "") {
            setIsStatusNull(true)
        } else {
            const updatedCovids = covids.map((covidItem) => {
                if (covidItem.kota === province) {
                    const covidItemTemp = { ...covidItem };

                    if (status === "sembuh") {
                        covidItemTemp.sembuh = parseInt(total);
                    } else if (status === "meninggal") {
                        covidItemTemp.meninggal = parseInt(total);
                    } else if (status === "dirawat") {
                        covidItemTemp.dirawat = parseInt(total);
                    }

                    return covidItemTemp;
                }

                return covidItem;
            });

            dispatch(updateProvince(updatedCovids));
        }
    }

    const handleChangeTotal = (e) => {
        setTotal(e.target.value)
    }

    const handleChangeProvince = (e) => {
        setProvince(e.target.value)
    }

    const handleChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const covidForm = (
        <div>
            <form onSubmit={handleClick}>
                { isProvinceNull ? <p>Provinsi wajib di isi.</p> : null }
                <div className={form__field}>
                    {covidProvince}
                    <select name="province" value={province} onChange={handleChangeProvince}>
                        {provinces}
                    </select>
                </div>
                { isStatusNull ? <p>Status wajib di isi.</p> : null }
                <div className={form__field}>
                    {covidStatus}
                    <select name="status" value={status} onChange={handleChangeStatus}>
                        <option value="dirawat">Dirawat</option>
                        <option value="meninggal">Meninggal</option>
                        <option value="sembuh">Sembuh</option>
                    </select>
                </div>
                { isTotalNull ? <p>Total wajib di isi.</p> : null }
                <div className={form__field}>
                    {covidTotal}
                    <input type="number" title={covidTotal} name="total" onChange={handleChangeTotal} />
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
