function CheckMediaDeviceSupport (props) {
    const { children } = props

    const isMediaDevicesNotSupported = !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia;

    if (isMediaDevicesNotSupported) {
        return <div>Browser API navigator.mediaDevices.getUserMedia not available</div>
    }

    return children;
}

export default CheckMediaDeviceSupport;
