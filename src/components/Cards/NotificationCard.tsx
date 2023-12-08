/* //* Assets Imports */
import Bell2 from "../../assets/Bell2.svg";

/* //* Styles Imports */
import Styles from "@Styles/Cards/NotificationCard.module.scss";

function NotificationCard() {
  return (
    <div className={Styles.mainContainer}>
      <button className={Styles.saveButton}>Save</button>
      <div className={Styles.icon}>
        <Bell2 />
      </div>
      <div className={Styles.description}>
        We’ll be sending notifications to you here
      </div>
      <input type="text" />
    </div>
  );
}

export default NotificationCard;
