import ArchitectureSelect from "./Settings/ArchitectureSelect";
import InputResolutionSelect from "./Settings/InputResolutionSelect";
import OutputStrideSelect from "./Settings/OutputStrideSelect";
import MultiplierSelect from "./Settings/MultiplierSelect";

function SettingsDrawer () {
    return (
        <>
            <ArchitectureSelect />
            <InputResolutionSelect />
            <OutputStrideSelect />
            <MultiplierSelect />
        </>
    )
}

export default SettingsDrawer;
