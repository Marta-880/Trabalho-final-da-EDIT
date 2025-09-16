import { useState } from 'react';


function ContactMe(){
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [content, setContent] = useState("");


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
function handleTypeChange(e) {
    setType(e.target.value);
    console.log("Type é " + type);
  }
function handleContentChange(e) {
    setContent(e.target.value);
    console.log("Content é " + content);
  }

  return (
    <div className='body'>
    <form>
      <label>Enter your name:
        <input
          placeholder= "Marta"
          required
          className='input'
          type="text" 
          value={name}
          onChange={handleNameChange}
        />
      </label>
      
      <br /><br />

      <label>Enter the email subject:
        <input 
        required
        className='input'
        type="text" 
        value={subject} 
        onChange={handleSubjectChange} />
      </label>

       <br /><br />

      <label>Your email:
        <input 
        placeholder="abc@email.com"
        required
        className='input'
        type="text" 
        value={email} 
        onChange={handleEmailChange} />
      </label>

      <br/><br />

      <select name='Work Area' onChange={handleTypeChange} className='normalButton select'>
        <option value="Desgin">Design</option>
        <option value="Front_end">Front-end</option>
      </select>

      <br /><br />

      <label>A small text about what the project is about:
        <br />
        <textarea 
        placeholder='...'
        className='inputBig'
        type="text" 
        value={content} 
        onChange={handleContentChange} />
      </label>

      <br /><br />

      <button className="normalButton pinkButton" type="submit">Submit text!</button>

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
