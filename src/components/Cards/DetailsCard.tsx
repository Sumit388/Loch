/* //* Styles Imports */
import Styles from "@Styles/Cards/DetailsCard.module.scss";

function DetailsCard({ data }) {
  return (
    <div className={Styles.detailsContainer}>
      <div className={Styles.icon}>
        <data.icon />
      </div>
      <div className={Styles.heading}>
        <h2>{data.heading}</h2>
      </div>
      <div className={Styles.description}>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default DetailsCard;
