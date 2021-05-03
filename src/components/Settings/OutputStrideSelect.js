import {useContext} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {makeStyles} from "@material-ui/core/styles";
import {ARCHITECTURE_OUTPUT_STRIDE_OPTIONS_MAP, SettingsContext} from "../SessingsContextPovider";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 260,
    },
}))

function OutputStrideSelect () {
    const classes = useStyles()

    const { architecture, outputStride, setOutputStride } = useContext(SettingsContext)

    const options = ARCHITECTURE_OUTPUT_STRIDE_OPTIONS_MAP[architecture]

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="output-stride-select-label">Output Stride</InputLabel>
            <Select
                labelId="output-stride-select-label"
                id="output-stride-select"
                value={outputStride}
                onChange={e => setOutputStride(e.target.value)}
            >
                {options.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default OutputStrideSelect;
