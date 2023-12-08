/* //* Components Imports */
import DashboardSection from "@Components/Homepage/DashboardSection";
import FormSection from "@Components/Homepage/FormSection";

/* //* Styles Imports */
import Styles from "@Styles/Homepage/HomePageStyles.module.scss";

function index() {
  return (
    <div className={Styles.mainContainer}>
      <DashboardSection />
      <FormSection />
    </div>
  );
}

export default index;
