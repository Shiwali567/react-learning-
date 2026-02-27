import { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [rating, setRating] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message || !rating) {
      alert("please enter the details ❌");
    } else {
      alert("Feedback submitted successfully ✅ ");
      setName("");
      setMessage("");
      setRating("0");
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Enter you name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>{" "}
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter the message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </div>

        <div>
          {" "}
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">select rating</option>
            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐⭐</option>
            <option value="3">3 ⭐⭐⭐</option>
            <option value="4">4 ⭐⭐⭐⭐</option>
            <option value="5">5 ⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <div>
          {" "}
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
