import "./Main.css"
import Footer from "./Footer"
import Image from "next/image"
import Header from "../../public/Rectangle 90 (2).png"
import Icon from "../../public/Mail.png"
import Icon2 from "../../public/linkedin.png"





export default function Main() {
return (
    <div className="Container">
   
    <main>
        <Image src={Header} alt="header-photo" height={317} ></Image>
        <h1>Laura Smith</h1>
        <h3>Frontend Developer</h3>
        <h5>laurasmith.website</h5>
        <div className="button-container">
        <button className="button-one" >
        <Image src={Icon} alt="Email" height={16}/> E-Mail</button>
        <button className="button-two">
        <Image src={Icon2} alt="Linkedin" height={16}/>LinkedIn</button>
        </div>
        <div className="about">
        <h2>About</h2>
        <p>I am a frontend developer with a particular interest 
            in making things simple and automating daily tasks. 
            I try to keep up with security and best practices, 
            and am always looking for new things to learn.</p>
        <h2 className="interests">Interests </h2>
        <p>Food expert. Music scholar. Reader. Internet 
            fanatic. Bacon buff. Entrepreneur. Travel geek. 
            Pop culture ninja. Coffee fanatic.</p>
        </div>
    </main>
    <Footer />
    
    
    </div>
     
)

}