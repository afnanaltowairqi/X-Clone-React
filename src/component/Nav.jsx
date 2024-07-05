import { Link } from 'react-router-dom'
import Profile from '../assets/profile-img.jpg'

function Nav() {
    const UserName =localStorage.getItem("UserName");
    const name =localStorage.getItem("name");
    return(
        <>
        <div className="w-[35vw] text-white pl-16 py-4 max-sm:w-[20vw] max-sm:flex max-sm:flex-col">
              {/* <svg viewBox="0 0 24 24" fill="currentColor"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg> */}

            <p className=" flex my-2 justify-center xl:justify-start max-sm:w-[10vw]" >
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-400 dark:text-white" xmlns="http://www.w3.org/2000/svg" ><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg>
            </p>
        <nav className="  mt-5 mr-2 md:mr-10 w-[18vw] max-sm:w-[4vw] ">
        <Link to='/Home'><div className="flex items-center justify-center md:justify-start text-[white] mb-8 transition duration-350 ease-in-out">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
            </svg>
            <span className="hidden md:block ml-4 font-bold text-md">Home</span>
          </div></Link>

          <p className="flex items-center justify-center md:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className="hidden md:block ml-4 font-bold text-md">Explore</span>
          </p>

          <p className="flex items-center justify-center md:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="hidden md:block ml-4 font-bold text-md">Notifications</span>
          </p>

          <p className="flex items-center justify-center md:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden md:block ml-4 font-bold text-md">Messages</span>
          </p>

          <p className="flex items-center justify-center md:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.5 12c0-4.23 0-6.345 1.198-7.747q.256-.3.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198q.3.256.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747q-.256.3-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12M8 17.5l8-10" />
            </svg>
            <span className="hidden md:block ml-4 font-bold text-md">Grok</span>
          </p>

          <p className="flex items-center justify-center md:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <span className="hidden md:block ml-4 font-bold text-md">Communities</span>
          </p>

          <Link to='/Profile'><div className="flex items-center justify-center md:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden md:block ml-4 font-bold text-md">Profile</span>
          </div></Link>

          <p className="flex items-center justify-center md:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden md:block ml-4 font-bold text-md">More</span>
          </p>

          <p className="mx-auto w-11 md:w-auto flex items-center justify-center bg-[#1d9bf0] hover:bg-blue-500 py-3 rounded-full text-white font-bold font-sm transition duration-350 ease-in-out mb-10 h-[9vh]">
            <svg fill="currentColor" viewBox="0 0 24 24" className="block md:hidden h-6 w-6">
              <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z" />
            </svg>
            <span className="hidden md:block font-bold text-md ">Post</span>
          </p>
      </nav>

              
        <div class="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-12 mr-2">
          <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
              <div>
                <img class="inline-block h-10 w-10 rounded-full" src={Profile} alt="" />
              </div>
              <div class="ml-3">
                <p class="text-base leading-6 font-medium text-white max-sm:hidden">
                  {name}
                </p>
                <p class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150 max-sm:hidden">
                  @{UserName}
                </p>
              </div>
            </div>
          </a>
        </div>
              
        </div>
        </>
    )
}
export default Nav