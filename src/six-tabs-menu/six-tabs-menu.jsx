import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import "./six-tabs-menu.styles.scss";

const SixTabsMenu = () => {
  const url = "https://course-api.com/react-tabs-project";
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="six-tabs__section loading">
        <h1>⏳</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="six-tabs__section">
      <div className="six-tabs__title">
        <h2>expierence</h2>
        <div className="six-tabs__underline"></div>
        <div className="six-tabs__jobs-center">
          {/* {btn-container} */}
          <div className="six-tabs__btn-container">
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`six-tabs__job-btn ${
                    index === value && "active-btn"
                  }`}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className="six-tabs__job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="six-tabs__job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className="six-tabs__job-desc" key={index}>
                  <FaAngleRight className="six-tabs__job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default SixTabsMenu;
