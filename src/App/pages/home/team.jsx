import React from "react"
import Asseu from "../../assets/images/asseu.jpg"
import Behman from "../../assets/images/behman.jpg"
import Diaby from "../../assets/images/diaby.jfif"
import Kamagate from "../../assets/images/kamagate.jfif"
import People from "../../components/people"
// import Franklin from "../../assets/images/franklin.jpg"

const Team = () => {

    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="max-w-lg lg:max-w-2xl mx-auto text-center mb-12 lg:mb-16">
                    <span className="text-xs font-semibold text-indigo-500 uppercase">
                        Nos Chercheurs
                    </span>
                    <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                        Ils encadrent et pilotent tous nos projets
                    </h2>
                    <p className="text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                        Les enseignants chercheurs de la direction de la recherche et de l'Innovation Technologique participent activement à l'encadrement des projets réalisés par nos étudiants.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <People image={Asseu} nom={"Prof ASSEU Olivier"} poste={"Directeur de RIT"} />
                    <People image={Diaby} nom={"Prof DIABY Moustapha"} poste={"Recherche"} />
                    <People image={Kamagate} nom={"Prof KAMAGATE Aladji"} poste={"Recherche"} />
                    <People image={Behman} nom={"Dr Behman"} poste={"Recherche"} />
                </div>
            </div>
        </section>

    )
}

export default Team