import React, {useContext} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {makeStyles} from "@material-ui/core/styles";
import {SettingsContext} from "../SessingsContextPovider";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 260,
    },
}))

function ArchitectureSelect () {
    const classes = useStyles()

    const { architecture, setArchitecture } = useContext(SettingsContext)

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="architecture-select-label">Architecture</InputLabel>
            <Select
                labelId="architecture-select-label"
                id="architecture-select"
                value={architecture}
                onChange={e => setArchitecture(e.target.value)}
            >
                <MenuItem value="ResNet50">ResNet50</MenuItem>
                <MenuItem value="MobileNetV1">MobileNetV1</MenuItem>
            </Select>
        </FormControl>
    )
}

export default ArchitectureSelect;
