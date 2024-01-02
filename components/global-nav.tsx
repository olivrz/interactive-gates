import Image from "next/image";
import Logo from "../public/interactivegateslogo.svg";

export default function GlobalNav() {

    return (
        <div className="flex flex-row">
            <Image src={Logo} alt="React Gates Logo" className="w-1/8" objectFit="contain" objectPosition="center"/>
            <div>
                <h1>React Gates</h1>
            </div>
        </div>
    )

}