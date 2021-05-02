import {createContext, useState} from "react";

export const SettingsContext = createContext({
    architecture: 'ResNet50',
    setArchitecture: () => {},
    settings: {}
})

function SettingsContextProvider (props) {
    const { children } = props

    const [architecture, setArchitecture] = useState('ResNet50')

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
