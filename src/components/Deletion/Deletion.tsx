import { useState } from "react"
import { DeletionEmail } from "./DeletionEmail"

export function Deletion(): JSX.Element {

    const [chosenAccount, setChosenAccount] = useState<string>("")

    return <div>
        <h1>Data deletion</h1>
        <h4>Use this page to request your data is deleted</h4>
        {chosenAccount == "" ? <p>Which account would you like to request deletion of?</p> : <></>}
        {chosenAccount == "" ? <button onClick={()=> setChosenAccount("Instabook")}>Instabook</button> : <></>}
        {chosenAccount == "" ? <button onClick={()=> setChosenAccount("Facegram")}>Facegram</button> : <></>}
        {chosenAccount != "" ? <DeletionEmail account={chosenAccount} /> : <></>}
    </div>
}