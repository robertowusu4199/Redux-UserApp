import React from 'react';

class EditContact extends React.Component{
    constructor(props){
        super(props)

        //prefill the edit form with the info saved already
        this.state = {
            name : this.props.contact.name,
            phonenumber : this.props.contact.phonenumber,
            location : this.props.contact.location
        };
    }
    //This shows the value that was being type in the input box blow  by user into the state 
    handleOnChange = (event) => {
        this.setState(
           { [event.target.name] : event.target.value} //gets the value for whatever was typed and puts it in the respective inputs
        )
    }

    handleSubmit = () => {
        let contact = {...this.state, id: this.props.contact.id}
        this.props.updateContact(this.props.contact.id, contact);
        this.props.closeModal();
    }

    render(){
        return (
            <div>
                <form>
                    <label>Name</label> <br></br>
                    <input type = "text" name = "contactname" value = {this.state.name} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Phone Number</label> <br></br>
                    <input type = "number" name = "phonenumber" value = {this.state.phonenumber} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Location</label> <br></br>
                    <input type = "text" name = "location" value = {this.state.location} onChange = {this.handleOnChange}></input> <br></br>

                    <br></br>
                
                    <button type="button" onClick = {this.handleSubmit}>Update</button>

                </form>
            </div>
        )
    }
  

}

export default EditContact;