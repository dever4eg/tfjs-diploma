import React, {useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cameraContainer: {
        height: 'calc(100% - 60px)',
    }
}));

function CameraContainer (props) {
    const { children } = props

    const classes = useStyles()

    const cameraContainerRef = useRef(null)

    const [width, setWidth] = useState(100)
    const [height, setHeight] = useState(100)

    const handleResize = () => {
        setWidth(window.innerWidth - 348)
        setHeight(cameraContainerRef?.current.clientHeight)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div ref={cameraContainerRef} className={classes.cameraContainer}>
            {React.cloneElement(children, { width, height })}
        </div>
    )
}

export default CameraContainer;
