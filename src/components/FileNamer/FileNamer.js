import React, { useEffect, useState } from "react";
import "./FileNamer.css";

const FileNamer = () => {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);

  const validate = (event) => {
    if (/\*/.test(name)) {
      event.preventDefault();
      setAlert(true);
      return;
    }
    setAlert(false);
  };

  useEffect(() => {
    //run code when anything happens in the array changes
    const handleWindowClick = () => setAlert(false);
    if (alert) {
      window.addEventListener("click", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
    }
    return () => window.removeEventListener("click", handleWindowClick); // run code when the component unmounts
  }, [alert, setAlert]);

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview:{name}.js</h2>
      </div>
      <form action="">
        <label htmlFor="">
          <p>Name:</p>
          <input
            autoComplete="off"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            // onFocus={() => setAlert(true)}
            // onBlur={() => setAlert(false)}
          />
        </label>
        <div className="information-wrapper">
          <button
            className="information"
            onClick={() => setAlert(true)}
            type="button"
          >
            more information
          </button>
          {alert && (
            <div className="popup">
              <span role="img" aria-lable="allowed">
                ✅
              </span>
              Alphanumeric Characters
              <br />
              <span role="img" aria-label="not allowed">
                ⛔️
              </span>
              *
            </div>
          )}
        </div>
        <div>
          <button onClick={validate}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default FileNamer;
