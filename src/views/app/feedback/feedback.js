/*eslint-disable*/

import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik'; 
import { Row, Card, CardBody, FormGroup, Label, Button, CardTitle } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Feedbacks } from '../../../../src/data/comments';
import { NavLink } from 'react-router-dom';
import { adminRoot } from 'constants/defaultValues';

const Feedback = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Feedback" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
         <FormikBasicFormLevel />
        </Colxx>
      </Row>
    </>
  );
};

export default Feedback;


const FormikBasicFormLevel = () => {
  const onSubmit = (values) => {
    
    // fetch('http://localhost:3000/Feedbacks',{
    //   method:'POST',
    //   headers:{"Content-Type":"application/json"},
    //   body:JSON.stringify(values)
    // }).then(()=>{
    //   console.log("added")
    //   console.log(Feedbacks)
    // })
    
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Please enter your email address';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.name) {
      errors.name = 'Please enter your name';
    } else if (values.name === 'admin') {
      errors.name = 'Value must be longer than 2 characters';
    }

    if (!values.message) {
      errors.message = 'Min 20 words';
    } else if (values.name === 'admin') {
      errors.name = 'Value must be longer than 2 characters';
    }
    
    return errors;
  };

  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        <Card>
          <CardBody>
            <h6 className="mb-4">We respect your valueable Response!</h6>
            <Formik
              validate={validate}
              initialValues={{
                name: '',
                email: '',
                message:'',
              }}
              onSubmit={onSubmit}
            >
              {({ errors, touched, isValidating }) => (
                <Form className="av-tooltip tooltip-label-right">
                  <FormGroup>
                    <Label>Name</Label>
                    <Field className="form-control" name="name" />
                    {errors.name && touched.name && (
                      <div className="invalid-feedback d-block">
                        {errors.name}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Email</Label>
                    <Field className="form-control" name="email" />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>
                
                  <FormGroup>
                    <Label>Message</Label>
                    <Field
                      className="form-control"
                      name="message"
                      component="textarea"
                    />
                    {errors.message && touched.message ? (
                      <div className="invalid-feedback d-block">
                        {errors.message}
                      </div>
                    ) : null}
                  </FormGroup>

                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
        <NewComments className="mb-4" displayRate />
      </Colxx>
    </Row>
  );
};

const NewComments = ({ className = '', displayRate = false }) => {
  return (
    <Card className={className}>
      <CardBody>
        <CardTitle>
          <h2>All Feedbacks</h2>
      </CardTitle>
        <div className="dashboard-list-with-user">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {Feedbacks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-row mb-3 pb-3 border-bottom"
                >
                  <NavLink to={`${adminRoot}/pages/product/details`}>
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                    />
                  </NavLink>

                  <div className="pl-3 pr-2">
                    <NavLink to={`${adminRoot}/pages/product/details`}>
                      <p className="font-weight-medium mb-0 text-uppercase">{item.name} <span className="font-weight-light text-lowercase">{item.email}</span></p> 
                      <p className="text-muted mb-0 text-small">
                        {item.message}
                      </p>
                      {displayRate && (
                        <div className="form-group mb-1 mt-2">
                          {/* <Rating total={5} rating={5} interactive={false} />  */}
                        </div>
                      )}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};