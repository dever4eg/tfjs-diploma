import * as poseNet from "@tensorflow-models/posenet";
import {useEffect, useRef, useState} from "react";
import AsyncLock from "async-lock";

export const usePoseNet = (settings) => {
    const [loading, setLoading] = useState(true)

    const { architecture, inputResolution, outputStride, multiplier } = settings

    const net = useRef(null)
    const lock = useRef(new AsyncLock())

    useEffect(() => {
        lock.current.acquire('load-model', async () => {
            setLoading(true)
            const model = await poseNet.load({
                architecture,
                outputStride,
                inputResolution,
                multiplier,
                quantBytes: 2,
            })
            net.current?.dispose()
            net.current = model
            setLoading(false)
        }, null, {})

        return () => {
            net.current?.dispose()
            net.current = null
        }
    }, [architecture, inputResolution, outputStride, multiplier])

    const estimatePoses = (video) => {
        if (null == net.current || loading) {
            return []
        }

        return net.current.estimatePoses(video, {
            flipHorizontal: true,
            decodingMethod: 'single-person'
        })
    }

    return { estimatePoses, loading }
};
