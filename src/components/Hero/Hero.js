import styles from "./Hero.module.css"
import { ReactComponent as HeroImage } from "../../assets/hero_img.svg"

const Hero = () => {
    const { container, hero, hero__left, hero__right, hero__title, hero__button, hero__subtitle, hero__description } = styles;
    const description = <p className={hero__description}>Corona Virus Disease 2019 atau yang biasa disingkat COVID-19 adalah penyakit menular yang disebabkan oleh SARS-CoV-2, salah satu jenis koronavirus. Penderita COVID-19 dapat mengalami demam, batuk kering, dan kesulitan bernafas.</p>
    const button = <button className={hero__button}>Vaccine</button>
    const title = <p className={hero__title}>Covid ID</p>
    const subtitle = <p className={hero__subtitle}>Monitoring perkembangan Covid</p>

    return (
        <div className={container}>
            <section className={hero}>
                <div className={hero__left}>
                    {title}
                    {subtitle}
                    {description}
                    {button}
                </div>
                <div className={hero__right}>
                    <HeroImage />
                </div>
            </section>
        </div>
    )
}

export default Hero;
