import React, { useState, useEffect } from "react";
import styles from "./FormInline.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";

const FormInline = ({
  popup,
  setTrigger,
  upSkillingHide,
  radio,
  dataScience,
  dataScienceCounselling,
  dataScienceGeneric,
  interstedInHide,
}) => {
  const router = useRouter();

  //offset to maintain time zone difference
  const [value, setValue] = useState();
  const [alertMSG, setAlertMSG] = useState("");
  const [error, setError] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    upskillPlanning: "",
    upskillingObjective: "",
    url: router.asPath,
    interstedIn: "",
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

  const redirection = async () => {
    // console.log("redirect");
    const myTimeout = setTimeout(() => {
      router.push("https://course.learnbay.co/Thank-you");
    }, 500);
  };

  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";

  if (router.pathname === "/resume-builder") {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }

  // Form Submit function
  const formSubmit = (e) => {
    console.log(radio, interstedInHide);
    e.preventDefault();
    if (
      radio === true &&
      (interstedInHide === false || interstedInHide === undefined)
    ) {
      console.log("both true");
      if (query.interstedIn === "Interested In") {
        setError(true);
      } else if (query.interstedIn === "") {
        setError(true);
      } else if (query.platform === "Select an option") {
        setError(true);
      } else if (query.platform === "") {
        setError(true);
      } else {
        setError(false);
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
          formData.append(key, value);
        });
        fetch(`${endPoint}`, {
          method: "POST",
          body: formData,
        }).then(
          () => setAlertMSG(""),
          setQuery({
            name: "",
            email: "",
            phone: "",
            upskillPlanning: "",
            upskillingObjective: "",
            jobDescription: "",
            platform: "",
            workExperience: "",
            dateTime: "",
            WAdropdown: "",
            currentOrganization: "",
            currentDesignation: "",
            url: router.asPath,
            interstedIn: "",
          })
        );
        if (popup) {
          const off = () => {
            setTrigger(false);
          };
          off();
        }
        if (router.pathname === "/learning-learnbay") {
          router.push("/learning-learnbay-select");
        }
        if (router.pathname === "/learning-learnbay-select") {
          router.push("/Thank-you-counselling");
        }
        if (router.pathname === "resume-builder") {
          router.push("Thank-you-counselling");
        }
        if (dataScience) {
          router.push("/Thank-you", {
            pathname: "/Thank-you",
            query: { titleCourse: titleCourse, brochureLink: brochureLink },
          });
        }
        if (dataScienceGeneric) {
          redirection();
        }
        if (dataScienceCounselling) {
          router.push("/Thank-you-counselling");
        }
        if (
          router.pathname === "/organic" ||
          router.pathname === "/referrals"
        ) {
          setToggle(false);
          setAlertMSG("Form Submitted successfully");
          setDisable(false);
          setValue("");
        }
        if (router.pathname === "/Thank-you") {
          setToggle(false);
          setAlertMSG("Form Submitted successfully");
          setDisable(false);
          setValue("");
        }
      }
    } else if (
      interstedInHide === true &&
      (radio === undefined || radio === false)
    ) {
      console.log("inside interesr");
      console.log(query.interstedIn, "queeryinterstes");
      setError(false);
      const formData = new FormData();
      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch(`${endPoint}`, {
        method: "POST",
        body: formData,
      }).then(
        () => setAlertMSG(""),
        setQuery({
          name: "",
          email: "",
          phone: "",
          upskillPlanning: "",
          upskillingObjective: "",
          jobDescription: "",
          platform: "",
          workExperience: "",
          dateTime: "",
          WAdropdown: "",
          currentOrganization: "",
          currentDesignation: "",
          url: router.asPath,
          interstedIn: "",
        })
      );
      if (popup) {
        const off = () => {
          setTrigger(false);
        };
        off();
      }
      if (router.pathname === "/learning-learnbay") {
        router.push("/learning-learnbay-select");
      }
      if (router.pathname === "/learning-learnbay-select") {
        router.push("/Thank-you-counselling");
      }
      if (router.pathname === "resume-builder") {
        router.push("Thank-you-counselling");
      }
      if (fullStack) {
        router.push("/Thank-you-fsd");
      }
      if (event) {
        router.push("/event/Thank-You-event");
      }
      if (dataScience) {
        router.push("/Thank-you", {
          pathname: "/Thank-you",
          query: { titleCourse: titleCourse, brochureLink: brochureLink },
        });
      }
      if (dataScienceGeneric) {
        redirection();
      }
      if (dataScienceCounselling) {
        router.push("/Thank-you-counselling");
      }
      if (router.pathname === "/organic" || router.pathname === "/referrals") {
        setToggle(false);
        setAlertMSG("Form Submitted successfully");
        setDisable(false);
        setValue("");
      }
      if (router.pathname === "/Thank-you") {
        setToggle(false);
        setAlertMSG("Form Submitted successfully");
        setDisable(false);
        setValue("");
      }
    } else if (
      interstedInHide === false ||
      interstedInHide === undefined ||
      radio === false ||
      radio === undefined
    ) {
      if (query.interstedIn === "Interested In") {
        setError(true);
      } else if (query.interstedIn === "") {
        setError(true);
      } else {
        console.log("inside interesr");
        console.log(query.interstedIn, "queeryinterstes");
        setError(false);
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
          formData.append(key, value);
        });
        fetch(`${endPoint}`, {
          method: "POST",
          body: formData,
        }).then(
          () => setAlertMSG(""),
          setQuery({
            name: "",
            email: "",
            phone: "",
            upskillPlanning: "",
            upskillingObjective: "",
            jobDescription: "",
            platform: "",
            workExperience: "",
            dateTime: "",
            WAdropdown: "",
            currentOrganization: "",
            currentDesignation: "",
            url: router.asPath,
            interstedIn: "",
          })
        );
        if (popup) {
          const off = () => {
            setTrigger(false);
          };
          off();
        }
        if (router.pathname === "/learning-learnbay") {
          router.push("/learning-learnbay-select");
        }
        if (router.pathname === "/learning-learnbay-select") {
          router.push("/Thank-you-counselling");
        }
        if (router.pathname === "resume-builder") {
          router.push("Thank-you-counselling");
        }
        if (fullStack) {
          router.push("/Thank-you-fsd");
        }
        if (event) {
          router.push("/event/Thank-You-event");
        }
        if (dataScience) {
          router.push("/Thank-you", {
            pathname: "/Thank-you",
            query: { titleCourse: titleCourse, brochureLink: brochureLink },
          });
        }
        if (dataScienceGeneric) {
          redirection();
        }
        if (dataScienceCounselling) {
          router.push("/Thank-you-counselling");
        }
        if (
          router.pathname === "/organic" ||
          router.pathname === "/referrals"
        ) {
          setToggle(false);
          setAlertMSG("Form Submitted successfully");
          setDisable(false);
          setValue("");
        }
        if (router.pathname === "/Thank-you") {
          setToggle(false);
          setAlertMSG("Form Submitted successfully");
          setDisable(false);
          setValue("");
        }
      }
    } else {
      setError(false);
      const formData = new FormData();
      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch(`${endPoint}`, {
        method: "POST",
        body: formData,
      }).then(
        () => setAlertMSG(""),
        setQuery({
          name: "",
          email: "",
          phone: "",
          upskillPlanning: "",
          upskillingObjective: "",
          jobDescription: "",
          platform: "",
          workExperience: "",
          dateTime: "",
          WAdropdown: "",
          currentOrganization: "",
          currentDesignation: "",
          url: router.asPath,
          interstedIn: "",
        })
      );
      if (popup) {
        const off = () => {
          setTrigger(false);
        };
        off();
      }
      if (router.pathname === "/learning-learnbay") {
        router.push("/learning-learnbay-select");
      }
      if (router.pathname === "/learning-learnbay-select") {
        router.push("/Thank-you-counselling");
      }
      if (router.pathname === "resume-builder") {
        router.push("Thank-you-counselling");
      }
      if (fullStack) {
        router.push("/Thank-you-fsd");
      }
      if (event) {
        router.push("/event/Thank-You-event");
      }
      if (dataScience) {
        router.push("/Thank-you", {
          pathname: "/Thank-you",
          query: { titleCourse: titleCourse, brochureLink: brochureLink },
        });
      }
      if (dataScienceGeneric) {
        redirection();
      }
      if (dataScienceCounselling) {
        router.push("/Thank-you-counselling");
      }
      if (router.pathname === "/organic" || router.pathname === "/referrals") {
        setToggle(false);
        setAlertMSG("Form Submitted successfully");
        setDisable(false);
        setValue("");
      }
      if (router.pathname === "/Thank-you") {
        setToggle(false);
        setAlertMSG("Form Submitted successfully");
        setDisable(false);
        setValue("");
      }
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
                      borderRadius: "6px",
                      border: "1px solid #D3D3D3",
                      padding: "10px",
                    }
                  : {
                      borderRadius: "6px",
                      border: "1px solid #D3D3D3",
                      padding: "10px",
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
          {radio ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <select
                id="platform"
                name="platform"
                required
                value={query.platform}
                onChange={handleParam()}
              >
                <option value=" " selected hidden>
                  Select an option
                </option>
                <option value="Data Science & AI Courses">
                  Data Science & AI Courses
                </option>
                <option value="Software (DSA & System Design)">
                  Software (DSA & System Design)
                </option>
              </select>
            </div>
          ) : (
            ""
          )}
        {interstedInHide ? (
          ""
        ) : (
          <div className={styles.formWrapper}>
            <select
              id="interstedIn"
              name="interstedIn"
              required
              value={query.interstedIn}
              onChange={handleParam()}
            >
              <option value="Interested In" selected hidden>
                Interested In
              </option>
              <option value="Master Degree Program">
                Master Degree Program
              </option>
              <option value="Certification Program">
                Certification Program
              </option>
            </select>
          </div>
        )}
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
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
        {error ? (
          <p
            style={{
              margin: "0px 0px 5px 0px",
              color: "#0072bc",
              fontSize: "18px",
            }}
          >
            Please select a valid option
          </p>
        ) : (
          ""
        )}
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
