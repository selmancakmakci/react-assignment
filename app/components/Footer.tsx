import "./Footer.css"
import Image from "next/image"
import Face from "../../public/Facebook Icon.png"
import Git from "../../public/GitHub Icon.png"
import Ins from "../../public/Instagram Icon.png"
import Tw from "../../public/Twitter Icon.png"

export default function Main() {
    return (
        <>
        <footer>
        <Image src={Tw} alt="Twitter"></Image>
        <Image src={Face} alt="facebook"></Image>
        <Image src={Ins} alt="instagram"></Image>
        <Image src={Git} alt="github"></Image>
        </footer>
        </>
    )
    
    }