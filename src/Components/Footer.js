
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="bg-black text-white mt-5 dark:bg-gray-800 pb-5 pt-5">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <div className='text-orange-300 ml-5 pr-10'>SUNSHINE RESCUE</div>
                </li>
                <li>
                    <div class="hover:underline me-4 md:me-6">About</div>
                </li>
                <li>
                    <div class="hover:underline me-4 md:me-6">Privacy Policy</div>
                </li>
                <li>
                    <div class="hover:underline me-4 md:me-6">Licensing</div>
                </li>
                <li>
                    <div class="hover:underline me-4 md:me-6">Contact</div>
                </li>
                <li>
                    <div class="hover:underline">Mail Us</div>
                </li>
                
            </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer

