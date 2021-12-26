import React, {Component} from "react";
import "./Form.css";
import {withFormik} from "formik";


class Form extends Component {

    render() {
        return (
            <>
                <div className="container-form">
                    <div className="blue-button">
                        <span className="bold">Try it free 7 days</span> then $20/mo. thereafter
                    </div>
                    <form>
                        <label htmlFor="firstname">
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={this.props.values.firstname}
                                onChange={this.props.handleChange}
                                onBlur={this.props.handleBlur}

                            />
                        </label>
                        {this.props.touched.firstname && this.props.errors.firstname &&
                        <div className="error-text">{this.props.errors.firstname}</div>}

                        <label htmlFor="lastname">
                            <input type="text"
                                   id="lastname"
                                   name="lastname"
                                   value={this.props.values.lastname}
                                   onChange={this.props.handleChange}
                                   onBlur={this.props.handleBlur}
                            />
                        </label>
                        {this.props.touched.lastname && this.props.errors.lastname &&
                        <div className="error-text">{this.props.errors.lastname}</div>}
                        <label htmlFor="email">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={this.props.values.email}
                                onChange={this.props.handleChange}
                                onBlur={this.props.handleBlur}
                            />
                        </label>
                        {this.props.touched.email && this.props.errors.email &&
                        <div className="error-text">{this.props.errors.email}</div>}
                        <label htmlFor="password">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={this.props.values.password}
                                onChange={this.props.handleChange}
                                onBlur={this.props.handleBlur}
                            />
                        </label>
                        {this.props.touched.password && this.props.errors.password &&
                        <div className="error-text">{this.props.errors.password}</div>}

                        <div className="green-button" onClick={this.props.handleSubmit}>
                            Claim your free trial

                        </div>
                        <div className="terms">
                            By clicking the button, you are agreeing to our <span
                            className="accent">Terms and Services</span>

                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }),
    validate: values => {
        const errors = {};


        if (values.firstname.length < 1) {
            errors.firstname = " First name can't be empty";
        }

        if (values.lastname.length < 1) {
            errors.lastname = "Last name can't be empty";
        }

        if (values.email.length < 1 ) {
            errors.email = "Looks like it's not an email";
        }
        if(!values.email.includes('@')) {
            errors.email = "Looks like it's not an email";
        }

        if (values.password.length < 1) {
            errors.password = "Password can\'t be empty";

        }
        return errors;
    },
    handleSubmit: (values, {props}) => {
        props.validation(values.firstname, values.lastname, values.email, values.password)
    }


})(Form);
