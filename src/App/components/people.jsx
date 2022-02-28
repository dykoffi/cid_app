import React from "react";
import { motion } from "framer-motion"

const People = ({ nom, image, poste, shadow }) => {

    return (
        <motion.div
            whileHover={{ scale: 0.8, transform: "grayscale(15%)" }}
            whileTap={{ scale: 0.9 }}
            className={`w-full md:w-1/2 lg:w-1/4 ${shadow && "shadow-lg"}`}>
            <div className="bg-gray-50 rounded-lg text-center">
                <img
                    className="w-full h-96 mx-auto mb-6 object-cover"
                    src={image}
                    alt={`image de ${nom}`}
                />
                <h3 className="text-2xl text-gray-600 font-bold font-heading">{nom}</h3>
                <p className="mt-1 mb-6 text-lg text-gray-400">{poste}</p>
            </div>
        </motion.div>
    )
}

export default People