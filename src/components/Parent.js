import  React,{useState} from "react"
import DisplayData from "./DisplayData"
import Form from "./Form"
function Parent(){
  const [firstName, setFirstName] = useState("John")
  const [lastName, setLastName] = useState("Henry")
  const [newsletter, setNewsLetter] = useState(false)
  function handleFirstNameChange(event)
  {
    setFirstName(event.target.value)
  }
  function handleLastNameChange(event){
    setLastName(event.target.value)
  }
  function handleNewsLetterChange(event){
    setNewsLetter(event.target.checked)
  }
  return (
    <div>
    <Form 
      firstName={firstName}
      lastName={lastName}
      newsletter={newsletter}
    handleFirstNameChange={handleFirstNameChange}
     handleSecondNameChange={handleLastNameChange}
     handleNewsLetterChange={handleNewsLetterChange}/>
     <DisplayData firstName={firstName} lastName={lastName}/>
     </div>
  )
}export default Parent;
