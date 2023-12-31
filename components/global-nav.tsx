import Image from "next/image";
import Logo from "../public/interactivegateslogo.svg";

export default function GlobalNav() {

    return (
        <div className="flex flex-row">
            <Image src={Logo} alt="Company Logo"/>
            <div>
                <h1>React Gates</h1>
            </div>
        </div>
    )

}