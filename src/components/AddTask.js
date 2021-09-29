import { useState } from "react";

const AddTask = ({ onSubmitForm }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (text === "") {
      alert("Enter Name...");
      return;
    }
    onSubmitForm({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="Task">Task</label>
        <input
          type="text"
          placeholder="Enter Task Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="Day and Time">Day & Time</label>
        <input
          type="text"
          placeholder="Enter Date and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control  form-control-check">
        <label htmlFor="Set Reminder">Remind me</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
