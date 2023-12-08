/* //* Styles Imports */
import Styles from "@Styles/Cards/TestimonialCard.module.scss";

function TestimonialCards({ data }) {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.subContainer}>
        <div className={Styles.headerContainer}>
          <span className={Styles.name}>{data?.name}</span>
          <span className={Styles.designation}>{data?.designation}</span>
        </div>
        <div className={Styles.descriptionContainer}>{data?.description}</div>
      </div>
    </div>
  );
}

export default TestimonialCards;
