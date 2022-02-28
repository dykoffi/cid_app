import React from "react"
import Head from "./head"
import Footer from "./footer"
import Map from "./map"
import Sponsor from "./sponsor"
import Team from "./team"
import Join from "./join"

const index = () => {

    return (
        <div className="">
            <Head />
            <Join />
            <Team />
            <Map />
            <Sponsor />
            <Footer />
        </div>
    )
}

export default index