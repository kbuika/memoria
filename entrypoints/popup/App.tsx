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

  function getTodayInFormat() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

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
          startDate={getTodayInFormat()} //TODO: Change this to the date the user wants to be reminded
          endDate={getTodayInFormat()} //TODO: Change this to the date the user wants to be reminded
          startTime="12:15" //TODO: Change this to the time the user wants to be reminded
          endTime="12:30" //TODO: Change this to the time the user wants to be reminded
          timeZone="Africa/Nairobi"
          description={`This is a reminder to check out the website -- ${currentTabUrl}`}
        ></AddToCalendarButton>
      </div>
    </div>
  );
}

export default App;
