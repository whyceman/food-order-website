import { categories } from "../data/Data";

const Category = () => {
    return (
        <div className="w-[95%] mx-auto px-4 py-12">
            <h1 className="text-orange-600 text-4xl text-center font-bold">Top Rated Menu Items</h1>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 py-6 ">
                {categories.map((item) => (
                    <div key={item.id} className="bg-gray-100 rounded-lg flex justify-between items-center p-4">
                        <h2 className="font-bold sm:text-xl">{item.name}</h2>
                        <img src={item.image} alt={item.name} className='w-20' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category; g