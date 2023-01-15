import React from "react";
function Form(
  {firstName,
  lastName,
  newsletter,
  handleFirstNameChange,
  handleSecondNameChange,
  handleNewsLetterChange}
){
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName}/>
      <input type="text" onChange={handleSecondNameChange} value={lastName}/>
      <label htmlFor="newsletter">Submit to our newsletter?</label>
        <input
          type="checkbox"
          id="newsletter"
          onChange={handleNewsLetterChange}
          checked={newsletter}/>
      <button type="submit">Submit</button>

    </form>
  )
}
export default Form;