import * as poseNet from "@tensorflow-models/posenet";

const LINE_WIDTH = 2;

const drawVideo = (ctx, video, width, height) => {
    ctx.save();
    ctx.scale(-1, 1);
    ctx.translate(-width, 0);
    ctx.drawImage(video, 0, 0, width, height);
    ctx.restore();
}

const drawSegment = ([ay, ax], [by, bx], color, scale, ctx) => {
    ctx.beginPath();
    ctx.moveTo(ax * scale, ay * scale);
    ctx.lineTo(bx * scale, by * scale);
    ctx.lineWidth = LINE_WIDTH;
    ctx.strokeStyle = color;
    ctx.stroke();
}

const drawPoint = (ctx, y, x, r, color) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

const toTuple = ({x, y}) => ([y, x])

const drawSkeleton = (keyPoints, minConfidence, ctx, scale = 1, color = 'aqua') => {
    const adjacentKeyPoints = poseNet.getAdjacentKeyPoints(keyPoints, minConfidence);

    adjacentKeyPoints.forEach(([{ position: first }, { position: second }]) => {
        drawSegment(toTuple(first), toTuple(second), color, scale, ctx);
    });
}

const drawKeypoints = (keypoints, minConfidence, ctx, scale = 1, color = 'aqua') => {
    for (let i = 0; i < keypoints.length; i++) {
        const keypoint = keypoints[i];

        if (keypoint.score < minConfidence) {
            continue;
        }

        const {y, x} = keypoint.position;

        drawPoint(ctx, y * scale, x * scale, 3, color);
    }
}

export { drawSkeleton, drawVideo, drawKeypoints }
