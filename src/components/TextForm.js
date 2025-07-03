import React from "react";

export default function TextForm() {
  return (
    
    <div>
      <div className="mb-3">
        <label htmlFor="my_textbox" className="form-label">
          Enter Text To Analyze : 
        </label>
        <textarea
          className="form-control"
          id="my_textbox"
          rows="8"
        ></textarea>
        <br />
        <button className="btn btn-primary">Convert to uppercase</button>
      </div>
    </div>
  );
}
