import React , { useState } from 'react';
import classes from './AddUser.module.css';
import Axios from 'axios';

function AddUser() {
    const [data, setData] = useState({
        email: "",
        fist_name: "",
        last_name: "",
        pwd: "",
        username: "",
    })

    function submit(e){
        e.preventDefault();
        Axios.post("https://15.207.229.231:8000/machstatz/add_new_user",{
            email: data.email,
            fist_name: data.fist_name,
            last_name: data.last_name,
            pwd: data.pwd,
            username: data.username,
        })
            .then(res=>{
                alert("Created the new user successfully.")
                // res.status(200).json()
                // console.log(res.data)
                window.location.reload();
            })
    }

    function handle(e) {
        const newData={...data}
        newData[e.target.id] = e.target.value;
        setData(newData)
        console.log(newData)
    }
    return (
        <div className={classes.AddUser}>
            <div className={classes.pageTitle}>
                <h1>Add User</h1>
                <button>X</button>
            </div> 

            <form className={classes.form} onSubmit={(e) => submit(e)}>

                <div className={classes.inputSection}>
                    <div className={classes.inputLabel}>
                        <label>First Name</label><br/>
                        <input onChange={(e) => handle(e)} id="fist_name" value={data.fist_name}
                            type="text" placeholder="Enter your first name" required/>
                    </div>
                    <div className={classes.inputLabel}>
                        <label>Last Name</label><br/>
                        <input onChange={(e) => handle(e)} id="last_name" value={data.last_name}
                            type="text" placeholder="Enter your last name" required/>
                    </div>
                    <div className={classes.inputLabel}>
                        <label>Profiles</label><br/>
                        <input onChange={(e) => handle(e)} id="profiles" value={data.Profile} disabled
                            list="datalist" placeholder="Select..." pattern="one|two|three"/>
                        <datalist id="datalist">
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                        </datalist>
                    </div>
                    <div className={classes.inputLabel}>
                        <label>Username</label><br/>
                        <input onChange={(e) => handle(e)} id="username" value={data.username}
                            type="text" placeholder="Enter username" required/>
                    </div>
                    <div className={classes.inputLabel}>
                        <label>Email Address</label><br/>
                        <input onChange={(e) => handle(e)} id="email" value={data.email}
                            type="text" placeholder="Enter your email id" required/>
                    </div>
                    <div className={classes.inputLabel}>
                        <label>Password</label><br/>
                        <input onChange={(e) => handle(e)} id="pwd" value={data.pwd}
                            type="password" placeholder="Enter Password" required/>
                    </div>
                </div>

                <div className={classes.buttonSection}>
                    <button className={classes.cancelBtn}>Cancel</button>
                    <button type="submit" className={classes.addBtn}>Add</button>
                </div>

            </form>
        </div>
    );
}

export default AddUser;