/* //* Packages Imports */
import Marquee from "react-fast-marquee";

//* Component Imports */
import DetailsCard from "@Components/Cards/DetailsCard";
import NotificationCard from "@Components/Cards/NotificationCard";
import AmountLimitCard from "@Components/Cards/AmountLimitCard";
import DaysLimitCard from "@Components/Cards/DaysLimitCard";

/* //* Data Imports */
import { GET_NOTIFIED } from "@Data/CardDescriptions";

/* //* Styles Imports */
import Styles from "@Styles/Homepage/GetNotified.module.scss";

function GetNotified() {
  
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.detailsContainer}>
        <DetailsCard data={GET_NOTIFIED} />
      </div>
      <Marquee speed={30} pauseOnHover className={Styles.marqueeConatiner}>
        <div className={Styles.utilitiesContainer}>
          <NotificationCard />
          <AmountLimitCard />
          <DaysLimitCard />
        </div>
      </Marquee>
    </div>
  );
}

export default GetNotified;
