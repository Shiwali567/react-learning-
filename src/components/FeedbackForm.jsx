import { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setsubmitted] = useState(false);
  const [rating, setRating] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message || !rating) {
      alert("please enter the details ❌");
    }
    setsubmitted(true);
  };
  const handleReset = () => {
    setName("");
    setMessage("");
    setRating("");
    setsubmitted("");
  };
  if (submitted) {
    return (
      <div>
        <h3> thankyou,{name}</h3>
        <p> feedback:{message}</p>
        <p> Rating: {rating}</p>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onRating={handleSubmit}
    >
      <div>
        {" "}
        <input
          type="text"
          placeholder="Enter you name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
      </div>

      <div>
        <textarea
          placeholder="Enter the message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
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
        <button style={{ marginTop: "10px" }} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
