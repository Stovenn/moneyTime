import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRegisterForm, createUser } from "../store/actions/userActions";
import Step1 from "./Register/Step1";
import Step2 from "./Register/Step2";
import Step3 from "./Register/Step3";
import Step4 from "./Register/Step4";
import Step5 from "./Register/Step5";

class RegisterScreen extends Component {
  nextStep = () => {
    if(this.props.step === 4){ 
        this.props.createUser(this.props.form)
    }
    this.props.incrementStep();
  };

  previousStep = () => {
    if (this.props.step === 1) {
      this.props.navigation.goBack();
    } else {
      this.props.decrementStep();
    }
  };

  handleChange = (field, value) => {
    this.props.updateRegisterForm(field, value);
  };

  render() {
    switch (this.props.step) {
      case 1:
        return (
          <Step1
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.props.updateRegisterForm}
            values={this.props.form}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.props.updateRegisterForm}
            values={this.props.form}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.props.updateRegisterForm}
            values={this.props.form}
          />
        );
      case 4:
        return (
          <Step4
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.props.updateRegisterForm}
            values={this.props.form}
          />
        );
      case 5:
        return (
          <Step5
            nextStep={this.props.incrementStep}
            previousStep={this.previousStep}
            handleChange={this.props.updateRegisterForm}
            values={this.props.form}
          />
        );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.registerForm,
    step: state.registerStep,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    updateRegisterForm: (fieldName, fieldValue) =>
      dispatch(updateRegisterForm(fieldName, fieldValue)),
    incrementStep: () => dispatch({ type: "INCREMENT_STEP" }),
    decrementStep: () => dispatch({ type: "DECREMENT_STEP" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
