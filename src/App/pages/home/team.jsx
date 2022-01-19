import React from "react"
import Asseu from "../../assets/images/asseu.jpg"
import Behman from "../../assets/images/behman.jpg"
import Diaby from "../../assets/images/diaby.jfif"
import Kamagate from "../../assets/images/kamagate.jfif"
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
                        Lorem ipsum dolor sit amet consectutar domor at elis
                    </h2>
                    <p className="text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="w-full md:w-1/2 lg:w-1/4 shadow-lg">
                        <div className="pb-4 bg-gray-50 rounded-lg text-center">
                            <img
                                className="w-full h-96 mx-auto mb-6 object-cover"
                                src={Asseu}
                                alt="Image du professeur Asseu Olivier"
                            />
                            <h3 className="text-2xl font-bold font-heading">Prof ASSEU Olivier</h3>
                            <p className="mt-1 mb-6 text-lg text-gray-400">Directeur de IRT</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="pb-4 bg-gray-50 rounded-lg text-center">
                            <img
                                className="w-full h-96 mx-auto mb-6 object-cover"
                                src={Diaby}
                                alt="Image du professeur Diaby Moustapha"
                            />
                            <h3 className="text-2xl font-bold font-heading">Prof DIABY Moustapha</h3>
                            <p className="mt-1 mb-6 text-lg text-gray-400">Rechercher & Partenariat</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 shadow-lg">
                        <div className="pb-4 bg-gray-50 rounded-lg text-center">
                            <img
                                className="w-full h-96 mx-auto mb-6 object-cover"
                                src={Kamagate}
                                alt="Image du professeur Kamagaté Aladji"
                            />
                            <h3 className="text-2xl font-bold font-heading">Prof KAMAGATE Aladji</h3>
                            <p className="mt-1 mb-6 text-lg text-gray-400">Recherche</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="pb-4 bg-gray-50 rounded-lg text-center">
                            <img
                                className="w-full h-96 mx-auto mb-6 object-cover"
                                src={Behman}
                                alt="Image du docteur Kamagaté Behman"
                            />
                            <h3 className="text-2xl font-bold font-heading">Dr KAMAGATE Behman</h3>
                            <p className="mt-1 mb-6 text-lg text-gray-400">Recherche</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-3">
                        <div className="pb-4 bg-gray-50 rounded-lg text-center">
                            <img
                                className="w-full h-96 mx-auto mb-6 object-cover"
                                src="plain-assets/images/indigo-600-square.png"
                                alt
                            />
                            <h3 className="text-2xl font-bold font-heading">Danny Bailey</h3>
                            <p className="mt-1 mb-6 text-lg text-gray-400">CEO &amp; Founder</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-3">
                        <div className="pb-4 bg-gray-50 rounded-lg text-center">
                            <img
                                className="w-full h-96 mx-auto mb-6 object-cover"
                                src="plain-assets/images/indigo-600-square.png"
                                alt
                            />
                            <h3 className="text-2xl font-bold font-heading">Danny Bailey</h3>
                            <p className="mt-1 mb-6 text-lg text-gray-400">CEO &amp; Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Team