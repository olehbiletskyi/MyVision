import React from 'react';
import './Form.css';
import {CgUserAdd} from 'react-icons/cg'; 
import {FiMail, FiLink,} from 'react-icons/fi'; 
import {RiMailSendLine} from 'react-icons/ri'; 
import { FiCheckCircle } from 'react-icons/fi'

const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

class From extends React.Component  {
    constructor() {
        super();
        this.state = {
            name:null,
            email:null,
            link:null,
            message:null,

            errorName: null,
            errorEmail: null,
            errorLink: null,
            errorMessage: null,




            LOADER: false,
            SUCCESS : false,

        };
        this.handleChangeNameInput = this.handleChangeNameInput.bind(this)
        this.handleChangeEmailInput = this.handleChangeEmailInput.bind(this)
        this.handleChangeLinkInput = this.handleChangeLinkInput.bind(this)
        this.handleChangeMessageInput = this.handleChangeMessageInput.bind(this)

        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    };
    handleChangeNameInput(e) {
        this.setState({name: e.target.value})
        if (e.target.value === null || e.target.value.length < 3) {
            this.setState((state)=>{
                return {errorName: "Мінімум 3 символи"}
            })
        } else {
            this.setState({errorName: true})
        }
    }
    handleChangeEmailInput(e) {
        this.setState({email: e.target.value})

        if (!emailRegex.test(e.target.value)) {
            this.setState((state)=>{
                return {errorEmail: "Перевірте коректність імейлу"}
            })
        } else {
            this.setState({errorEmail: true})
        }
    }   
    handleChangeLinkInput(e) {
        this.setState({link: e.target.value})
        if (e.target.value.length > 25) {
            this.setState((state)=>{
                return {errorLink: "Забагато символів"}
            })
        } else {
            this.setState({errorLink: true})
        }
    }
    handleChangeMessageInput(e) {
        if (e.target.value === null || e.target.value.length < 2) {
            this.setState((state)=>{
                return {errorMessage: 'Мінімум "hi" :)'}
            })
        } else {
            this.setState({errorMessage: true})
        }
    }


    
    handleSubmitForm(e) {
        e.preventDefault();
        setTimeout(() => this.setState({LOADER: true}), 500);
        setTimeout(() => this.setState({LOADER: false, SUCCESS: true}), 2000);
        this.setState({message: e.target.value})
        const  {name, email, link, message} = this.state;
        if (this.state.errorName === true && this.state.errorEmail === true && this.state.errorMessage === true ) {
            console.log(name, email, link, message)
        }
    }
render() {
    return(
        <div className={!this.state.SUCCESS ? "Form-container" : "Form-container-2"}>

                    

                    {!this.state.SUCCESS && !this.state.LOADER ? 
                    <>
                    
                    
                    <h1 className="Form-title">Comments, feedback, suggestions, or just say hi:</h1>

                    <form className="form"  noValidate>

                        <div className="Form-col1">
                            <div className="Form-section">
                                <div className="From-input-icons">
                                    <CgUserAdd className="Form-input-icons-item"/>
                                </div>
                                <input
                                    className='Form-field'
                                    name='Form-name-input'
                                    type='text'
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleChangeNameInput}
                                    autocomplete='off'
                                />
                                {this.state.errorName && (
                                        <div className="errorNameMessage">{this.state.errorName}</div>
                                )}
                            </div>
                            <div className="Form-section">
                                <div className="From-input-icons">
                                   <FiMail className="Form-input-icons-item"/> 
                                </div>
                                <input
                                    className='Form-field'
                                    name='Form-email-input'
                                    type='email'
                                    placeholder="e-mail"
                                    value={this.state.email}
                                    onChange={this.handleChangeEmailInput}
                                    autocomplete='off'
                                />
                                {this.state.errorEmail && (
                                        <div className="errorEmailMessage">{this.state.errorEmail}</div>
                                )}
                            </div>
                            <div className="Form-section">
                                <div className="From-input-icons">
                                    <FiLink className="Form-input-icons-item"/>
                                </div>
                                <input
                                    className='Form-field'
                                    name='Form-link-input'
                                    type='email'
                                    placeholder="link"
                                    value={this.state.link}
                                    onChange={this.handleChangeLinkInput}
                                    autocomplete='off'
                                />
                                {this.state.errorLink && (
                                        <div className="errorLinkMessage">{this.state.errorLink}</div>
                                )}
                            </div>
                        </div>

                        <div className="Form-col2">
                            <div className="Form-message-section">
                                <textarea
                                    className='Form-message-field'
                                    name='Form-message-input'
                                    type='text'
                                    placeholder="Message"
                                    value={this.state.message}
                                    onChange={this.handleChangeMessageInput}
                                    autocomplete='off'
                                />
                                {this.state.errorMessage && (
                                        <div className="errorMessageMessage">{this.state.errorMessage}</div>
                                )}
                            </div>
                            <button className='Form-submit-btn' type='submit' onClick={this.handleSubmitForm} disabled={this.state.errorName!=true || this.state.errorEmail!=true || this.state.errorMessage!=true }> 
                                <div className='Form-submit-btn-inner'>
                                    <span className='Form-submit-btn-text'>Send now</span>
                                    <RiMailSendLine className='Form-submit-btn-icon'/>
                                </div>
                             
                            </button>
                        </div>


                    </form>
                    </>



                    :
                    
                    (this.state.LOADER) 
                    ? 
                    <div class="lds-dual-ring"></div>
                    :
                    (this.state.SUCCESS) 
                    ? 
                    (<div className="success">
                        <FiCheckCircle className="success-icon"/>
                    </div>)
                    :
                    null


                    }


                    


                       
            </div>
    );
};
};
export default From;