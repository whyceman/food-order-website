import { useState } from 'react';
import { data } from '../data/Data.js'

const Foods = () => {
    const [foods, setFoods] = useState(data)

    const handleFilterType = (category) => {
        setFoods(
            data.filter(food => food.category === category)
        )
    }

    const handleFilterPrice = (price) => {
        setFoods(
            data.filter(food => food.price === price)
        )
    }
    return (
        <div className="w-[95%] mx-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
            <div className="flex flex-col lg:flex-row justify-between">
                <div>
                    <p className="font-bold text-gray-700">Filter Types</p>
                    <div className="flex flex-wrap">
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" onClick={() => setFoods(data)}>All</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" onClick={() => handleFilterType('burger')}> Burgers</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" onClick={() => handleFilterType('pizza')}>Pizza</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" onClick={() => handleFilterType('salad')}>Salad</button>
                        <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" onClick={() => handleFilterType('chicken')}> Chickens</button>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-gray-700">Filter Prices</p>
                    <div className="flex flex-wrap">
                        <button className="m-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" onClick={() => handleFilterPrice('$')}>$</button>
                        <button className="m-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" onClick={() => handleFilterPrice('$$')}> $$</button>
                        <button className="m-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" onClick={() => handleFilterPrice('$$$')}>$$$</button>
                        <button className="m-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" onClick={() => handleFilterPrice('$$$$')}>$$$$</button>

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
                {foods.map((food, i) => (
                    <div key={i} className='border shadow-lg hover:scale-105 duration-300 rounded-xl overflow-hidden'>
                        <img src={food.image} alt={food.name}
                            className='w-full h-[200px] object-cover '
                        />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{food.name}</p>
                            <p > <span className='bg-orange-500 text-white p-1 rounded-full'>{food.price}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Foods;