import Profile from '../assets/profile-img.jpg'
import Elon from '../assets/elon.jpg'
import tweet2 from '../assets/tweet2.jfif'
import userLogo from '../assets/hotdLogo.jpg'
import React from 'react'
import axios from 'axios'



function Tweet() {
    const [tweets, setTweets]= React.useState({
        tweet: "",
        id: "",
    });
    const [newTweets, setNewTweets] = React.useState([]);
    const [like, setLike] = React.useState([]);
    const UserName =localStorage.getItem("UserName");
    const name =localStorage.getItem("name");
    localStorage.setItem("active", "true");
    const [model, setModel] = React.useState(false);

    const OpenModel =() => {
        setModel(true);
      }
    
    const closeModel =() => {
        setModel(false);
    }


    const postTweet=()=>{
        axios.post('https://66804b9b56c2c76b495bb562.mockapi.io/api/tweet',{
            tweet: tweets.tweet,
        }).then(()=>{
            setNewTweets([...newTweets, tweets]);
            // setModel(true);
        })
    }

    React.useEffect(() => {
        axios.get('https://66804b9b56c2c76b495bb562.mockapi.io/api/tweet')
          .then( response => {
            setNewTweets(response.data);
          })
          const like = localStorage.getItem("like");
            if (like) {
            setLike(JSON.parse(like));
            }
        }, [tweets]);

        
        React.useEffect(() => {
            localStorage.setItem("like", JSON.stringify(like));
        }, [like]);


  const changeLike = (id) => {
    if (like.includes(id)) {
      setLike((e) => e.filter((item) => item !== id));
    } else {
      setLike((e) => [...e, id]);
    }
  };

  const deleteTweet = (id) => {
    axios.delete(`https://66804b9b56c2c76b495bb562.mockapi.io/api/tweet/${id}`)
      .then(() => {
        setNewTweets((e) => e.filter((item) => 
            item.id !== id));
        closeModel();
      }); 
};


    return(
        <>
        <div className="w-3/5 border border-gray-600 h-auto border-t-0 max-sm:w-full">             
                <div className="flex ">
                    <div className="flex-1 px-4 py-2 m-2 flex justify-center ">
                        <h2 className="px-4 py-2 text-md font-semibold text-white">For you</h2>
                    </div>
                    <div className=" flex-1 px-4 py-2 m-2 flex justify-center">
                        <h2 className="px-4 py-2 text-md font-semibold text-[grey]">Following</h2>
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

        <div className="border-b border-gray-600 dark:border-dim-200 pb-4 border-l border-r ">
            <div className="flex flex-shrink-0 p-4 pb-0">
              <div className="w-12 flex items-top">
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src={Profile}
                  alt="Profile-logo"
                />
              </div>
              <div class="w-full p-2">
                <textarea  className="dark:text-white text-gray-900 placeholder-gray-400 w-full h-10 bg-transparent border-0 focus:outline-none resize-none"
                placeholder="What is happening?!"
                value={tweets.tweet}
                onChange={(e) => {
                  setTweets({ ...tweets, tweet: e.target.value });
                }}
                ></textarea>
              </div>
            </div>
            <div class="w-full flex items-top p-2 text-white pl-14">
              <p className="text-blue-400 hover:bg-[#1d9cf034] dark:hover:bg-dim-800 rounded-full p-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <g>
                    <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path>
                    <circle cx="8.868" cy="8.309" r="1.542"></circle>
                  </g>
                </svg>
              </p>

              <p className="text-blue-400 hover:bg-[#1d9cf034] dark:hover:bg-dim-800 rounded-full p-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <g>
                    <path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path>
                    <path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path>
                  </g>
                </svg>
              </p>

              <p className="text-blue-400 hover:bg-[#1d9cf034] dark:hover:bg-dim-800 rounded-full p-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <g>
                    <path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"></path>
                  </g>
                </svg>
              </p>

              <p className="text-blue-400 hover:bg-[#1d9cf034] dark:hover:bg-dim-800 rounded-full p-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <g>
                    <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                    <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"></path>
                    <circle cx="14.738" cy="9.458" r="1.478"></circle>
                    <circle cx="9.262" cy="9.458" r="1.478"></circle>
                  </g>
                </svg>
              </p>

              <p className="text-blue-400 hover:bg-[#1d9cf034] dark:hover:bg-dim-800 rounded-full p-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <g>
                    <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"></path>
                    <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"></path>
                    <path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"></path>
                    <path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"></path>
                  </g>
                </svg>
              </p>

              <p onClick={postTweet} className="bg-[#1d9bf0] hover:bg-blue-500 text-white rounded-full py-1 px-4 ml-auto mr-1 cursor-pointer">
                <span className="font-bold text-sm">Post</span>
              </p>
            </div>
          </div> 

          {/* <hr className="border-gray-600 " /> */}

                
            <div>
       </div>
    {newTweets.map((e) => (
       <div key={e.id} className='border border-gray-600 '>
       <div className="flex flex-shrink-0 p-4 pb-0  ">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-top">
                    <div>
                      <img className="inline-block h-9 w-9 rounded-full" src={Profile} alt="" />
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


            <hr className="border-gray-600" />
        
            <div className="flex flex-shrink-0 p-4 pb-0">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-top">
                    <div>
                      <img className="inline-block h-9 w-9 rounded-full" src={Elon} alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="flex items-center text-base leading-6 font-medium text-gray-800 dark:text-white">
                      Elon Musk 
                      <svg
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
                      </svg>
                        <span className="ml-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @elonmusk . 10h
                          </span>
                        <div className=' w-[22vw] flex justify-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                        

                           </p>
                           
                    </div>
                  </div>
                </a>
            </div>
            <div className="pl-16">
                <p className="text-base width-auto font-medium text-white flex-shrink">
                Our greatest dream is to send a spaceship to Uranus
                  <span className="text-blue-400"> #spaceships #Uranus</span>
                </p>


          <div class="flex items-center py-4">
            <div class="flex-1 flex items-center text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
              12.3k
            </div>
            <div class="flex-1 flex items-center text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                </g>
              </svg>
              14k
            </div>
            <div class="flex-1 flex items-center text-xs text-gray-400 hover:text-red-600  transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg>
              78k
            </div>
            <div class="flex-1 flex items-center text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            54M
            </div>
            
            <div class="flex-1 flex items-center text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                </g>
              </svg>
            </div>
          </div>
                
            </div>

              <hr className="border-gray-600" />


              <div className="flex flex-shrink-0 p-4 pb-0">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-12 w-12 rounded-full" src={userLogo} alt="" />
                    </div>
                    <div className="ml-3">
                    <p className="flex items-center text-base leading-6 font-medium text-gray-800 dark:text-white">
                      HOTD 
                      <svg
                        viewBox="0 0 24 24"
                        aria-label="Verified account"
                        fill="currentColor"
                        className="w-4 h-4 ml-1 text-[#cc993a]">
                        <g>
                          <path
                            d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                          ></path>
                        </g>
                      </svg>
                        <span className="ml-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @Thrones_Facts . Jun 18
                          </span>
                          <div className=' w-[20vw] flex justify-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                           </p>
                           
                    </div>
                  </div>
                </a>
            </div>


            <div className="pl-16">
                <p className="text-base width-auto font-medium text-white flex-shrink">
                Thread explaining the new 🐉 <span className="text-blue-400">#HouseOfTheDragon </span> 
                title sequenc 
                  <span className="text-blue-400"> #Hotd </span>
                </p>

                <div class="md:flex-shrink pr-6 pt-3">
                    <img class="rounded-lg w-full h-64" src={tweet2} />
                  </div>
                <div class="flex">
                    <div class="w-full">
                        
                        <div class="flex items-center">
                            <div class="flex-1 text-center">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                  </a>
                            </div>

                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-[#f078c2] hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                                </a>
                            </div>

                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-[#eb6f6f] hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </a>
                            </div>

                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300" >
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                            </a>
                            </div>
                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                            </a>
                            </div>
                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </a>
                            </div>
                        </div>
                    </div>

                
                </div>
                
              </div>
              <hr class="border-gray-600" />

              {/* <hr class="border-gray-600" /> */}

        </div>
        </>
    );
}
export default Tweet