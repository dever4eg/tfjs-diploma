import { device_util } from "@tensorflow/tfjs";
import React, {createContext, useEffect, useRef, useState} from "react";

export const VideoContext = createContext({
    video: null,
    videoIsLoaded: false,
})

function Camera(props) {
    const { width = 600, height = 600, children } = props

    const videoElement = useRef(null);

    const [videoIsLoaded, setVideoLoaded] = useState(false)

    useEffect(() => {
        const isMobile = device_util.isMobile();

        (async () => {
            const src = await navigator.mediaDevices.getUserMedia({
                'audio': false,
                'video': {
                    facingMode: 'user',
                    width: isMobile ? undefined : width,
                    height: isMobile ? undefined : height,
                },
            })
            setVideoLoaded(false)
            videoElement.current.srcObject = src
            videoElement.current.onloadedmetadata = () => setVideoLoaded(true)
        })()

        return () => {
            videoElement.current.onloadedmetadata = () => {}
        }
    }, [width, height]);

    return (
        <div>
            <video ref={videoElement} width={width} height={height} autoPlay style={{ display: 'none' }} />
            <VideoContext.Provider value={{ video: videoElement.current, videoIsLoaded }}>
                {React.cloneElement(children, { width, height })}
            </VideoContext.Provider>
        </div>
    );
}

export default Camera;
