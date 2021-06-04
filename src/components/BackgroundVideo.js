import background from '../background.mp4'

const BackgroundVideo = () => {
    return (
        <div>
            <video 
                autoPlay="autoplay" 
                muted 
                loop="loop" 
                id="myVideo">
                <source src={background} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default BackgroundVideo
