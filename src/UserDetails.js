import classes from './UserDetails.module.css';
import React , { Component } from 'react';
import randomColor from 'randomcolor';

class UserDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  
  componentDidMount(){
    fetch('http://15.207.229.231:8000/machstatz/get_all_users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }
  delete(id){
    fetch(`http://15.207.229.231:8000/machstatz/delete_existing_user${id}`,
    {
      method: 'DELETE',
    })
    .then((result) => {
      result.json().then((res)=>{
        alert("User deleted successfully.")
        res.status(202).json()
      })
    })
    .catch(function(){
      alert("Unable to delete the user or user may not exit.")
      // res.status(400).json()
    })
  }

  
  render(){
    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    }

    else{
      return (
        <div className={classes.UserDetails}>
          {items.map(item => (
              <li key={items._id}>
                {/* Id: {item._id.$oid}  username: {item.username} email: {item.email}  */}
                <div className={classes.profile} style={{backgroundColor: randomColor()}}>
                  {
                    (item.fist_name || item.last_name)
                      ?(item.fist_name)
                        ?item.fist_name[0]
                        :item.last_name[0]
                      :item.fist_name
                  }
                </div>
                <div className={classes.name}>
                  {
                    (item.fist_name || item.last_name)
                      ?item.fist_name
                      :"No_Name"
                  }
                   {item.last_name}
                </div>
                <div className={classes.Icon}>
                  <button className={classes.editIcon}><i class="fa fa-pencil fa-2x"></i></button>
                  <button className={classes.trashIcon} onClick={()=> this.delete(item._id.$oid)}><i class="fa fa-trash fa-2x"></i></button>
                </div>
              </li>
          ))}
        </div>
      );
    }
  }
}

export default UserDetails;