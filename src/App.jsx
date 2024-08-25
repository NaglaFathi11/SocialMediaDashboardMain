import "./App.css";
import { useState, useEffect, createContext } from "react";
import EngagementComponent from "./components/EngagementComponent/Engagement";

export const ThemeMode = createContext(null);
function App() {
  const [followers, setFollowers] = useState([
    {
      id: 1,
      platform: "/images/icon-facebook.svg",
      user: "@nathanf",
      metric: "Followers",
      value: 1987,
      change: "+12 Today",
      borderColor: "hsl(208, 92%, 53%) 4px solid",
    },
    {
      id: 2,
      platform: "/images/icon-twitter.svg",
      user: "@nathanf",
      metric: "Followers",
      value: 1044,
      change: "+99 Today",
      borderColor: "hsl(203, 89%, 53%) 4px solid",
    },
    {
      id: 3,
      platform: "/images/icon-instagram.svg",
      user: "@realnathanf",
      metric: "Followers",
      value: "11k",
      change: "+1099 Today",
      borderColor: "transparent 4px solid",
      borderColorGradient:
        "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) 1",
    },
    {
      id: 4,
      platform: "/images/icon-youtube.svg",
      user: "Nathan F.",
      metric: "Subscribers",
      value: 8239,
      change: "-144 Today",
      borderColor: "hsl(348, 97%, 39%) 4px solid",
    },
  ]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  function setIsDarkModeFunction(value) {
    setIsDarkMode(value);
  }

  function toggleDarkMode() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
  }

  return (
    <ThemeMode.Provider value={{ isDarkMode, setIsDarkModeFunction }}>
      <div
        className={
          isDarkMode ? "dark-mode-main-container" : "light-mode-main-container"
        }
      >
        <header>
          <div className="title-followers">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <hr></hr>
          <div id="darkMode">
            <p>Dark Mode</p>
            <div id="darkModeBTN">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </header>

        <div className="followers-wrapper">
          {followers.map((item) => {
            const isPositive = item.change.includes("+");
            const chanValue = item.change.replace(/^\+|^-/, "").trim();
            const style = {
              borderTop: item.borderColor,
              borderImage: item.borderColorGradient,
            };

            return (
              <div
                key={item.id}
                className={`${item.className} ${
                  isDarkMode ? "dark-card" : "light-card"
                }`}
                style={style}
              >
                <div id="title1">
                  <img src={item.platform} alt="not-found" />
                  <p>{item.user}</p>
                </div>
                <div>
                  <h1>{item.value}</h1>
                  <p id="metric">{item.metric}</p>
                </div>
                <span
                  id="change"
                  style={{ color: isPositive ? "#1db489" : "#dc414c" }}
                >
                  {isPositive ? "▲" : "▼"} {chanValue}
                </span>
              </div>
            );
          })}
        </div>

        <EngagementComponent isDarkMode={isDarkMode} />
      </div>
    </ThemeMode.Provider>
  );
}

export default App;
