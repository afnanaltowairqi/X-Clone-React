import Nav from '../component/Nav'
import RightSide from '../component/RightSide'
import Tweet from '../pages/Tweet'


function Home() {
    return (
      <>
<div>
   <div className="bg-black">
        <div className="flex">
        <Nav />
          <Tweet />
        <RightSide />  
    </div>
</div>
</div>
        </>

  );
}

export default Home