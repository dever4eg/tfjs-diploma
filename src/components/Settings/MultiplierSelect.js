import {useContext} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {ARCHITECTURE_MOBILE_NET_V1, SettingsContext} from "../SessingsContextPovider";
import {useStyles} from "./styles";

const options = [0.5, 0.75, 1.0]

function MultiplierSelect () {
    const classes = useStyles()

    const { architecture, multiplier, setMultiplier } = useContext(SettingsContext)

    if (architecture !== ARCHITECTURE_MOBILE_NET_V1) {
        return null
    }

    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="multiplier-select-label">Множник (Тільки MobileNet)</InputLabel>
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
