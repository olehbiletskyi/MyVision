import React from 'react';
import './Form.css';
import {CgUserAdd} from 'react-icons/cg'; 
import {FiMail, FiLink} from 'react-icons/fi'; 

function From () {
    return(
        // <div className="main-container">
        <div className="Form-container">

                    <h1 className="Form-title">For comments, feedback, suggestions, or just say hi!</h1>

                    <form className="form"  noValidate>

                        <div className="Form-col1">
                            <div className="Form-name-section">
                                <CgUserAdd/>
                                <input
                                    className='Form-name-field'
                                    name='Form-name-input'
                                    type='text'
                                    placeholder="Name"
                                    // value={this.state.email}
                                    // onChange={this.handleChangeEmailInput}
                                    autocomplete='off'
                                />
                                {/* {this.state.errorEmail && (
                                        <div className="errorEmailMessage">{this.state.errorEmail}</div>
                                )} */}
                            </div>
                            <div className="Form-email-section">
                                <FiMail/>
                                <input
                                    className='Form-email-field'
                                    name='Form-email-input'
                                    type='email'
                                    placeholder="e-mail"
                                    // value={this.state.email}
                                    // onChange={this.handleChangeEmailInput}
                                    autocomplete='off'
                                />
                                {/* {this.state.errorEmail && (
                                        <div className="errorEmailMessage">{this.state.errorEmail}</div>
                                )} */}
                            </div>
                            <div className="Form-link-section">
                                <FiLink/>
                                <input
                                    className='Form-link-field'
                                    name='Form-link-input'
                                    type='email'
                                    placeholder="link"
                                    // value={this.state.email}
                                    // onChange={this.handleChangeEmailInput}
                                    autocomplete='off'
                                />
                                {/* {this.state.errorEmail && (
                                        <div className="errorEmailMessage">{this.state.errorEmail}</div>
                                )} */}
                            </div>
                        </div>

                        <div className="Form-col2">
                            <div className="Form-message-section">
                                <input
                                    className='Form-message-field'
                                    name='Form-message-input'
                                    type='text'
                                    placeholder="message"
                                    // value={this.state.email}
                                    // onChange={this.handleChangeEmailInput}
                                    autocomplete='off'
                                />
                                {/* {this.state.errorEmail && (
                                        <div className="errorEmailMessage">{this.state.errorEmail}</div>
                                )} */}
                            </div>
                            <button className='Form-submit-btn' type='submit' >Send now!</button>
                        </div>

                        


                        



    


                        

                    </form>

            </div>
    );
};
export default From;