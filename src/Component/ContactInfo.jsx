import React, { Component } from 'react'


class ContactInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            name : "",
            phonenumber : "",
            location : ""
        };
    }
    handleOnChange = (event) =>{
        this.setState(
            { [event.target.name] : event.target.value} //This shows the value that was being type in the input box blow 
        )
    }

    handleSubmit = () => {
        this.props.addContact(this.state);
        
        this.setState({
            name : "",
            phonenumber : "",
            location : ""
        }) //It resets ot takes off the value that typed in the input filled back to empty
    }

    
    render() {
        return (
            <div>
                <form>
                    <h4>Add New Contact</h4>
                    <label>Name</label> <br></br>
                    <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleOnChange}></input> <br></br>
                    <br></br>

                    <label>Phone Number</label> <br></br>
                    <input type = "text" name = "phonenumber" value = {this.state.phonenumber} onChange = {this.handleOnChange} ></input> <br></br>
                    <br></br>
                    
                    <label>Location</label> <br></br>
                    <input type = "text" name = "location" value = {this.state.location} onChange = {this.handleOnChange}></input> <br></br>

                    <br></br>

                    <button type="button" onClick = {this.handleSubmit} >Sumbit </button>
                   
            
                </form>
            </div>
        )
    }
}

export default ContactInfo;
