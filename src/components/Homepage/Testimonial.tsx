//* Component Imports */
import TestimonialCards from "@Components/Cards/TestimonialCards";

//* Data Imports */
import { TESTIMONIALS } from "@Data/Testimonial";

//* Assets Imports */
import Logo from "@Assets/Logo.svg";

//* Styles Imports */
import Styles from "@Styles/Homepage/Testimonial.module.scss";

function Testimonial() {
  return (
    <div className={Styles.mainContainer}>
      <h2>Testimonials</h2>
      <div className={Styles.scrollableSection}>
        <div className={Styles.logo}>
          <Logo />
        </div>
        {TESTIMONIALS.map((entry) => (
          <TestimonialCards data={entry} key={entry.id} />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
