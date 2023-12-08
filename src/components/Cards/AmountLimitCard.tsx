/* //* Assets Imports */
import Graphs from "../../assets/Graphs.svg";
import Down from "../../assets/Down.svg";

/* //* Styles Imports */
import Styles from "@Styles/Cards/SettingCard.module.scss";

function AmountLimitCard() {
  return (
    <div className={Styles.mainContainer}>
      <input type="checkbox" />
      <div className={Styles.icon}>
        <Graphs />
      </div>
      <div className={Styles.description}>
        <p>Notify me when any wallets move more than</p>
        <div className={Styles.fakeDropdown}>
          <span>$1,000.00 </span>
          <Down />
        </div>
      </div>
    </div>
  );
}

export default AmountLimitCard;
