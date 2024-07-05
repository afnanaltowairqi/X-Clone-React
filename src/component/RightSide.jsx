import Gorgeous from '../assets/gorgeous.jpg'
import Tuwaiq from '../assets/tuwaiq.jpg'
function RightSide() {
    return(
        <>
<div class="w-2/5 h-12 max-sm:hidden">

<div class="relative text-gray-300 w-80 p-5 pb-0 mr-16">
    <button type="submit" class="absolute ml-4 mt-3 mr-4">
        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xml:space="preserve" width="512px" height="512px">
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
        </svg>
    </button>

    <input type="search" name="search" placeholder="Search" className="bg-[#202327] h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow  border-0" />
    
</div>



<div class="max-w-sm  bg-black overflow-hidden shadow-lg m-4 mr-20 ">
<div class="bg-black dark:bg-dim-700 rounded-2xl m-2">
      <h1 class="text-gray-900 dark:text-white text-md font-bold p-3  dark:border-dim-200">What’s happening</h1>

      <div class="text-blue-400 text-sm font-normal p-3 hover:bg-[#0f0f0f] dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
        <h2 class="font-bold text-md text-gray-800 dark:text-white">
          #SaudiArabia
        </h2>
        <p class="text-xs text-gray-400">29.7K Tweets</p>
      </div>
  
      <div class="text-blue-400 text-sm font-normal p-3 hover:bg-[#0f0f0f] cursor-pointer transition duration-350 ease-in-out">
        <h2 class="font-bold text-md text-gray-800 dark:text-white">
        #HouseOfTheDragon
        </h2>
        <p class="text-xs text-gray-400">351K Tweets</p>
      </div>
     
      <div class="text-blue-400 text-sm font-normal p-3 hover:bg-[#0f0f0f] cursor-pointer transition duration-350 ease-in-out">
        <h2 class="font-bold text-md text-gray-800 dark:text-white">
          #MBS
        </h2>
        <p class="text-xs text-gray-400">52.7K Tweets</p>
      </div>

      <div class="text-blue-400 text-sm font-normal p-3 hover:bg-[#0f0f0f] cursor-pointer transition duration-350 ease-in-out">
        Show more
      </div>
    </div>
        </div>
        
    <div className="bg-[black] border-gray-600 border rounded-2xl m-2">
      <h1 className="text-gray-900 dark:text-white text-md font-bold p-3 ">
        Who to follow
      </h1>
      <div className="text-blue-400 text-sm font-normal p-3 hover:bg-[#0f0f0f] cursor-pointer transition duration-350 ease-in-out">
        <div className="flex flex-row justify-between p-2">
          <div className="flex flex-row">
            <img className="w-10 h-10 rounded-full" src={Gorgeous} alt="Gorgeous" />
            <div className="flex flex-col ml-2">
              <h1 className="text-gray-900 dark:text-white font-bold text-sm">
              Gorgeous
              </h1> 
              <p className="text-gray-400 text-sm">@Gorgeous</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center h-full text-gray-800">
              <a href="#" className="text-xs font-bold text-[#3b3b3b] px-4 py-1 rounded-full border-2 bg-[white]">Follow</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-blue-400 text-sm font-normal p-3 hover:bg-[#0f0f0f] cursor-pointer transition duration-350 ease-in-out">
        <div class="flex flex-row justify-between p-2">
          <div class="flex flex-row">
            <img className="w-10 h-10 rounded-full"
              src={Tuwaiq}
              alt="Joe Biden" />
            <div className="flex flex-col ml-2">
              <h1 className="text-gray-900 dark:text-white font-bold text-sm">
              أكاديمية طويق
              </h1>
              <p className="text-gray-400 text-sm">@TuwaiqAcademy</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center h-full text-gray-800 dark:text-white">
              <a href="#" className="text-xs font-bold text-[#3b3b3b] px-4 py-1 rounded-full border-2 bg-[white]">Follow</a>
            </div>
          </div>
        </div>
      </div>

            {/* <hr class="border-gray-600" /> */}

           


            <div class="flex">
            <div class="text-blue-400 text-sm font-normal p-3 hover:bg-[#0f0f0f] cursor-pointer transition duration-350 ease-in-out">
                Show more
            </div>
            </div>
        
        </div>

    <div>
      <ul class="text-xs text-gray-500 my-4 mx-2">
        <li class="inline-block mx-2"><a class="hover:underline" href="#">Terms of Service</a></li>
        <li class="inline-block mx-2"><a class="hover:underline" href="#">Privacy Policy</a></li>
        <li class="inline-block mx-2"><a class="hover:underline" href="#">Cookie Policy</a></li>
        <li class="inline-block mx-2"><a class="hover:underline" href="#">Accessibility</a></li>
        <li class="inline-block mx-2"><a class="hover:underline" href="#">Ads info</a></li>
        <li class="inline-block mx-2"><a class="hover:underline" href="#">More</a></li>
        <li class="inline-block mx-2">© 2024 X Corp.</li>
      </ul>
    </div>

</div>

<div/>
        </>
    );
}
export default RightSide