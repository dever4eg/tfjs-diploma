import {useContext} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {makeStyles} from "@material-ui/core/styles";
import {ARCHITECTURE_MOBILE_NET_V1, SettingsContext} from "../SessingsContextPovider";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 260,
    },
}))

const options = [0.5, 0.75, 1.0]

function MultiplierSelect () {
    const classes = useStyles()

    const { architecture, multiplier, setMultiplier } = useContext(SettingsContext)

    if (architecture !== ARCHITECTURE_MOBILE_NET_V1) {
        return null
    }

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="multiplier-select-label">Multiplier</InputLabel>
            <Select
                labelId="multiplier-select-label"
                id="multiplier-select"
                value={multiplier}
                onChange={e => setMultiplier(e.target.value)}
            >
                {options.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default MultiplierSelect;
