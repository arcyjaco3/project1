import React from 'react';

const TrainerSection = ({ title, description, image, reverse }) => {
    return (
        <div className={`max-w-screen-lg mx-auto flex flex-col md:flex-row items-center mb-96 justify-center h-full px-4 bg-emerald-300 ${reverse && 'md:flex-row-reverse'}`}>
            <div>
                <img
                    src={image}
                    alt="img"
                    className="rounded-2xl mx-auto w-2/3 md:w-full max-w-xl bg-transparent"
                />
            </div>
            <div className="flex flex-col justify-center h-full mx-5">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">{title}</h2>
                <p className="text-gray-500 py-4 max-w-md">{description}</p>
            </div>
        </div>
    );
}

export default TrainerSection;
