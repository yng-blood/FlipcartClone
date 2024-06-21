import React from 'react';
import Card from './Card';
import CardData from './CardData';
import Nav2 from './Nav2'
import { useNavigate } from 'react-router-dom';
export default function Page2() {
    const handleCardClick = (id) => {
        navigate(`/details/${id}`);
    };
    const navigate = useNavigate();
    return (
        <div className='flex flex-wrap'>
           <section>
           <Nav2/>
           </section>

            {/* Card */}
           <section className='mt-[5%]'>
           <div className='flex flex-wrap w-full gap-4 overflow-hidden justify-evenly size-min'>
            {CardData.map((data, index) => (
            <Card key={index} data={data} id={data.id} onCardClick={handleCardClick} />
        ))}

            </div>
           </section>
        </div>
    );
}
