//* Component Imports */
import DetailsCard from "@Components/Cards/DetailsCard";
import NotificationCard from "@Components/Cards/NotificationCard";
import AmountLimitCard from "@Components/Cards/AmountLimitCard";
import DaysLimitCard from "@Components/Cards/DaysLimitCard";

/* //* Assets Imports */
import Bell from "@Assets/Bell.svg";

/* //* Styles Imports */
import Styles from "@Styles/Homepage/GetNotified.module.scss";

function GetNotified() {
  const data = {
    icon: Bell,
    heading: "Get notified when a highly correlated whale makes a move",
    description:
      "Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.",
  };
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.detailsContainer}>
        <DetailsCard data={data} />
      </div>
      <div className={Styles.utilitiesContainer}>
        <NotificationCard />
        <AmountLimitCard />
        <DaysLimitCard />
      </div>
    </div>
  );
}

export default GetNotified;
