/* //* Packages Imports */
import { useState, useEffect } from "react";

/* //* Styles Imports */
import Styles from "@Styles/Homepage/FormSection.module.scss";

function FormSection() {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [submitAttempted, setSubmitAttempted] = useState<boolean>(false);

  const checkEmailValidation = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(value)) setError("Please enter a valid email.");
    else setError("");
    return !emailPattern.test(value);
  };

  const handleSubmit = () => {
    if (checkEmailValidation()) {
      setSubmitAttempted(true);
    } else {
      setError("");
      setSubmitAttempted(false);
      setValue("");
      window.open("https://app.loch.one/welcome");
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (submitAttempted) checkEmailValidation();
  }, [value]);

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.form}>
        <div className={Styles.heading}>Sign up for exclusive access.</div>
        <input
          type="text"
          placeholder="Your email address"
          onChange={(e) => handleInputChange(e)}
          value={value}
        />
        {error && <span className={Styles.error}>{error}</span>}
        <button onClick={handleSubmit}>Get started</button>
        <div className={Styles.description}>
          You’ll receive an email with an invite link to join.
        </div>
      </div>
    </div>
  );
}

export default FormSection;
