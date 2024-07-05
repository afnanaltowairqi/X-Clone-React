import { Link } from 'react-router-dom'
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error,setError]= React.useState("")
    const [users,setUsers]= React.useState([])



    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get('https://66804b9b56c2c76b495bb562.mockapi.io/api/users')
          .then( response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },[])

    const checkData=(e)=>{
        e.preventDefault();
        setError('')

        if (!username || !password) {
            setError('Please enter your username and password')
            return;
        }

    const user = users.find(e =>
        e.username === username && e.password === password        
    )
        if(user) {
            localStorage.setItem('UserName', user.username);
            localStorage.setItem('UserId', user.id);

            navigate('/Home')
        } else {
            setError('Username or password is not correct!')
        }
        
    }

    return(
        <>
        

<div className="min-h-screen flex flex-col items-center justify-center bg-black">
  <div className="flex flex-col bg-gray-800 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
  <div className="flex justify-center">
  <p className="flex my-2 justify-center xl:justify-start" >
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-400 dark:text-white" xmlns="http://www.w3.org/2000/svg" ><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg>
        </p>
  </div>
    <div class="text-white text-center font-bold max-sm:ml-16 max-sm:text-lg text-4xl mb-10">Login To Your Account</div>
    
    <div class="">
      <form action="#">
        <div className="flex flex-col mb-6">
          <label for="text" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">User Name:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>

            <input value={username} onChange={(e)=>setUsername(e.target.value)} id="username" type="username" name="username" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="User Name" />
          </div>
        </div>
        <div class="flex flex-col mb-6">
          <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
            </div>

            <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
          </div>
        </div>

        <div className="flex items-center mb-6 -mt-4">
          <div className="flex ml-auto">
            <a href="#" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
          </div>
        </div>
        <div className='flex justify-center'>
            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>


        <div className="w-full flex justify-center">
          <button onClick={checkData} type="submit" className="block w-[20vw] max-sm:w-40 max-sm:ml-14 bg-blue-500 mt-5 py-2 rounded-2xl hover:bg-blue-300 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">
            <span className="mr-2 uppercase">Login</span>
            
          </button>

        </div>
      </form>
    </div>
    <div className="flex justify-center items-center mt-6">
      <a href="#" target="_blank" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
        
        <div className="flex justify-center mt-4">
                <p className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Don't have an account yet?</p>
                <Link to='/Signup'><p className="text-sm ml-2 max-sm:text-xs hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  Sign up
                </p></Link>
              </div>     
     </a>
    </div>
  </div>
</div>

        </>
    );

}
export default Login