Upskilling form code


{/* {upSkillingHide ? (
          ""
        ) : (
          <div className={popup ? styles.formWrappers : styles.formWrappers}>
            <label htmlFor="Name">
              Upskilling Objective<span className={styles.spanLabel}>*</span>
            </label>
            <select
              name="upskillPlanning"
              required
              value={query.upskillPlanning}
              onChange={handleParam()}
            >
              <option
                value="How soon are you planning to upskill?"
                selected
                hidden
              >
                How soon are you planning to upskill?
              </option>
              <option value="Select an option" disabled>
                Select an option
              </option>
              <option value="Immediately">Immediately</option>
              <option
                value="Within 1 to 2 weeks
"
              >
                Within 1 to 2 weeks
              </option>
              <option value="Within a Month ">Within a Month</option>
              <option value="Not yet decided">Not yet decided</option>
            </select>
          </div>
        )}

        {upSkillingHide ? (
          ""
        ) : (
          <div className={popup ? styles.formWrappers : styles.formWrappers}>
            <label htmlFor="Name">
              Timeline<span className={styles.spanLabel}>*</span>
            </label>
            <select
              name="upskillingObjective"
              required
              value={query.upskillingObjective}
              onChange={handleParam()}
            >
              <option
                value="Tell us about your upskilling objective?"
                selected
                hidden
              >
                Tell us about your upskilling objective?
              </option>
              <option value="Select an option" disabled>
                Select an option
              </option>
              <option value="Upskilling">Upskilling</option>
              <option value="Salary hike">Salary hike</option>
              <option value="Career switch">Career switch</option>
            </select>
          </div>
        )} */}

        {/* <input
              id="Data Science Program"
              value="Data Science & AI Courses "
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Data Science & AI Courses &nbsp;
            <br />
            <input
              id="Software (DSA & System Design)"
              value="Software (DSA & System Design)"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Software (DSA & System Design) */}


              const formSubmitDownload = (e) => {
    e.preventDefault();
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
        jobDescription: "",
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
  };