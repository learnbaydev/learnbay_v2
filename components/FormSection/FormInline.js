import React, { useState, useEffect } from "react";
import styles from "./FormInline.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import Button from "../Global/Button/Button";

const FormInline = ({ popup, setTrigger, radio, dataScience }) => {
  const router = useRouter();

  //offset to maintain time zone difference
  const [value, setValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
    Brief: "",
    dateTime: "",
    url: router.asPath,
  });
  useEffect(() => {
    setQuery({ ...query, phone: value });
  }, [value]);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";

  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`${endPoint}`, {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({
        name: "",
        email: "",
        phone: "",
        workExperience: "",
        scheduleTime: "",
        url: "",
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }
    if (dataScience) {
      router.push("/Thank-you");
    }
  };

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.formWrapper}>
            <input
              type="text"
              name="name"
              className={popup ? styles.NameInputs : styles.NameInput}
              required
              placeholder="Enter your Full Name"
              value={query.name}
              style={{ borderBottom: "1px solid grey" }}
              onChange={handleParam()}
            />
          </div>
          <div className={styles.formWrapper}>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your Email"
              className={popup ? styles.EmailInputs : styles.EmailInput}
              value={query.email}
              onChange={handleParam()}
            />
          </div>
          <div className={styles.formWrapper}>
            <PhoneInput
              style={
                popup
                  ? {
                      height: "50px",
                      borderRadius: "8px",
                      border: "1px solid grey",
                      padding: "10px",
                    }
                  : {
                      border: "0",
                      height: "50px",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid grey",
                    }
              }
              name="phone"
              rules={{ required: true }}
              defaultCountry="IN"
              placeholder="Enter Phone Number"
              className={popup ? styles.Phones : styles.Phone}
              value={value}
              onChange={setValue}
              required
            />
          </div>
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <select
              name="workExperience"
              required
              value={query.workExperience}
              onChange={handleParam()}
            >
              <option value="Work Experience">Work Experience</option>
              <option value="1 to 3 year">1 to 3 years</option>
              <option value="3 to 7 year">3 to 7 years</option>
              <option value="7 to 12 year">7 to 12 years</option>
              <option value="12+ year">12+ years</option>
            </select>
          </div>
          {popup ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <input
                type="hidden"
                id="url"
                name="url"
                value={router.asPath}
              ></input>
            </div>
          ) : (
            ""
          )}
        </div>
        {radio ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            {mobile ? (
              <div>
                <input
                  id="Data Science & AI Courses"
                  value="Data Science & AI Courses"
                  name="platform"
                  required
                  type="radio"
                  onChange={handleParam()}
                />
                Data Science & AI Courses&nbsp;
                {mobile ? <br /> : ""}
                <input
                  id="Software/Web Development (DSA & System Design)"
                  value="Software/Web Development (DSA & System Design)"
                  name="platform"
                  required
                  type="radio"
                  onChange={handleParam()}
                />
                Software/Web Development <br />
                &nbsp;&nbsp;&nbsp;&nbsp;(DSA & System Design)
              </div>
            ) : (
              <>
                <div className={styles.dsCourseInp}>
                  <input
                    id="Data Science & AI Courses"
                    value="Data Science & AI Courses"
                    name="platform"
                    required
                    type="radio"
                    onChange={handleParam()}
                  />
                  Data Science & AI Courses&nbsp;
                </div>
                <div className={styles.fsdCourseInp}>
                  <input
                    id="Software/Web Development (DSA & System Design)"
                    value="Software/Web Development (DSA & System Design)"
                    name="platform"
                    required
                    type="radio"
                    onChange={handleParam()}
                  />
                  Software/Web Development (DSA & System Design)
                </div>
              </>
            )}
          </div>
        ) : (
          ""
        )}
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          Request A Callback
        </button>
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
      </form>
    </div>
  );
};

export default FormInline;
