import styles from "./CarDetails.module.css";

const CarDetails = ({ name, brand, description, img }) => {
  return (
    <div className={styles.car_div}>
      <h1 className={styles.title_name}>{name}</h1>
      <img src={img} alt="Carro" className={styles.img_style} />
      <h3 className={styles.subtitle_brand}>{brand}</h3>
      <p className={styles.p_car}>{description}</p>
    </div>
  );
};
export default CarDetails;
