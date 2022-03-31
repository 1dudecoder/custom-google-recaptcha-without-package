import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(false);


  // useEffect(() => {
  //   const scriptag = document.createElement("script");
  //   scriptag.src = "https://www.google.com/recaptcha/api.js";
  //   scriptag.addEventListener("load", () => setCount(true));
  //   document.body.appendChild(scriptag);
  // }, []);

  {
    /* <div className="g-recaptcha"  data-sitekey="6LfNOzAfAAAAALRTPDkAN1kzPJ1fl7ufDGozi2YC"
      data-callback="onSubmit" ></div> */
  }

  const [name, setName] = React.useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    window.grecaptcha.ready(function() {
      window.grecaptcha.execute('6LcqYDEfAAAAAJUvkrZ-uaq3tSTz3-8U4tAKO3Zq', {action: 'submit'}).then(function(token) {

        if(token){
          console.log("user token", token)
        }

      });
    });
  }

  return (
    <div className="App">
      <h1>Google reCAPTHA Demo</h1>
      <div>
        <h4>This form is powered by reCAPTCHA</h4>
        <form id="demo-form">
          <input
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <br />
          <button data-action='submit' onClick={(e) => onFormSubmit(e)}>
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}

export default App;
