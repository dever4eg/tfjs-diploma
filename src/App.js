import Camera from "./components/Camera";
import Preview from "./components/Preview";
import CheckMediaDeviceSupport from "./components/CheckMediaDeviceSupport";
import SettingsContextProvider from "./components/SessingsContextPovider";
import CameraContainer from "./components/CameraContainer";
import AppLayout from "./components/AppLayout";
import "./assets/styles/main.scss";
import "fontsource-roboto";

function App() {
    return (
        <SettingsContextProvider>
            <AppLayout>
                <CheckMediaDeviceSupport>
                    <CameraContainer>
                        <Camera>
                            <Preview/>
                        </Camera>
                    </CameraContainer>
                </CheckMediaDeviceSupport>
            </AppLayout>
        </SettingsContextProvider>
    );
}

export default App;
