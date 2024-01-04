import {tutorialType} from "../types"
import Link from "next/link";

export function Dropdown({ tutorialData }: { tutorialData: Array<tutorialType> }) {

    return (
        <>
            <ul className="pt-2">
                {tutorialData.map((tutorial, index) =>
                    (
                        <li key={index} className="pt-1">
                            <Link href={tutorial.path} className="text-l"> {tutorial.title} </Link>
                        </li>
                    )
                )}
            </ul>
        </>

    )

}