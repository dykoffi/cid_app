import React from "react"
import Fond from "../../assets/images/fondflou.png"

const Join = () => {

    return (
        <section className="px-10 py-20 bg-cover" style={{backgroundImage:`url(${Fond})`}}>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                            <span className="text-xs font-semibold text-indigo-50 uppercase">
                                Nous Rejoindre
                            </span>
                            <h2 className="mt-2 text-white mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                                Postuler
                            </h2>
                            <p className="mb-8 text-indigo-50 text-base leading-relaxed lg:text-xl lg:leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                                aliquet orci.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="max-w-md mx-auto py-6 px-8 bg-indigo-50 text-center rounded-lg">
                            <h3 className="mb-2 text-2xl font-bold font-heading">
                                Sign up to our newsletter
                            </h3>
                            <p className="mb-4 text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <form action="#">
                                <input
                                    className="mb-4 w-full pl-3 py-3 bg-white rounded"
                                    type="email"
                                    placeholder="Type your e-mail"
                                />
                                <button className="w-full inline-block px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200">
                                    Action
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Join