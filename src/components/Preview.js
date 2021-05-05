import {useContext, useEffect, useRef} from "react";
import {usePoseNet} from "../hooks/usePoseNet";
import {VideoContext} from "./Camera";
import {drawKeypoints, drawSkeleton, drawVideo} from "../helpers/draw.js";
import {SettingsContext} from "./SessingsContextPovider";
import AsyncLock from 'async-lock'

function Preview (props) {
    const { width = 600, height = 600 } = props

    const { videoIsLoaded, video } = useContext(VideoContext)
    const { settings } = useContext(SettingsContext)
    const canvasElement = useRef(null);
    const { estimatePoses, loading: modelIsLoading } = usePoseNet(settings)
    const minPoseConfidence = 0.1
    const minPartConfidence = 0.5

    const lock = useRef(new AsyncLock())

    let poses = []

    const draw = (ctx) => {
        ctx.clearRect(0, 0, width, height);

        if (videoIsLoaded) {
            drawVideo(ctx, video, width, height)
        }

        poses.forEach(({score, keypoints}) => {
            if (score >= minPoseConfidence) {
                drawSkeleton(keypoints, minPartConfidence, ctx);
                drawKeypoints(keypoints, minPartConfidence, ctx)
            }
        });
    }

    useEffect(() => {
        const ctx = canvasElement.current.getContext('2d');

        let shouldRender = true
        const startDetection = async () => {
            if (!shouldRender) return
            draw(ctx)
            requestAnimationFrame(startDetection)
        }
        startDetection()

        return () => {
            shouldRender = false
        }
    }, [modelIsLoading, videoIsLoaded, width, height])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (lock.current.isBusy()) {
                return
            }

            lock.current.acquire('recognition', async () => {
                if (videoIsLoaded && !modelIsLoading) {
                    poses = await estimatePoses(video)
                }
            }, null, {})
        }, 50)

        return () => {
            clearInterval(intervalId)
        }
    }, [modelIsLoading, videoIsLoaded])

    return (
        <div>
            <canvas ref={canvasElement} width={width} height={height} />
        </div>
    );
}

export default Preview;
