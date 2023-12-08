/* //* Coponents Imports */
import GetNotified from "@Components/Homepage/GetNotified";
import WatchWhales from "@Components/Homepage/WatchWhales";
import Testimonial from "@Components/Homepage/Testimonial";

/* //* Styles Imports */
import Styles from "@Styles/Homepage/DashboardSection.module.scss";

function DashboardSection() {
  return (
    <div className={Styles.mainContainer}>
      <GetNotified />
      <WatchWhales />
      <Testimonial />
    </div>
  );
}

export default DashboardSection;
