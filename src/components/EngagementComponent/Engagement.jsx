import "./Engagement.css";
import { useState, useEffect, useContext } from "react";
import { ThemeMode } from "../../App";

function EngagementComponent() {
  const passedValue = useContext(ThemeMode);

  const [engagement, setEngagement] = useState([
    {
      id: 1,
      platform: "/images/icon-facebook.svg",
      metric: "Page Views",
      value: 87,
      change: "+3%",
    },
    {
      id: 2,
      platform: "/images/icon-facebook.svg",
      metric: "Likes",
      value: 52,
      change: "-2%",
    },
    {
      id: 3,
      platform: "/images/icon-instagram.svg",
      metric: "Likes",
      value: 5462,
      change: "+2257%",
    },
    {
      id: 4,
      platform: "/images/icon-instagram.svg",
      metric: "Profile Views",
      value: "52k",
      change: "+1375%",
    },
    {
      id: 5,
      platform: "/images/icon-twitter.svg",
      metric: "Retweets",
      value: 117,
      change: "+303%",
    },
    {
      id: 6,
      platform: "/images/icon-twitter.svg",
      metric: "Likes",
      value: 507,
      change: "+553%",
    },
    {
      id: 7,
      platform: "/images/icon-youtube.svg",
      metric: "Likes",
      value: 107,
      change: "-19%",
    },
    {
      id: 8,
      platform: "/images/icon-youtube.svg",
      metric: "Total Views",
      value: 1407,
      change: "-12%",
    },
  ]);

  // useEffect(() => {fetch('http://localhost:3000/engagement') .then(response => response.json()) .then(data => setEngagement(data)) }, [])

  return (
    <div
      id="engagement-section"
      className={
        passedValue.isDarkMode
          ? "dark-mode-engagement"
          : "light-mode-engagement"
      }
    >
      <h2 id="engagement-title">Overview - Today</h2>
      <div id="engagement-wrapper">
        {engagement.map((ele) => {
          const isPositive = ele.change.includes("+");
          const chanValue = ele.change.replace(/^\+|^-/, "").trim();

          return (
            <div key={ele.id}>
              <div
                id="engagement-card"
                className={
                  passedValue.isDarkMode
                    ? "dark-mode-engagement-card"
                    : "light-mode-engagement-card"
                }
              >
                <div id="platformTitle">
                  <p>{ele.metric}</p>
                  <img src={ele.platform} alt="not" />
                </div>

                <div id="valueChange">
                  <h2>{ele.value}</h2>
                  <span
                    id="change-engagement"
                    className={ele.className}
                    style={{ color: isPositive ? "#1db489" : "#dc414c" }}
                  >
                    {isPositive ? "▲" : "▼"}
                    {chanValue}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EngagementComponent;
