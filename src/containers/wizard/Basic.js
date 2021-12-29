/* eslint-disable */
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CustomInput, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import IntlMessages from 'helpers/IntlMessages';
import BottomNavigation from 'components/wizard/BottomNavigation';
import TopNavigation from 'components/wizard/TopNavigation';
import { Select } from '@material-ui/core';
import { FormikReactSelect } from 'containers/form-validations/FormikFields';
import { Link } from 'react-router-dom';

const Basic = ({ intl }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [Degree, setDegree] = useState('');
  const [conType, setconType] = useState('');
  const [disease, setDisease] = useState('');
  const [institue, setinstitue] = useState('');
  const [city, setcity] = useState('');
  const [experienceOrg, setexperienceOrg] = useState('');
  const [yearexp, setyearexp] = useState('');
  const [designation, setdesignation] = useState('');
  const [location, setlocation] = useState('');


  console.log(name, "name")
  console.log(email, "email")
  console.log(password, "password")


  const topNavClick = (stepItem, push) => {
    push(stepItem.id);
  };

  const onClickNext = (goToNext, steps, step) => {
    step.isDone = true;
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    goToNext();
  };

  const onClickPrev = (goToPrev, steps, step) => {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  };

  const { messages } = intl;



  return (
    <Card>
      <CardBody className="wizard wizard-default">
        <Wizard>
          <TopNavigation
            className="justify-content-center"
            disableNav={false}
            topNavClick={topNavClick}
          />
          <Steps>
            <Step
              id="step1"
              name={messages['wizard.step-name-1']}
              desc={messages['wizard.step-desc-1']}
            >
              <div className="wizard-basic-step">
                <Form>
                  <FormGroup>
                    <Label>
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Dr. / Mr. Ahmed"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Label>
                      Email
                    </Label>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Ahmed@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Label>
                      password
                    </Label>
                    <Input
                      type="text"
                      name="password"
                      placeholder="***"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                </Form>
              </div>
            </Step>
            <Step
              id="step2"
              name={messages['wizard.step-name-2']}
              desc={messages['wizard.step-desc-2']}
            >
              <div className="wizard-basic-step">
                <Form>
                  <FormGroup>
                    <Label>
                      Age
                    </Label>
                    <Input
                      type="number"
                      name="age"
                      placeholder="20"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                      <Label>
                      Gender
                    </Label>
                    <select
                      name="gender"
                      className="form-control"
                      onChange={(e) => {
                        setGender(e.target.value)
                        // calculate()
                      }}
                    >
                      <option value="">Select an option..</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">other</option>
                    </select>
                    <Label>
                      Address
                    </Label>
                    <Input
                      type="text"
                      name="address"
                      placeholder="House#222,Area##,Karachi"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormGroup>
                </Form>
              </div>
            </Step>
            <Step
              id="step3"
              name={messages['wizard.step-name-3']}
              desc={messages['wizard.step-desc-3']}
            >
              <div className="wizard-basic-step">
                <Form>
                  <FormGroup>
                  
                    <Label>
                      Consultation Type
                    </Label>

                    <select
                      name="conType"
                      className="form-control"
                      onChange={(e) => setconType(e.target.value)}
                    >
                      <option value="">Consultation Type?</option>
                      <option value="doctor">Doctor</option>
                      <option value="trainer">Trainer</option>
                    </select>

                    {
                      conType === "doctor" ?
                      <>
                      <Label>
                      Degree
                    </Label>
                      <Input
                      type="text"
                      name="degree"
                      placeholder="DPT,General Physician etc"
                      value={Degree}
                      onChange={(e) => setDegree(e.target.value)}
                    />
                      <Label>
                      Institute Name
                    </Label>
                      <Input
                      type="text"
                      name="institue"
                      placeholder="Dow, Jinnah Medical"
                      value={institue}
                      onChange={(e) => setinstitue(e.target.value)}
                    />
                      <Label>
                      City
                    </Label>
                      <Input
                      type="text"
                      name="city"
                      placeholder="Karachi"
                      value={city}
                      onChange={(e) => setcity(e.target.value)}
                    />
                      <Label>
                      Degree Image
                    </Label>
                    <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser1"
                  name="customFile"
                />
              </InputGroup>
                      </>
                    :  conType === "trainer" ?
                    <>
                     <Label>
                      Organization Name
                    </Label>
                      <Input
                      type="text"
                      name="institue"
                      placeholder="Beast Gym,Hulk etc "
                      value={institue}
                      onChange={(e) => setinstitue(e.target.value)}
                    />
                     <Label>
                      Professional Certificate
                    </Label>
                    <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                <CustomInput
                  type="certificate"
                  id="exampleCustomFileBrowser1"
                  name="certificate"
                />
              </InputGroup>
                    </>
                    : ""
                    }
                    {/* <Input
                      type="text"
                      name="disease"
                      placeholder="ulcer, cardiac, asthama"
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                    /> */}
                 <Label>
                      Experience
                    </Label>
                    <Input
                      type="text"
                      name="experienceOrg"
                      placeholder="Organization Name"
                      value={experienceOrg}
                      onChange={(e) => setexperienceOrg(e.target.value)}
                    />
                 <Label>
                      Years Of Experience
                    </Label>
                    <Input
                      type="text"
                      name="yearexp"
                      placeholder="Organization Name"
                      value={yearexp}
                      onChange={(e) => setyearexp(e.target.value)}
                    />
                    <Label>
                      Designation
                    </Label>
                    <Input
                      type="text"
                      name="designation"
                      placeholder="Head, Junior, Assistant"
                      value={designation}
                      onChange={(e) => setdesignation(e.target.value)}
                    />
                    <Label>
                      Location
                    </Label>
                    <Input
                      type="text"
                      name="location"
                      placeholder="City , Country"
                      value={location}
                      onChange={(e) => setlocation(e.target.value)}
                    />
                  
                
                  </FormGroup>
                </Form>
              </div>
            </Step>
            <Step id="step4" hideTopNav>
                <CardTitle className='text-center'>Thank You For Registering In Dr Fitness</CardTitle>
                <CardBody className='text-center'>We Have Recieved Your Information, You'll Recieve 
                confrimation Email from our server shortly, After Verification of information you provided.
                Email Will be provided with your Login Credentials</CardBody>
            </Step>
          </Steps>
          <BottomNavigation
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            className="justify-content-center"
            prevLabel={messages['wizard.prev']}
            nextLabel={messages['wizard.next']}
          />
        </Wizard>
      </CardBody>
    </Card>
  );
};




export default injectIntl(Basic);
