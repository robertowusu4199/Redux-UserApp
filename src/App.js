import logo from './logo.svg';
import './App.css';
import ContactInfo from './Component/ContactInfo';
import ContactsLists from './Component/ContactsLists';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:[] 
    }
  }

  addContact = (contact) => {
    contact.id = 100 * Math.random() * 100000;
    this.setState({
      user :[...this.state.user, contact] 
    })
   
  }

  deleteContact = (id) =>{
    this.setState({
      user : this.state.user.filter(contact => contact.id !==id) //show the state of the contacts to display all the others except 
      //the one that matches the ID i want to delete
 
    })
   }

   //goes through the contacts array and finds the one with the ID we wanna delete
   //and returns the new information entered
   
   updateContact = (id,updatedContactInfo) =>{
      let newContacts= this.state.user.map((contact) => {
       if(contact.id === id){
         return updatedContactInfo;
       }
       return contact;
     })
     this.setState({
       user: newContacts
     })
   }

  render() {
    return (
      <div>
        <div className="row heading">
          <h3>Contact Details</h3>
        </div>

        <div className='row'>
          <div className="col-md-5 userinput">
            <ContactInfo addContact= {this.addContact}/>
          </div>

          <div className="col-md-7 userlist">
            <ContactsLists 
              user = {this.state.user}
              deleteContact = {this.deleteContact} 
              updateContact = {this.updateContact}/>
          </div>
        </div>

      </div>
    )
  }
}


export default App;