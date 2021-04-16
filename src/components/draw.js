import * as poseNet from "@tensorflow-models/posenet";

const LINE_WIDTH = 2;

const drawVideo = (ctx, video, width, height) => {
    ctx.clearRect(0, 0, width, height);
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

const toTuple = ({x, y}) => ([y, x])

const drawSkeleton = (keyPoints, minConfidence, ctx, scale = 1, color = 'aqua') => {
    const adjacentKeyPoints = poseNet.getAdjacentKeyPoints(keyPoints, minConfidence);

    adjacentKeyPoints.forEach(([{ position: first }, { position: second }]) => {
        drawSegment(toTuple(first), toTuple(second), color, scale, ctx);
    });
}

export { drawSkeleton, drawVideo }
