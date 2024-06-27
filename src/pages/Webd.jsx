import React, {useState, useEffect} from 'react'
import Main from '../components/section/Main'

import { webdText } from '../data/webd'
import VideoCard from '../components/video/VideoCard'


const Webd = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 300)
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다.">
            
            <section id='webdPage' className={webdPageClass}>
                <h2>웹디자인 기능사 준비는 이걸로!</h2>
                <div className='video__inner'>
                    <VideoCard videos={webdText}/>
                    {/* {webdText.map((video, key) =>(
                        <div className='video' key={key}>
                            <div className='video__thumb paly__icon'>
                                <Link to={`/video/${video.videoId}`}>
                                    <img src={video.img} alt={video.title} />
                                </Link>
                            </div>
                        </div>
                    ))} */}
                </div>
            </section>
        </Main>
    )
}

export default Webd