import React from "react"
import Logo from "../../assets/images/logoCidBleu.png"

const Footer = () => {

    return (
        <section className="py-20 px-14">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-3/5 flex flex-wrap">
                        <div className="w-1/2 lg:w-1/4 mb-8">
                            <h3 className="mb-4 text-lg font-bold font-heading">Organisation</h3>
                            <ul className="text-sm">
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        About Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Careers
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Press
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-1/4 mb-8">
                            <h3 className="mb-4 text-lg font-bold font-heading">Legal</h3>
                            <ul className="text-sm">
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Terms
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        About Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Team
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Privacy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-1/4 mb-8">
                            <h3 className="mb-4 text-lg font-bold font-heading">Ressources</h3>
                            <ul className="text-sm">
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Services
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Projets
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-gray-500 hover:text-gray-700" href="#">
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-first lg:order-last mb-10 lg:mb-0 w-full lg:w-2/5">
                        <h3 className="mb-4 text-lg font-bold font-heading">Nous ecrire</h3>
                        <p className="mb-5 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <input
                            className="w-full lg:w-2/3 mb-4 pl-4 py-3 mr-4 border rounded"
                            type="email"
                            placeholder="Entrez votre adresse email"
                        />
                        <button className="inline-block px-5 py-3 text-sm bg-gray-500 hover:bg-gray-600 text-white font-semibold border border-gray-500 hover:border-gray-600 rounded transition duration-200">
                            Envoyer
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-4 lg:mt-16 mb-8 border-b border-gray-50" />
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                        <a className="text-gray-600 text-2xl leading-none" href="#">
                            <img
                                className="h-8"
                                src={Logo}
                                alt
                                width="auto"
                            />
                        </a>
                        <p className="hidden lg:block mt-3 text-sm text-gray-500">
                            Tous droits réservés. © Cellule d'Innovation et de Développement.
                        </p>
                    </div>
                    
                    <p className="lg:hidden text-sm text-gray-500">
                        Tous droits réservés. © Cellule d'Innovation et de Développement.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Footer