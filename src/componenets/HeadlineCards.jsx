import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'

const Headlinecards = () => {
    return (
        <div className="w-[95%] mx-auto px-4 py-12 grid md:grid-cols-3  gap-6">
            <div className="relative rounded-xl overflow-hidden">
                <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                    <p className='text-2xl font-bold px-2 pt-4'>Sun's Out,BOGO's Out</p>
                    <p className='px-2'>through 6/24</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>Order now</button>
                </div>
                <img src={food1} alt="/" className='max-h-[160px] md:max-h-[200px] w-full object-cover' />
            </div>
            <div className="relative rounded-xl overflow-hidden">
                <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                    <p className='text-2xl font-bold px-2 pt-4'>New Restaurant</p>
                    <p className='px-2'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>Order now</button>
                </div>
                <img src={food2} alt="/" className='max-h-[160px] md:max-h-[200px] w-full object-cover' />
            </div>
            <div className="relative rounded-xl overflow-hidden">
                <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                    <p className='text-2xl font-bold px-2 pt-4'>We Deliver Desserts</p>
                    <p className='px-2'>through 6/24</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>Order now</button>
                </div>
                <img src={food3} alt="/" className='max-h-[160px] md:max-h-[200px] w-full object-cover' />
            </div>




        </div>
    );
}

export default Headlinecards;