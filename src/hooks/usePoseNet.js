import * as poseNet from "@tensorflow-models/posenet";
import {useEffect, useRef, useState} from "react";

export const usePoseNet = () => {
    const [loading, setLoading] = useState(true)

    const net = useRef(null)

    useEffect(() => {
        (async () => {
            setLoading(true)
            net.current = await poseNet.load({
                architecture: 'ResNet50',
                outputStride: 32,
                inputResolution: 250,
                multiplier: 1,
                quantBytes: 2,
            })
            setLoading(false)
        })()
    }, [])

    const estimatePoses = (video) => {
        return net.current.estimatePoses(video, {
            flipHorizontal: false,
            decodingMethod: 'single-person'
        })
    }

    return { estimatePoses, loading }
};
