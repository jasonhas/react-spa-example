import { FaSearch } from "react-icons/fa"

const NotFound = () => {
    return (
    <form action="https://www.google.com">
        <div class="dark:bg-transparent">
            <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
                <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                    <h1 className="text-center text-7xl font-black pb-4">404</h1>
                    <h2
                        class="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                        Let's not stress about
                        <span class="text-blue-700 dark:text-violet-500"> what's missing</span>
                    </h2>
                    <p
                        class="mt-5 sm:mt-10 lg:w-10/12 text-gray-500 dark:text-gray-400 font-normal text-center text-xl ">
                        Try searching for something and let's see what you find.
                    </p>
                </div>
                <div class="flex w-11/12 md:w-8/12 xl:w-6/12">
                    <div class="flex rounded-md w-full ">
                        <input type="text" name="q" id="query" onkeypress="return search(event)"
                            class="w-full p-3 rounded-md rounded-r-none border-2 border-gray-300 placeholder-current dark:bg-gray-500  dark:text-gray-300 dark:border-none "
                            placeholder="Your Search Here" />
                        <button
                            class="inline-flex items-center gap-2 bg-blue-700 text-white   text-lg font-semibold py-3 px-6 rounded-r-md">
                            <span>Find</span>
                            <span>
                                <FaSearch/>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    )
}

export default NotFound