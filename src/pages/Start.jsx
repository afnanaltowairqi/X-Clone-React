import { Link } from 'react-router-dom'

function Start() {
    return(
        <>
       <div>
      <div className="bg-black h-screen max-sm:gap-7 flex max-sm:flex-col content-center justify-center">
        <div className=" lg:flex w-1/4  max-sm:w-auto max-sm:h-20 max-sm:justify-center justify-around max-sm:flex items-center">
          <svg viewBox="0 0 24 24" className="h-80 w-96 max-sm:w-16 text-blue-400 dark:text-white ml-3 my-3" xmlns="http://www.w3.org/2000/svg" ><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg>
        </div>
        <div className="flex  lg:w-1/2 justify-center items-center bg-black space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <h2 className="text-[3rem] text-white font-extrabold ">Happening now</h2>
            <h2 className="pt-8 text-[2rem] text-white font-extrabold">Join today.</h2>
            <Link to="/Signup"><button
                className="block w-[20vw] max-sm:w-40 max-sm:ml-14 bg-blue-500 mt-5 py-2 rounded-2xl hover:bg-blue-300 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Create account
              </button></Link>
              <p className="text-[#b1b1b1]">By registering, you agree to our <span className="text-blue-500"> Terms of Service </span> and <span className="text-blue-500">Privacy Policy </span>, including the use of <span className="text-blue-500"> cookies. </span></p>
              <p className="pt-8 text-[1rem] text-white font-bold" >Already have an account?</p>
              <Link to="/Login"><button
                className="block w-[20vw] max-sm:w-40 max-sm:ml-14 border border-blue-500 mt-5 py-2 rounded-2xl hover:bg-gray-800 hover:-translate-y-1 transition-all duration-500 text-blue-500 font-semibold mb-2"
              >
                Log in 
              </button></Link>
          </div>
        </div>
      </div>
    </div>
        
        </>
    )
}
export default Start