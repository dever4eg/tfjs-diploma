import {createContext, useState} from "react";

export const ARCHITECTURE_RES_NET_50 = 'ResNet50'
export const ARCHITECTURE_MOBILE_NET_V1 = 'MobileNetV1'

export const SettingsContext = createContext({
    architecture: ARCHITECTURE_RES_NET_50,
    setArchitecture: () => {},
    settings: {}
})

function SettingsContextProvider (props) {
    const { children } = props

    const [architecture, setArchitecture] = useState(ARCHITECTURE_RES_NET_50)

    const settings = { architecture }

    return (
        <SettingsContext.Provider value={{
            architecture, setArchitecture, settings,
        }}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsContextProvider;
