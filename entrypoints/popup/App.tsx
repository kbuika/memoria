import { useEffect, useState } from "react";
import "./App.css";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import MemoriaLogo from "../../assets/memoria.png";
import { DateTimePicker } from "@/components/date-time-picker";
import { DateValue } from "react-aria";

function App() {
  const [currentTabUrl, setCurrentTabUrl] = useState("");
  const [reminderDateTime, setReminderDateTime] = useState<DateValue | null>(null);

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
          <a href={currentTabUrl} className="underline underline-offset-2">
            {currentTabUrl}
          </a>
        </p>
        <div className="w-[80%] p-4 space-y-2">
          <div className="w-full">
            <DateTimePicker granularity={"minute"} onChange={(e: DateValue) => setReminderDateTime(e)}/>
          </div>
          <p>{reminderDateTime?.toString()}</p>
        </div>
        <AddToCalendarButton
          label="Set Reminder"
          name="Bookmark Reminder"
          options={["Apple", "Google"]}
          location={currentTabUrl}
          startDate={reminderDateTime?.toString().split("T")[0] ?? ""}
          endDate={reminderDateTime?.toString().split("T")[0] ?? ""}
          startTime={reminderDateTime?.toString().split("T")[-1] ?? "12:00"}
          endTime={reminderDateTime?.toString().split("T")[-1] ?? "12:00"}
          timeZone="Africa/Nairobi"
          description={`This is a reminder to check out the website -- ${currentTabUrl}`}
          disabled={reminderDateTime === null}
        ></AddToCalendarButton>
      </div>
    </div>
  );
}

export default App;
