//* Packages Imports */
import Image from "next/image";

//* Components Imports */
import DetailsCard from "@Components/Cards/DetailsCard";

//* Assets Imports */
import DashBoard from "@Assets/Dashboard.png";
//* Styles Imports */
import { WATCH_WHALES } from "@Data/CardDescriptions";

//* Styles Imports */
import Styles from "@Styles/Homepage/WatchWhales.module.scss";

function WatchWhales() {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.imageContainer}>
        <Image src={DashBoard} alt="" width={335} height={306} />
      </div>
      <div className={Styles.cardContainer}>
        <DetailsCard data={WATCH_WHALES} />
      </div>
    </div>
  );
}

export default WatchWhales;
