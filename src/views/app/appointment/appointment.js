/*eslint-disable */
import React, { useEffect, useState } from 'react';
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  CustomInput,
  FormGroup,
  Row,
  TabContent,
  Table,
  TabPane,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import src1 from '../../../Images/mehmaams.PNG';
import src2 from '../../../Images/shahzaibs.PNG';
import src3 from '../../../Images/SHERA.jpg';
import src from '../../../Images/tulaibs.PNG';
import { NavLink } from 'react-router-dom';

const Appointment = ({ match }) => {
  const [selectedRadio, setSelectedRadio] = useState('');
  const [activeSecondTab, setActiveSecondTab] = useState('1');

  const Appointments = [
    {
      imgSrc: src1,
      label: 'Mehmaam',
      details: '10:00 12:30 1:00 1:30 2:00 2:30 3:00',
      fee: 2000,
      star: 1,
      sex: 'Female',
      Day: 'monday',
      time: '2:00-2:00pm',
      status: 'pending',
    },
    {
      imgSrc: src,
      label: 'Tulaib',
      details: '10:00 12:30 1:00 1:30 2:00 2:30 3:00',
      fee: 2000,
      star: 1,
      sex: 'Female',
      Day: 'monday',
      time: '2:00-2:00pm',
      status: 'pending',
    },
    {
      imgSrc: src2,
      label: 'Shahzaib',
      details: '10:00 12:30 1:00 1:30 2:00 2:30 3:00',
      fee: 10000,
      star: 1,
      sex: 'Male',
      Day: 'monday',
      time: '2:00-2:00pm',
      status: 'approved',
    },
    {
      imgSrc: src3,
      label: 'Wahaj',
      details: '10:00 12:30 1:00 1:30 2:00 2:30 3:00',
      fee: 4000,
      star: 1,
      sex: 'Male',
      Day: 'monday',
      time: '2:00-2:00pm',
      status: 'rejected',
    },
  ];

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Appointments" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>Appointments </CardTitle>
              <div className="mb-4 text-center">
                <ButtonGroup>
                  <Button
                    color="success"
                    outline
                    onClick={() => setSelectedRadio('1')}
                    active={selectedRadio === '1'}
                  >
                    Pending
                  </Button>
                  <Button
                    color="success"
                    outline
                    onClick={() => setSelectedRadio('2')}
                    active={selectedRadio === '2'}
                  >
                    Approved{' '}
                  </Button>
                  <Button
                    color="success"
                    outline
                    onClick={() => setSelectedRadio('3')}
                    active={selectedRadio === '3'}
                  >
                    Rejected{' '}
                  </Button>
                </ButtonGroup>
              </div>
              <TabContent activeTab={selectedRadio}>
                <TabPane tabId="1">
                  <Row>
                  <Colxx sm="12" lg="12">
                      <Card className="mb-4">
                        <CardBody>
                          <CardTitle>Pending Appointments</CardTitle>
                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>DP</th>
                                <th>Doctor Name</th>
                                <th>Appoitment Date</th>
                                <th>Appoitment Time</th>
                                <th>Status</th>
                                <th>Fee</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            {Appointments &&
                              Appointments.filter(
                                (item) => item.status === 'pending'
                              ).map((item, index) => {
                                return (
                                  <>
                                    <tbody>
                                      <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>
                                          <img
                                            src={item?.imgSrc}
                                            width="50px"
                                            height="50px"
                                            style={{ borderRadius: '50%' }}
                                          />
                                        </td>
                                        <td className="pt-50">{item.label}</td>
                                        <td>{item.Day}</td>
                                        <td>{item.time}</td>
                                        <td>{item.status}</td>
                                        <td>{item.fee}</td>
                                        <td>{
                                          item.status === 'pending' ? (
                                            <Button style={{height:"20px",padding:10,paddingTop:0}} outline>Cancel</Button>
                                            ) :
                                          <Button style={{height:"20px",padding:10,paddingTop:0}} outline>Chat</Button>
                                        }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </>
                                );
                              })}{' '}
                          </Table>
                        </CardBody>
                      </Card>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Colxx sm="12" lg="12">
                      <Card className="mb-4">
                        <CardBody>
                          <CardTitle>Approved By Doctor/Trainer</CardTitle>
                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th></th>
                                <th>Doctor Name</th>
                                <th>Appoitment Date</th>
                                <th>Appoitment Time</th>
                                <th>Status</th>
                                <th>Fee</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            {Appointments &&
                              Appointments.filter(
                                (item) => item.status === 'approved'
                              ).map((item, index) => {
                                return (
                                  <>
                                    <tbody>
                                      <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>
                                          <img
                                            src={item?.imgSrc}
                                            width="50px"
                                            height="50px"
                                            style={{ borderRadius: '50%' }}
                                          />
                                        </td>
                                        <td className="pt-50">{item.label}</td>
                                        <td>{item.Day}</td>
                                        <td>{item.time}</td>
                                        <td>{item.status}</td>
                                        <td>{item.fee}</td>
                                        <td>{
                                          item.status === 'pending' ? (
                                            <Button>Cancel</Button>
                                          ) :
                                          <Button style={{height:"20px",padding:10,paddingTop:0}} outline>Chat</Button>
                                        }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </>
                                );
                              })}{' '}
                          </Table>
                        </CardBody>
                      </Card>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                  <Colxx sm="12" lg="12">
                      <Card className="mb-4">
                        <CardBody>
                          <CardTitle>Rejected By Doctor/Trainer</CardTitle>
                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th></th>
                                <th>Doctor Name</th>
                                <th>Appoitment Date</th>
                                <th>Appoitment Time</th>
                                <th>Status</th>
                                <th>Fee</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            {Appointments &&
                              Appointments.filter(
                                (item) => item.status === 'rejected'
                              ).map((item, index) => {
                                return (
                                  <>
                                    <tbody>
                                      <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>
                                          <img
                                            src={item?.imgSrc}
                                            width="50px"
                                            height="50px"
                                            style={{ borderRadius: '50%' }}
                                          />
                                        </td>
                                        <td className="pt-50">{item.label}</td>
                                        <td>{item.Day}</td>
                                        <td>{item.time}</td>
                                        <td>{item.status}</td>
                                        <td>{item.fee}</td>
                                        <td>{
                                          item.status === 'rejected' ? (
                                            <Button style={{height:"20px",padding:10,paddingTop:0}} outline>Reason</Button>

                                          ) :
                                          <Button style={{height:"20px",padding:10,paddingTop:0}} outline>Chat</Button>
                                        }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </>
                                );
                              })}{' '}
                          </Table>
                        </CardBody>
                      </Card>
                    </Colxx>
                  </Row>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Colxx>
      
      </Row>
    </>
  );
};

export default Appointment;

const ImageCardList = (props) => {
  const [getData, setGetData] = useState(props);
  // console.log(props)
  // useEffect(() => {
  // }, [getData])

  const handleApprove = () => {
    if (props.status === 'pending')
      setGetData({ ...getData, status: 'approved' });
    console.log(getData);
  };
  console.log(getData);

  return (
    <Row>
      <Colxx xxs="12">
        <Row>
          <Colxx xxs="12">
            <Card className="d-flex flex-row mb-3">
              <NavLink to="#" location={{}} className="d-flex">
                <img
                  alt="Thumbnail"
                  src={props.image}
                  className="list-thumbnail responsive border-0 card-img-left"
                />
              </NavLink>
              <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                  <NavLink to="#" location={{}} className="w-40 w-sm-100">
                    <p className="list-item-heading mb-1 truncate">
                      {props.mainTitle}
                    </p>
                  </NavLink>
                  <p className="mb-1 text-muted text-small w-15 w-sm-100 text-uppercase">
                    {props.day}
                  </p>
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    {props.time}
                  </p>
                  <div className="w-15 w-sm-100">
                    <Button
                      color="success"
                      outline
                      className="mr-2"
                      onClick={handleApprove}
                    >
                      Approve
                    </Button>
                    <Button color="danger">Reject</Button>
                  </div>
                </div>
                <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                  <p className="mt-3 text-muted text-small w-300 w-sm-100">
                    {props.fee}.Rs
                  </p>
                </div>
              </div>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};
