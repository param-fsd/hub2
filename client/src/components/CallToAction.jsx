import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col lg:flex-row p-5 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-blue-50 dark:bg-gray-800'>
        <div className="flex-1 justify-center flex flex-col p-5">
            <h2 className='text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white'>
                Join Our Telegram Channel!
            </h2>
            <p className='text-gray-600 dark:text-gray-300 my-4 text-sm lg:text-base'>
                Stay updated with daily offers from all your favorite e-commerce platforms. 
                Never miss a deal again with our regular updates.
            </p>
            <Button className='bg-teal-500 text-white font-semibold py-2 px-4 rounded-tl-xl rounded-bl-none mx-auto lg:mx-0'>
                <a href="https://t.me/JDShoppingMall" target='_blank' rel='noopener noreferrer'>
                    Join JD Shopping Mall
                </a>
            </Button>
        </div>
        <div className="flex-1 p-5 lg:p-7 flex justify-center">
            <img src="https://cdn.glitch.global/06499fef-8f4a-4606-99ef-19ec0e68b837/5554894_4433.jpg?v=1719064623264" alt="Telegram Logo" className='w-3/4 lg:w-1/2 h-auto rounded-xl' />
        </div>
    </div>
  );
}
