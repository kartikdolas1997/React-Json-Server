import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function Typicode() {
    const [post, setPost] = useState({})

    const classes = useStyles();

    const { register, handleSubmit } = useForm();
    const onGet = (data) =>{
        console.log(data.Id);

        axios.get(`https://jsonplaceholder.typicode.com/posts/${data.Id}`)
        .then(res =>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onGet)}>
                <div>
                    <TextField {...register("Id")} id="outlined-basic" label="Id" variant="outlined" />

                </div>
                <div>
                <Button variant="contained" color="primary" type="submit">submit</Button>

                </div>

                </form>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField {...register("userId")} id="outlined-basic" label="userId" variant="outlined" />

                </div>


                <div>
                    <TextField {...register("title")} id="outlined-basic" label="title" variant="outlined" />

                </div>

                <div>
                    <TextField
                        {...register("body")}
                        id="outlined-multiline-static"
                        label="body"
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
    )
}

export default Typicode