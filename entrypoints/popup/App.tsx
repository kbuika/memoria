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
      <div className="title-div flex items-center justify-center py-2">
        <img src={MemoriaLogo} alt="Memoria Logo" className="logo" />
        <h1 className="text-xl font-semibold">Memoria</h1>
      </div>
      <div className="card">
        <p className="mb-4 text-sm">
          <span style={{ fontWeight: 700 }}>Current Url: </span>
          <a href={currentTabUrl} className="underline underline-offset-2">{currentTabUrl}</a>
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
