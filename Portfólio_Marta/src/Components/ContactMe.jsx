import { useState } from 'react';


function ContactMe(){
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");

function handleNameChange(e) {
    setName(e.target.value);
    console.log("nome é " + name);
  }

function handleSubjectChange(e) {
    setSubject(e.target.value);
    console.log("subject é " + subject);
  }
function handleEmailChange(e) {
    setEmail(e.target.value);
    console.log("email é " + email);
  }

  return (
    <div className='body'>
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleNameChange}
        />
      </label>
      
      <br />

      <label>Enter the email subject:
        <input 
        type="text" 
        value={subject} 
        onChange={handleSubjectChange} />
      </label>

       <br />

      <label>Your email:
        <input 
        type="text" 
        value={email} 
        onChange={handleEmailChange} />
      </label>

      <br/>

      <select name='Work Area'>
        <option value="Desgin">Design</option>
        <option value="Front_end">Front-end</option>
      </select>

    </form>
        <div>
            <h3>From: {email}</h3>
            <h3>Subject: {subject}</h3>
            <p>Content: {`Hi! I'm ${name}. I'm interested in hiring you for a ${type} project! It's something like ${content}.`}</p>
        </div>
    </div>
  )
}

export default ContactMe;
