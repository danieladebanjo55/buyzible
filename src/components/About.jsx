import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import buyzible from "../assets/update1.png"

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () => (
  <section id="features" className={layout.section}>

    <div className={`${layout.sectionImg} flex-col`}>
    <img src={buyzible} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
    </div>


    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Buyzible
      </h2>
      <h2 className={styles.heading2}>

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We are a next generation social commerce application. We provide a payment processing solution to streamline payments through popular messaging apps like the popular Whatsapp, Messenger and many more.
      </p>

      <Button styles={`mt-10`} />
    </div>


  </section>
);

export default About;
