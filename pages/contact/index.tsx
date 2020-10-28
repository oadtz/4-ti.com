import React from 'react';
import Layout from '../../components/Layout';

class ContactUs extends React.Component<any, any> {
    state = {
        nameInput: '',
        emailInput: '',
        subjectInput: '',
        messageInput: '',
    }

    public render () {     
        return (
            <Layout breadcrumbItems={[{text: 'contactus'}]}>
                <section id="contactform" className="section">
                    <div className = "container">
                        <h1 className="title">
                            Contact Us
                        </h1>

                        <form className="form">

                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Your Name"
                                    value={this.state.nameInput} 
                                    onChange={(e) => this.setState({nameInput: e.target.value})}  
                                    required />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                    <div className="control">
                                        <input 
                                        className="input" 
                                        type="email" 
                                        placeholder="Email" 
                                        value={this.state.emailInput} 
                                        onChange={(e) => this.setState({emailInput: e.target.value})} 
                                        required 
                                        />
                                    </div>
                            </div>

                            <div className="field">
                                <label className="label">Subject</label>
                                <div className="control">
                                    <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Subject" 
                                    value={this.state.subjectInput}
                                    onChange={(e) => this.setState({subjectInput: e.target.value})}
                                    required/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea 
                                    className="textarea" 
                                    placeholder="Textarea" 
                                    required
                                    value={this.state.messageInput}
                                    onChange={(e) => this.setState({messageInput: e.target.value})}
                                    >
                                    </textarea>
                                </div>
                            </div>

                            <div className="field is-grouped is-grouped-right">
                                <div className="control has-text-left">
                                    <button className="button is-primary" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </section>

            </Layout>
        );
    }
}

export default ContactUs;