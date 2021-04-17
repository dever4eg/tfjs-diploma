import {createContext, useState} from "react";

export const SettingsContext = createContext({
    algorithm: 'ResNet50',
    setAlgorithm: () => {},
})

function SettingsContextProvider (props) {
    const { children } = props

    const [algorithm, setAlgorithm] = useState(true)

    return (
        <SettingsContext.Provider value={{
            algorithm, setAlgorithm,
        }}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsContextProvider;
