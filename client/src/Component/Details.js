import React from 'react';
import { useParams } from 'react-router-dom';
import CardData from './CardData';
import Nav2 from './Nav2';

export default function Details() {
    const { id } = useParams();
    console.log('ID:', id);

    const product = CardData.find(item => item.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const { productImage, name, description, discount, price, assuredImage, bottomText } = product;

    return (
        <div>
          <div>
          <Nav2/>
          </div>
            {/* Card section ot product detail section */}
            <div className="flex flex-col items-center justify-center">
            <div className='mt-[12%]'>
                <img src={productImage} alt="product" className="max-h-96" />
            </div>
            <div>
                <h2 className="text-3xl font-bold">{name}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
                <p className="mt-2 text-gray-600">{discount}</p>
                <p className="mt-2 font-bold text-gray-900">Price: {price}</p>
                {assuredImage && <img src={assuredImage} alt="assured" className="mt-4" />}
                <p className="mt-4 text-gray-600">{bottomText}</p>
            </div>
        </div>
        </div>
    );
}
