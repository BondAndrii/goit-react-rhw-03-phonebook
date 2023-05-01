
import React, { Component } from "react";

import { nanoid } from "nanoid";

export class ContactForm extends Component {
    state = {        
        name: '',
        number: '',
        id:'',
    };
    
    handleChange = (event) => {
        const { name } = event.target;
        console.log(name);
        // патерн керуючого елементу. З клавіатури знімається те, що воодить юзер та записується в стейт. А на екран вивиодиться, те, що записано в стейті.
        //Тобто ми вклинюємся між юзер - клавіатурою і юзер - екраном, можемо робити маніпуляції, валідацію, цензуру з тим, що юзер вводить і відображати
        // в інпуті те, що пройшло через наші маніпуляції з введеним з клавіатури
        const { value } = event.currentTarget;       
        this.setState({ [name]: value, id: nanoid(), });       
    }
    handleSubmit = (event) => {       
        event.preventDefault();
        this.props.onSubmit(this.state);        
        this.reset();
                      
    }
    reset = () => {
        this.setState({ name: '', number: '', id:''})
    }
    
    render() {
        const { name, number } = this.state;
    return (
        <>
        
        <form onSubmit={this.handleSubmit}>
                <label>
                    <p>Name</p>                    
                    <input
                        type="text"
                        name="name"                        
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange}
                    /> 
                </label>
                <label>
                    <p>Number</p>
                    <input
                        type="tel"
                        name="number"                        
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleChange}
                        />
                </label>
                <button type="submit" >Add contact</button>
            </form>
        </>
        )
    }
}