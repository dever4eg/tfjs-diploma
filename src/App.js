import Camera from "./components/Camera";
import Preview from "./components/Preview";
import CheckMediaDeviceSupport from "./components/CheckMediaDeviceSupport";

function App() {
    return (
        <div className="App">
            <CheckMediaDeviceSupport>
                <Camera>
                    <Preview/>
                </Camera>
            </CheckMediaDeviceSupport>
        </div>
    );
}

export default App;
