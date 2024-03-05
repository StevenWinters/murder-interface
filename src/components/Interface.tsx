import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Interface = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInput = () => {
    if (value.toLowerCase() === "canape") return navigate("footage");
    return setError(true);
  };

  return (
    <section className="flex flex--column justify--center align--center block interface">
      <div className="container">
        <div className="interface__question">
          <h1>9/3 &#247; 3/10 = ?</h1>
          <p>Note: Round off to the nearest hundredths (if in decimal form).</p>
        </div>
        <div>
          <p className="input__heading">Answer:</p>
          <div className="flex justify--between align--center gap input__container">
            <input
              type="text"
              className="input"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button className="btn btn--primary" onClick={handleInput}>
              <FaArrowUp />
            </button>
          </div>
          <span className={`error ${error && "active"}`}>
            Hint: Veritas Product <FaLightbulb />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Interface;
