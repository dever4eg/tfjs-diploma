import {createContext, useState} from "react";

export const ARCHITECTURE_RES_NET_50 = 'ResNet50'
export const ARCHITECTURE_MOBILE_NET_V1 = 'MobileNetV1'

export const SettingsContext = createContext({
    architecture: null,
    setArchitecture: () => {},
    inputResolution: null,
    setInputResolution: () => {},
    settings: {}
})

function SettingsContextProvider (props) {
    const { children } = props

    const [architecture, setArchitecture] = useState(ARCHITECTURE_RES_NET_50)
    const [inputResolution, setInputResolution] = useState(200)

    const settings = { architecture, inputResolution }

    return (
        <SettingsContext.Provider value={{
            architecture, setArchitecture, settings, inputResolution, setInputResolution,
        }}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsContextProvider;
