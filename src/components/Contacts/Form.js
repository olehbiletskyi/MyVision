import React from 'react';
import './Form.css';
import {CgUserAdd} from 'react-icons/cg'; 
import {FiMail, FiLink,} from 'react-icons/fi'; 
import {RiMailSendLine} from 'react-icons/ri'; 

function From () {
    return(
        // <div className="main-container">
        <div className="Form-container">

                    <h1 className="Form-title">Comments, feedback, suggestions, or just say hi:</h1>

                    <form className="form"  Validate>

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
                                    // value={this.state.email}
                                    // onChange={this.handleChangeEmailInput}
                                    autocomplete='off'
                                />
                                {/* {this.state.errorEmail && (
                                        <div className="errorEmailMessage">{this.state.errorEmail}</div>
                                )} */}
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
                                    // value={this.state.email}
                                    // onChange={this.handleChangeEmailInput}
                                    autocomplete='off'
                                />
                                {/* {this.state.errorEmail && (
                                        <div className="errorEmailMessage">{this.state.errorEmail}</div>
                                )} */}
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
                                <textarea
                                    className='Form-message-field'
                                    name='Form-message-input'
                                    type='text'
                                    placeholder="Message"
                                    // value={this.state.email}
                                    // onChange={this.handleChangeEmailInput}
                                    autocomplete='off'
                                />
                                {/* {this.state.errorEmail && (
                                        <div className="errorEmailMessage">{this.state.errorEmail}</div>
                                )} */}
                            </div>
                            <button className='Form-submit-btn' type='submit'> 
                                <div className='Form-submit-btn-inner'>
                                    <span className='Form-submit-btn-text'>Send now</span>
                                    <RiMailSendLine className='Form-submit-btn-icon'/>
                                </div>
                             
                            </button>
                        </div>

                        


                        



    


                        

                    </form>

            </div>
    );
};
export default From;