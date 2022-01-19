import React from "react"
import Fond from "../../assets/images/fond.jpg"

const Head = () => {

    return (
        <div className="w-screen h-96 bg-cover" style={{backgroundImage:`url(${Fond})`}}>
        </div>
    )
}

export default Head