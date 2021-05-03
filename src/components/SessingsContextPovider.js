import {createContext, useEffect, useState} from "react";

export const ARCHITECTURE_RES_NET_50 = 'ResNet50'
export const ARCHITECTURE_MOBILE_NET_V1 = 'MobileNetV1'

export const ARCHITECTURE_OUTPUT_STRIDE_OPTIONS_MAP = {
    [ARCHITECTURE_RES_NET_50]: [16, 32],
    [ARCHITECTURE_MOBILE_NET_V1]: [8, 16],
}

export const SettingsContext = createContext({
    architecture: null,
    setArchitecture: () => {},
    inputResolution: null,
    setInputResolution: () => {},
    outputStride: null,
    setOutputStride: () => {},
    multiplier: null,
    setMultiplier: () => {},
    settings: {}
})

function SettingsContextProvider (props) {
    const { children } = props

    const [architecture, setArchitecture] = useState(ARCHITECTURE_RES_NET_50)
    const [inputResolution, setInputResolution] = useState(200)
    const [outputStride, setOutputStride] = useState(16)
    const [multiplier, setMultiplier] = useState(1.0)

    const settings = { architecture, inputResolution, outputStride, multiplier }

    useEffect(() => {
        const options = ARCHITECTURE_OUTPUT_STRIDE_OPTIONS_MAP[architecture]
        if (!options.includes(outputStride)) {
            setOutputStride(options[0])
        }
    }, [architecture])

    useEffect(() => {
        if (architecture === ARCHITECTURE_RES_NET_50) {
            setMultiplier(1.0)
        }
    }, [architecture])

    return (
        <SettingsContext.Provider value={{
            architecture, setArchitecture, settings, inputResolution, setInputResolution,
            outputStride, setOutputStride, multiplier, setMultiplier
        }}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsContextProvider;
