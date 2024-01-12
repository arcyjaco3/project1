import React from 'react';
import imageBackground from '../assets/images/gym1.jpg';

const cardsData = [
    {
        title: 'Free',
        price: '$0',
        storage: '200 GB',
        description: ['Send up to 2 GB', 'No need to verify'],
        buttonText: 'Get started',
        className: 'bg-blue-700 text-white',
    },
    {
        title: 'Pro',
        price: '$3.69',
        storage: '200 GB',
        description: ['Encrypted file storage', 'Access your files from any device', 'Get access to all our services'],
        buttonText: 'Get started',
        className: 'bg-blue-700 text-white',
    },
    {
        title: 'Premium',
        price: '$8.99',
        storage: '2 TB',
        description: ['Encrypted file storage', 'Access your files from any device', 'Get access to all our services'],
        buttonText: 'Get started',
        className: 'bg-blue-700 text-white',
    },
];

const About = () => {
    return (
        <>
            <div
                className="w-full h-full flex bg-cover bg-center bg-fixed"
                style={{
                    background: `url(${imageBackground})`,
                    minHeight: '100%',
                }}
            >
                <div className="w-full h-full">
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <div className="relative flex flex-col justify-center items-center min-h-screen">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cardsData.map((card, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col justify-between align-center max-w-sm h-full rounded overflow-hidden shadow-lg m-10 p-6 text-white ${card.className}`}
                                    >
                                        <div className="text-center font-bold text-2xl mb-4">{card.title}</div>
                                        <ul className="text-base mb-4">
                                            {card.description.map((item, i) => (
                                                <li key={i} className="mb-4">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="font-bold text-lg mb-2">{card.price}</p>
                                        <p className="text-base mb-4">{card.storage}</p>
                                        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            {card.buttonText}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
