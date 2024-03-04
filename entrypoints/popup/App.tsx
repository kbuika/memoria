import { useEffect, useState } from "react";
import "./App.css";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import MemoriaLogo from "../../assets/memoria.png";

function App() {
  const [currentTabUrl, setCurrentTabUrl] = useState("");
  useEffect(() => {}, []);
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    if (!tabs[0]) {
      console.log("No active tab");
      return;
    }
    const url = tabs[0].url;
    setCurrentTabUrl(url ?? "");
  });

  return (
    <div className="container">
      <div className="title-div">
        <img src={MemoriaLogo} alt="Memoria Logo" className="logo" />
        <h1 className="title">Memoria</h1>
      </div>
      <div className="card">
        <p>
          <span style={{ fontWeight: 700 }}>Current Url: </span>
          {currentTabUrl}
        </p>
        <AddToCalendarButton
          label="Set Reminder"
          name="Bookmark Reminder"
          options={["Apple", "Google"]}
          location={currentTabUrl}
          startDate="2024-03-05"
          endDate="2024-03-05"
          startTime="12:15"
          endTime="12:30"
          timeZone="Africa/Nairobi"
          description={`This is a reminder to check out the website -- ${currentTabUrl}`}
        ></AddToCalendarButton>
      </div>
    </div>
  );
}

export default App;
