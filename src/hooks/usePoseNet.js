import * as poseNet from "@tensorflow-models/posenet";
import {useEffect, useRef, useState} from "react";

export const usePoseNet = (settings) => {
    const [loading, setLoading] = useState(true)

    const { architecture, inputResolution, outputStride, multiplier } = settings

    const net = useRef(null)

    useEffect(() => {
        (async () => {
            setLoading(true)
            net.current?.dispose()
            net.current = null

            net.current = await poseNet.load({
                architecture,
                outputStride,
                inputResolution,
                multiplier,
                quantBytes: 2,
            })

            setLoading(false)
        })()
    }, [architecture, inputResolution, outputStride, multiplier])

    const estimatePoses = (video) => {
        return net.current.estimatePoses(video, {
            flipHorizontal: true,
            decodingMethod: 'single-person'
        })
    }

    return { estimatePoses, loading }
};
