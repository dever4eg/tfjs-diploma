import React from "react";
import ArchitectureSelect from "./Settings/ArchitectureSelect";
import InputResolutionSelect from "./Settings/InputResolutionSelect";
import OutputStrideSelect from "./Settings/OutputStrideSelect";

function SettingsDrawer () {
    return (
        <>
            <ArchitectureSelect />
            <InputResolutionSelect />
            <OutputStrideSelect />
        </>
    )
}

export default SettingsDrawer;
