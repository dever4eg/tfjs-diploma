import { device_util } from "@tensorflow/tfjs";
import {createContext, useEffect, useRef, useState} from "react";

export const VideoContext = createContext({
    video: null,
    videoIsLoaded: false,
})

function Camera(props) {
    const { width = 600, height = 600, children } = props

    const videoElement = useRef(null);

    const [videoIsLoaded, setVideoLoaded] = useState(false)

    useEffect(() => {
        setVideoLoaded(false)
        const isMobile = device_util.isMobile();

        (async () => {
            videoElement.current.srcObject = await navigator.mediaDevices.getUserMedia({
                'audio': false,
                'video': {
                    facingMode: 'user',
                    width: isMobile ? undefined : width,
                    height: isMobile ? undefined : height,
                },
            })
        })()

        videoElement.current.onloadedmetadata = () => setVideoLoaded(true)
    }, [width, height]);

    return (
        <div>
            <video ref={videoElement} width={width} height={height} autoPlay style={{ display: 'none' }} />
            <VideoContext.Provider value={{ video: videoElement.current, videoIsLoaded }}>
                { children }
            </VideoContext.Provider>
        </div>
    );
}

export default Camera;
