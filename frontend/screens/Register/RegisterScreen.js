import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateRegisterForm,
  createUser,
  updateUser,
  resetRegisterForm,
} from "../../store/actions/userActions";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";

class RegisterScreen extends Component {
  nextStep = async () => {
    if (this.props.step === 7) {
      await this.props.createUser(this.props.form);
      //await this.props.generateWorkouts()
      this.props.resetRegisterForm();
      return;
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

  renderSwitch = () => {
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
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.props.updateRegisterForm}
            values={this.props.form}
          />
        );
      case 6:
        return (
          <Step6
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.props.updateRegisterForm}
            values={this.props.form}
          />
        );
      case 7:
        return (
          <Step7
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.props.updateRegisterForm}
            values={this.props.form}
          />
        );
    }
  };

  render() {
    return <React.Fragment>{this.renderSwitch()}</React.Fragment>;
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
   // updateUser: (user) => dispatch(updateUser(user)),
    updateRegisterForm: (fieldName, fieldValue) =>
      dispatch(updateRegisterForm(fieldName, fieldValue)),
    resetRegisterForm: () => dispatch(resetRegisterForm()),
    incrementStep: () => dispatch({ type: "INCREMENT_STEP" }),
    decrementStep: () => dispatch({ type: "DECREMENT_STEP" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
