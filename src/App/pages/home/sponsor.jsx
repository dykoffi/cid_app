import React from "react"

import Mtn from "../../assets/images/mtn.jpg"
import Moov from "../../assets/images/moov.png"
import Fjn from "../../assets/images/fjn.png"
import Orange from "../../assets/images/orange.png"
// import Poste from "../../assets/images/poste.png"
import Ansut from "../../assets/images/ansut.jpg"
import Artci from "../../assets/images/artci.jpg"
const Sponsor = () => {

    return (
        <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg lg:max-w-2xl mx-auto mb-12 text-center">
            <span className="text-xs font-semibold text-indigo-500 uppercase">
              Nos partenaires
            </span>
            <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
              Ils nous accompagne
            </h2>
            <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
              La CID est en partenariat avec des structures publiques et privées afin de les aider dans l'accomplissment de leurs projets fou
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
              <div className="py-12">
                <img
                  className="h-14 mx-auto"
                  src={Artci}
                  alt="Logo de l'artci"
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
              <div className="py-12">
                <img
                  className="h-14 mx-auto"
                  src={Ansut}
                  alt="Logo de l'ANSUT"
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
              <div className="py-12">
                <img
                  className="h-14 mx-auto"
                  src={Fjn}
                  alt="Logo de FJN"
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
              <div className="py-12">
                <img
                  className="h-14 mx-auto"
                  src={Moov}
                  alt="Logo de Moov africa"
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
              <div className="py-12">
                <img
                  className="h-14 mx-auto"
                  src={Mtn}
                  alt="Logo de MTN CI"
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
              <div className="py-12">
                <img
                  className="h-14 mx-auto"
                  src={Orange}
                  alt="Logo de Orange CI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default Sponsor