import { Checkbox, FormControlLabel, FormGroup, TextField, Fab } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, toggleShowName } from "../store/profile/actions";
import { Send } from "@mui/icons-material";

export function ProfileComp () {
    const {showName, name} = useSelector ((state) => state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState(name);

    const setShowName = useCallback(() => {
      dispatch(toggleShowName);
    }, [dispatch]);
    
    const handleInput = (event) => {
      setValue(event.target.value)
    }

    const handleButton = () => {
      dispatch(changeName(value))
    }

    const handleKey = (event) => {
      if (event.key === 'Enter') {
        dispatch(changeName(value))
      }
    }

  return (
    <div className="profileContainer">
      <h3>Profile</h3>
      <FormGroup className="toggle">
        <FormControlLabel
          control={<Checkbox checked = {showName} onChange = {setShowName}/>}
          label="Choose the name?"
        />
      </FormGroup>
      {showName && <div>
        <TextField
          value={value}
          onChange={handleInput}
          onKeyDown={handleKey}
        />
        <Fab color = "primary" className='message_button' onClick = {handleButton}>
          <Send />
        </Fab>

        <h3 className="profileGreeting">Welcome, {name}!</h3>
      </div>}
    </div>
);

}