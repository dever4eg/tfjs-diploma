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

function AlgorithmSelect () {
    const classes = useStyles()

    const { algorithm, setAlgorithm } = useContext(SettingsContext)

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="algorithm-select-label">Algorithm</InputLabel>
            <Select
                labelId="algorithm-select-label"
                id="algorithm-select"
                value={algorithm}
                onChange={e => setAlgorithm(e.target.value)}
            >
                <MenuItem value="ResNet50">ResNet50</MenuItem>
                <MenuItem value="MobileNetV1">MobileNetV1</MenuItem>
            </Select>
        </FormControl>
    )
}

export default AlgorithmSelect;
