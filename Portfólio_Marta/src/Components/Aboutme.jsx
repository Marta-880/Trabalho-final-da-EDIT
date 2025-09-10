import { Link } from "react-router";

function AboutMe() {
    return <>
    <div className="body">
       <div className="closer">
        <h1 className="title">About Me</h1>
        <p>My name is Marta. I'm 24 years old and I'm from Portugal.</p>
        <p>I started my journey when i was 20 years old, at thar time, I was studying in college for a degree i didn't enjoy so i had to make a big decision: whether i wanted to presue it or not.</p> 
        <p>That's around the time i discover Graphic Desgin. I immediatly fell in love with it and knew it was something i would much rather do! So I made the decision to leave and start fresh.</p>
        <p>I made a Graphic Design course and felt much better in life and with myself. But there was still something missing...</p>
        <p>When i was stuck at 20 studying that degree that wasn't for me, there was something that i found out. The degree was Electrotechnical Engeneering. (Yes, super close to Design!) But, eventhough i didn't like the majority of it, there was something that did sparkle my intrests. That was programing. </p>
        <p>I decided then to combine the best of both worlds, and try my luck in Front-end Engeneering.</p>
        <p>I loved it! So now, here I am!</p>
       </div>
       <div className="imagemcentrada"> 
            <img src="../../maispochaco.png" alt="me!" className="catpic"></img>
        </div>
    </div>
    </>
}

export default AboutMe