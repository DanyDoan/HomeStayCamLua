import "../assets/RentPage.css"

import { useState, useEffect } from "react"

// Components
import RentSumary from "../components/RentSumary"

function RentPage(){

    return(
        <main>
            <RentSumary/>
            <RentSumary/>
        </main>
    )
}

export default RentPage