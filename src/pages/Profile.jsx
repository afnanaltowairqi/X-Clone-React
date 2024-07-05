import ProfileImag from '../assets/profile-img.jpg'

import { Link } from 'react-router-dom'
import Nav from '../component/Nav'
import RightSide from '../component/RightSide'
import React from 'react'
import axios from 'axios'

function Profile() {
    const [myTweet,setMyTweet] = React.useState([])
    const [myLike,setMyLike] = React.useState([])
    const UserName =localStorage.getItem("UserName");
    const name =localStorage.getItem("name");
    const [model, setModel] = React.useState(false);

    const OpenModel =() => {
        setModel(true);
      }
    
    const closeModel =() => {
        setModel(false);
    }


    React.useEffect(() => {
        axios.get('https://66804b9b56c2c76b495bb562.mockapi.io/api/tweet')
        .then( response => {
            setMyTweet(response.data);
        })
        const like = localStorage.getItem("like");
            if (like) {
            setMyLike(JSON.parse(like));
            }
        }, []);

        

        React.useEffect(() => {
            localStorage.setItem("like", JSON.stringify(myLike));
        }, [myLike]);


        const deleteTweet = (id) => {
            axios.delete(`https://66804b9b56c2c76b495bb562.mockapi.io/api/tweet/${id}`)
              .then(() => {
                setMyTweet((e) => e.filter((item) => 
                    item.id !== id));
                closeModel();
              }); 
        };
    

        const changeLike = (id) => {
            if (myLike.includes(id)) {
              setMyLike((e) =>
                 e.filter((item) => item !== id));
            } else {
              setMyLike((e) => 
                [...e, id]);
            }
          };
    

    return (

<div>
   <div className="bg-black">
        <div className="flex">
        <Nav />     
            <div className="w-3/5 border border-gray-600 h-auto  border-t-0">             
                <div className="flex ">
                    <div class="mx-2">
                        <h2 class="mb-0 text-xl font-bold text-white">{name}</h2>
                        <p class="mb-0 w-48 text-xs text-gray-400">0 Post</p>
                    </div>
                </div>

                <hr className="border-gray-600" />
                {/* <div className="flex">
                    <div className="m-2 w-10 py-1">
                        <img className="inline-block h-10 w-10 rounded-full" src={Profile} alt="" />
                    </div>
                    <div className="flex-1 px-2 pt-2 mt-2">
                        <textarea className=" bg-transparent text-gray-400 font-medium text-lg w-full" rows="2" cols="50" placeholder="What is happening?"></textarea>
                    </div>                    
                </div> */}

<div>
      <div className="w-full bg-cover bg-no-repeat bg-center h-52 bg-[#3a3a3a]">
        <img className="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="" />
      </div>
      <div className="p-4">
        <div className="relative flex w-full">
          <div className="flex flex-1">
            <div className="mt-[-6rem]">
              <div className="h-32 w-32 md rounded-full relative avatar">
                <img className="h-32 w-32 md rounded-full relative border-4 border-black" src={ProfileImag} alt="" />
                <div className="absolute"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <button className="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring max-w-max border bg-transparent border-[[#3a3a3a]] text-white hover:bg-[#3a3a3a] items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="space-y-1 justify-center w-full ml-3">
          <div>
            <h2 className="text-xl leading-6 font-bold text-white">{name}</h2>
            <p className="text-sm leading-5 font-medium text-gray-600">@{UserName}</p>
          </div>
          <div className="mt-3">
            <p className="text-white leading-tight mb-2">Front-end / UX-Ui / CyberSecurity </p>
            <div className="text-gray-600 flex">
              <span className="flex mr-2">
                <svg viewBox="0 0 24 24" className="bg-white h-5 w-5 paint-icon"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>
                <span className="leading-5 ml-1 ">Joined June 2024</span>
              </span>
            </div>
          </div>
          <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
            <div className="text-center pr-3"><span className="font-bold text-white">240</span><span className="text-gray-600"> Following</span></div>
            <div className="text-center px-3"><span className="font-bold text-white">45</span><span className="text-gray-600"> Followers</span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex  ">
        <button className="flex-1 px-4 py-2 m-2 flex justify-center hover:bg-[#3a3a3a] ">
            <h2 className="px-4 py-2 text-sm font-semibold text-[grey] hover:text-white  ">Posts</h2>
        </button>
        <Link to="/Like"><button className=" flex-1 px-4 py-2 m-2 flex justify-center hover:bg-[#3a3a3a]">
            <h2 className="px-4 py-2 text-sm font-semibold text-[grey] hover:text-white">Likes</h2>
        </button></Link>
    </div>

          <hr className="border-gray-600 " />
          
                
            <div>
       </div>

       {myTweet.map((e) => (
       <div key={e.id} className='border border-gray-600 '>
       <div className="flex flex-shrink-0 p-4 pb-0  ">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-top">
                    <div>
                      <img className="inline-block h-9 w-9 rounded-full" src={ProfileImag} alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="flex items-center text-base leading-6 font-medium text-gray-800 dark:text-white">
                      {name} 
                      {/* <svg
                        viewBox="0 0 24 24"
                        aria-label="Verified account"
                        fill="currentColor"
                        className="w-4 h-4 ml-1 text-[#1d9bf0]"
                      >
                        <g>
                          <path
                            d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                          ></path>
                        </g>
                      </svg> */}
                        <span className="ml-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @{UserName} . 10h
                          </span>
                        <div  className=' w-[24vw] flex justify-end'>
                            <svg onClick={OpenModel} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                        {model && (
                        <div className='model fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
                        <div className='content bg-[#000000] p-8 rounded-lg shadow-lg flex flex-col justify-center items-start gap-2 max-sm:w-[90vw] w-[25vw]'>
                            {/* <img src={Like} className='w-[10vw] max-sm:w-[20vw]'></img> */}
                            <h1 className=' text-left text-xl font-semibold mb-4 text-white '> Delete post?</h1>
                            <p className='text-left text-base mb-4 text-[#7c7c7c] '> This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results. </p>
                            <div className='flex flex-col justify-center w-[20vw] gap-4'>
                                <button onClick={() => deleteTweet(e.id)}  type="submit" className="bg-[#c42626] text-white px-4 py-2 rounded-full hover:bg-[#e03737]">Delete</button>
                                <button onClick={closeModel}  type="submit" className="border border-white text-white px-4 py-2 rounded-full hover:bg-[#505050]">Cancel</button>
                            </div>
                            

                        </div>
                        </div> )}
                        

                           </p>
                           
                    </div>
                  </div>
                </a>
            </div>
            <div className="pl-16">
            <div >
            <p className="text-base width-auto font-medium text-white flex-shrink tweet-text max-w-xs break-words whitespace-pre-wrap">
            {e.tweet}
            {/* <span className="text-blue-400"> #spaceships #Uranus</span> */}
            </p>
        </div>

                
                


          <div class="flex items-center py-4">
            <div class="flex-1 flex items-center text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
              
            </div>
            <div class="flex-1 flex items-center text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                </g>
              </svg>
              
            </div>
            <div class="flex-1 flex items-center text-xs text-gray-400 hover:text-red-600  transition duration-350 ease-in-out">
              <svg onClick={() => changeLike(e.id)} viewBox="0 0 24 24" fill="currentColor" className=" cursor-pointer w-5 h-5 mr-2">
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg>
              
            </div>
            <div class="flex-1 flex items-center text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            
            </div>
            
            <div className="flex-1 flex items-center text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out justify-center ">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                </g>
              </svg>
            </div>
          </div>
                
            </div>

       </div>
   ))} 
              {/* <hr className="border-gray-600" /> */}

            



              
              {/* <hr class="border-gray-600" /> */}

        </div>


    <RightSide />
        
    </div>
</div>

        </div>
  );
}

export default Profile