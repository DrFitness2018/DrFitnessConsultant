// /*eslint-disable */
// import React from 'react';
// import { Row } from 'reactstrap';
// import { Colxx, Separator } from 'components/common/CustomBootstrap';
// import Breadcrumb from 'containers/navs/Breadcrumb';
// import imgss from '../../../Images/lap-consul/1.JPG'

// const Profile = ({ match }) => {

//   const ProfileData = [
//     {
//       imgsrc:imgss,
//       Name:'tulaib'
//     }
//   ]

//   return (
//     <>
//       <Row>
//         <Colxx xxs="12">
//           <Breadcrumb heading="Profile" match={match} />
//           <Separator className="mb-5" />
//         </Colxx>
//       </Row>
//       <Row>
//         <Colxx xxs="12" className="mb-4">
//           <div style={{width:'200px',heiht:'200px'}}>
//           <img src={ProfileData.imgsrc} width="100%" heigth="100%"/>
//           </div>
//           <div>
//             <h2>{ProfileData.Name}</h2>
//           </div>
//         </Colxx>
//       </Row>
//     </>
//   );
// };

// export default Profile;

/* eslint-disable */
// import { NotificationManager } from 'components/common/react-notifications';
import React, { useEffect } from 'react';
import { ButtonGroup, CardBody, Col, Row, Table } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import Select from 'react-select';
import CustomSelectInput from 'components/common/CustomSelectInput';

import { useState } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import { Card, CardTitle, Label, FormGroup, Button, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import logo from '../../../Images/lap-consul/1.JPG';
import IconCards from 'containers/ui/IconCards';
import { Colxx } from 'components/common/CustomBootstrap';

export default function Profile(props) {
  const CurrentProduct = '';

  let [buttonName, setButtonName] = useState();

  const [thisView, setThisView] = useState(true);

  let [suspendloader, setsuspendloader] = useState(false);

  const editProfile = (e) => {
    e.preventDefault();
    setThisView(!thisView);
  };

  return (
    <Card>
      <CardBody>
        <div style={{ marginBottom: '30px' }}></div>
        <Formik>
          <Form>
            <Row className="h-100">
              <Col lg={12} className="mb-3">
                <div className="patient-img-container center-childrens p-4">
                  {/* <img
                  src={
                    user?.display_picture === '' ? logo : user?.display_picture
                  }
                  alt=""
                  className="img-fluid"
                /> */}
                  <img src={logo} alt="" style={{objectFit:'contain',objectFit:'cover'}}/>
                </div>
              </Col>

              {thisView ? (
                <>
                  <Col lg={4}>
                    <FormGroup>
                      <Label>
                        <h6
                          style={{
                            fontWeight: '700',
                            fontSize: '0.9rem',
                          }}
                        >
                          Name
                        </h6>
                      </Label>

                      <span>
                        {/* <p>{CurrentProduct?.name.toUpperCase()}</p> */}
                        <p>Dr.Tulaib</p>
                      </span>
                    </FormGroup>
                  </Col>

                  <Col lg={4}>
                    <FormGroup>
                      <Label>
                        <h6
                          style={{
                            fontWeight: '700',
                            fontSize: '0.9rem',
                          }}
                        >
                          Email
                        </h6>
                      </Label>

                      <span>
                        {/* <p>{CurrentProduct?.email}</p> */}
                        <p>tulaib@gmail.com</p>
                      </span>
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                    <FormGroup>
                      <Label>
                        <h6
                          style={{
                            fontWeight: '700',
                            fontSize: '0.9rem',
                          }}
                        >
                          Password
                        </h6>
                      </Label>
                      <span>
                        <p type="password">tulu</p>
                      </span>
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                    <FormGroup>
                      <Label>
                        <h6
                          style={{
                            fontWeight: '700',
                            fontSize: '0.9rem',
                          }}
                        >
                          Age
                        </h6>
                      </Label>

                      <span>
                        {/* <p>{CurrentProduct?.age}</p> */}
                        <p>24</p>
                      </span>
                    </FormGroup>
                  </Col>

                  <Col lg={4}>
                    <FormGroup>
                      <Label>
                        <h6
                          style={{
                            fontWeight: '700',
                            fontSize: '0.9rem',
                          }}
                        >
                          Height
                        </h6>
                      </Label>
                      <span>
                        {/* <p>{CurrentProduct?.age}</p> */}
                        <p>34</p>
                      </span>
                    </FormGroup>
                  </Col>

                  <Col lg={4}>
                    <FormGroup>
                      <Label>
                        <h6
                          style={{
                            fontWeight: '700',
                            fontSize: '0.9rem',
                          }}
                        >
                          Weight
                        </h6>
                      </Label>
                      <span>
                        {/* <p>{CurrentProduct?.weight}</p> */}
                        <p>70 Kg</p>
                      </span>
                    </FormGroup>
                  </Col>

                  <Col lg={4}>
                    <FormGroup>
                      <Label>
                        <h6
                          style={{
                            fontWeight: '700',
                            fontSize: '0.9rem',
                          }}
                        >
                          Gender
                        </h6>
                      </Label>
                      <span>
                        {/* <p>{CurrentProduct?.gender}</p> */}
                        <p>Male</p>
                      </span>
                    </FormGroup>
                  </Col>

                  <Col lg={4}>
                    <FormGroup>
                      <Label>
                        <h6
                          style={{
                            fontWeight: '700',
                            fontSize: '0.9rem',
                          }}
                        >
                          Certification
                        </h6>
                      </Label>
                      <span>
                        {/* {CurrentProduct?.certification ? (
                          <img
                            src={CurrentProduct?.product_image}
                            alt=""
                            width="20%"
                            height="100%"
                          />
                        ) : (
                          <p>{'N/A'}</p>
                        )} */}
                        <p>N/A</p>
                      </span>
                    </FormGroup>
                  </Col>
                </>
              ) : (
                <>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Name" />
                      </Label>

                      <Input
                        required
                        // value={product?.name}
                        className="form-control"
                        name="name"
                        // onChange={(e) =>
                        //   setProduct({ ...product, name: e.target.value })
                        // }
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <label>
                        <IntlMessages id="Select Category" />
                      </label>

                      <>
                        <Input
                          required
                          // value={product?.name}
                          className="form-control"
                          name="name"
                          // onChange={(e) =>
                          //   setProduct({ ...product, name: e.target.value })
                          // }
                        />
                      </>
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Price" />
                      </Label>

                      <Input
                        required
                        // value={product?.price}
                        type="number"
                        className="radio-in"
                        name="phone"
                        // validate={validateEmail}
                        // onChange={(e) => setNumber()}
                        // onChange={(e) =>
                        //   setProduct({
                        //     ...product,
                        //     price: Number(e.target.value),
                        //   })
                        // }
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Formula" />
                      </Label>

                      <Input
                        required
                        // value={product?.formula}
                        className="form-control"
                        name="formula"
                        // onChange={(e) =>
                        //   setProduct({ ...product, formula: e.target.value })
                        // }
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Description" />
                      </Label>

                      <Input
                        type="textarea"
                        className="form-control"
                        // value={product?.description}
                        name="description"
                        // onChange={(e) =>
                        //   setProduct({
                        //     ...product,
                        //     description: e.target.value,
                        //   })
                        // }
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="BarCode" />
                      </Label>

                      <Input
                        required
                        className="form-control"
                        name="barcode"
                        // value={product?.barcode}
                        // onChange={(e) =>
                        //   setProduct({ ...product, barcode: e.target.value })
                        // }
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Save info" />
                      </Label>

                      <ButtonGroup>
                      <Button
                        required
                        className="form-control"
                        name="barcode"
                        // value={product?.barcode}
                        // onChange={(e) =>
                        //   setProduct({ ...product, barcode: e.target.value })
                        // }
                      >
                        Submit
                      </Button>
                      <Button
                        style={{ backgroundColor: '#0066b3' }}
                        className="mr-3"
                        onClick={editProfile}
                      >
                        Back
                      </Button>
                      </ButtonGroup>
                    </FormGroup>
                  </Col>

                  {/* <Col lg={6}>
                    <div className="form-row">
                      <div className="form-group col-md-9">
                        <label className="">Select File :</label>
                        <input
                          type="file"
                          className="form-control"
                          name="upload_file"
                          // onChange={async (e) => {
                          //   await setFile(e.target.files);
                          // }}
                        />
                      </div>
                      <div
                        className="form-group col-md-3"
                        style={{ marginTop: '25px' }}
                      >
                        <Button
                          className={`btn-shadow btn-multiple-state ${
                            loadingFileUpload ? 'show-spinner' : ''
                          }`}
                          size="sm"
                          // onClick={uploadFile}
                          variant="outlined"
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </Col> */}
                </>
              )}
            </Row>

            {thisView ? (
              <Button
                style={{ backgroundColor: '#0066b3' }}
                className="mr-3"
                onClick={editProfile}
              >
                Edit Profile
              </Button>
            ) : (
              ''
              // <Button style={{ backgroundColor: '#0066b3' }} onClick={editData}>
              //   {loading ? (
              //     <div className="d-flex justify-content-center">
              //       <Loader height={18} width={18} type="Oval" color="#fff" />
              //       &nbsp; Updating
              //     </div>
              //   ) : (
              //     'Save'
              //   )}
              // </Button>
            )}
          </Form>
        </Formik>

        <Row className="icon-cards-row my-4">
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <IconCard
              title="Total Appointments"
              icon="iconsminds-arrow-refresh"
              value="56"
              className="mb-4"
            />
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <IconCard
              title="Total Revenue  "
              icon="iconsminds-arrow-refresh"
              value="56"
              className="mb-4"
            />
          </Colxx>
        </Row>
      </CardBody>
    </Card>
  );
}

const IconCard = ({ className = 'mb-4', icon, title, value }) => {
  return (
    <div className={`icon-row-item ${className}`}>
      <Card>
        <CardBody className="text-center">
          <i className={icon} />
          <p className="card-text font-weight-semibold mb-0">
            <IntlMessages id={title} />
          </p>
          <p className="lead text-center">{value}</p>
        </CardBody>
      </Card>
    </div>
  );
};
