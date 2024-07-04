
export default function Hero() {
    return (
        <>
            <div className="bg-white w-full start-0">
            <section class="bg-white dark:bg-gray-900">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <a href="#">
                            <div class="flex max-w-max mb-12 items-center bg-cream text-violet-700 font-semibold rounded-full text-sm px-5 text-center" role="">
                            <button type="button" className="text-violet-700 bg-cream focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-crem dark:focus:ring-violet-800">
                            More than Faster
                            </button>
                                <img src="/images/cherry.png" alt=""/>
                            </div>
                        </a>
                        <h1 class="max-w-2xl mb-4 text-4xl font-utama font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Claim Best R on <br></br>Fast <span  class="text-violet-700 font-hero italic">
                            Food</span> & <br></br><span class="text-violet-700  font-hero italic">
                            Restaurants</span> </h1>
                        <p class="max-w-2xl mb-6 font-poppins text-text_ utama lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Our job is to filling your tummy with delicious food <br></br>
                            and  with fast and free delivery</p>
                        <div class="flex items-center">
                            <button type="button" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                            Get started
                            </button>
                            <a href="#" class="dark:text-white inline-flex items-center justify-center text-base font-medium text-center">
                                <button type="button" class="text-white bg-kuning hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                                    <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 22">
                                        <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"/>
                                    </svg>
                                    <span class="sr-only">Icon description</span>
                                </button>
                                <p class="p-2">Watch  Video</p>
                            </a> 
                        </div>    
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="/images/hero.png" alt=""/>
                    </div>                
                </div>
            </section>
        </div>
        </>
    )
}
