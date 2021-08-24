import React from "react";
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';





const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function FormComponent() {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("fullName")} id="outlined-basic" label="Full Name" variant="outlined" />


        <div>

        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
        {...register("gender")}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Gender"
        >
          {/* <MenuItem value="" disabled>None</MenuItem> */}
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
        </FormControl>
        </div>
        <div>
        <TextField
        {...register("comments")}
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
        </div>



        <div>
          <Button variant="contained" color="primary" type="submit">submit</Button>
        </div>
      </form>
    </div>
  );
}



export default FormComponent;
