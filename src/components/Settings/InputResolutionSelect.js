import {useContext} from "react";
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

const options = [50, 100, 200, 300, 500, 700, 1000]

function ArchitectureSelect () {
    const classes = useStyles()

    const { inputResolution, setInputResolution } = useContext(SettingsContext)

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="input-resolution-select-label">Input Resolution</InputLabel>
            <Select
                labelId="input-resolution-select-label"
                id="input-resolution-select"
                value={inputResolution}
                onChange={e => setInputResolution(e.target.value)}
            >
                {options.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default ArchitectureSelect;
