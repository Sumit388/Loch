/* //* Assets Imports */
import Clock from "../../assets/Clock.svg";
import Down from "../../assets/Down.svg";

/* //* Styles Imports */
import Styles from "@Styles/Cards/SettingCard.module.scss";

function DaysLimitCard() {
  return (
    <div className={Styles.mainContainer}>
      <input type="checkbox" />
      <div className={Styles.icon}>
        <Clock />
      </div>
      <div className={Styles.description}>
        <p>Notify me when any wallet dormant for</p>
        <div className={Styles.fakeDropdown}>
          <span>{">"} 30 days</span>
          <Down />
        </div>
        <p>becomes active</p>
      </div>
    </div>
  );
}

export default DaysLimitCard;
