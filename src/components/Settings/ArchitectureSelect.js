import React, {useContext} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {ARCHITECTURE_MOBILE_NET_V1, ARCHITECTURE_RES_NET_50, SettingsContext} from "../SessingsContextPovider";
import {useStyles} from "./styles";

function ArchitectureSelect () {
    const classes = useStyles()

    const { architecture, setArchitecture } = useContext(SettingsContext)

    const options = [ARCHITECTURE_MOBILE_NET_V1, ARCHITECTURE_RES_NET_50]

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="architecture-select-label">Архітектура</InputLabel>
            <Select
                labelId="architecture-select-label"
                id="architecture-select"
                value={architecture}
                onChange={e => setArchitecture(e.target.value)}
            >
                {options.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default ArchitectureSelect;
