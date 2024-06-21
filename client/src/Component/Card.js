import React from 'react';

export default function Card({ data, onCardClick, id }) {
    const handleCardClick = () => {
        onCardClick(id);
    };

    return (
        <div className="p-4 transition-transform duration-300 transform bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 w-[400px] h-[400px] flex flex-wrap object-cover" onClick={handleCardClick}>
            <div className="relative">
                <img src={data.productImage} alt="product" className="object-cover w-full h-64 rounded-lg cursor-pointer" loading="lazy" />
                {data.assuredImage && <img src={data.assuredImage} alt="assured" className="absolute w-12 top-2 right-2" />}
            </div>
            <div className="flex flex-col justify-between mt-4">
                <div>
                    <p className="text-lg font-semibold text-gray-800">{data.name}</p>
                    <p className="text-gray-600">{data.description}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-500">{data.discount}</p>
                    <p className="text-lg font-semibold">{data.price}</p>
                </div>
                <p className="mt-2 text-sm text-gray-600">{data.bottomText}</p>
            </div>
        </div>
    );
}
