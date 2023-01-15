import React from 'react';
import MyAvatar from '../components/MyAvatar';
import MyIntro from '../components/MyIntro';

function Home(prevComponent){

    return <div className='home_container' id='home'>
        <div className='container_left'>
            <MyAvatar/>
        </div>
        <div className='container_right'>
            <MyIntro shouldAnimate={true}/>
        </div>    
    </div>;
}

export default Home;