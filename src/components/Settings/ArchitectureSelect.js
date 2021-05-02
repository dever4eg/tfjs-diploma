import React, {useContext} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {makeStyles} from "@material-ui/core/styles";
import {ARCHITECTURE_MOBILE_NET_V1, ARCHITECTURE_RES_NET_50, SettingsContext} from "../SessingsContextPovider";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 260,
    },
}))

function ArchitectureSelect () {
    const classes = useStyles()

    const { architecture, setArchitecture } = useContext(SettingsContext)

    const options = [ARCHITECTURE_MOBILE_NET_V1, ARCHITECTURE_RES_NET_50]

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="architecture-select-label">Architecture</InputLabel>
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
