import React from "react"
import Head from "./head"
import Footer from "./footer"
import Map from "./map"
import Sponsor from "./sponsor"
import Team from "./team"

const index = () => {

    return (
        <div className="">
            <Head />
            <Team />
            <Map />
            <Sponsor />
            <Footer />
        </div>
    )
}

export default index