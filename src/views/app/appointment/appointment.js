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
  TabPane,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import src from '../../../Images/lap-consul/1.JPG';
import src1 from '../../../Images/lap-consul/2.JPG';
import src2 from '../../../Images/lap-consul/3.JPG';
import { NavLink } from 'react-router-dom';

const Appointment = ({ match }) => {
  const [selectedRadio, setSelectedRadio] = useState('');
  const [activeSecondTab, setActiveSecondTab] = useState('1');

  const Appointments = [
    {
      imgSrc: src,
      label: 'DR. SHAHEDA ANWAR',
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
      label: 'DR. Ahmed KAzmi',
      details: '10:00 12:30 1:00 1:30 2:00 2:30 3:00',
      fee: 2000,
      star: 1,
      sex: 'Female',
      Day: 'monday',
      time: '2:00-2:00pm',
      status: 'pending',
    },
    {
      imgSrc: src1,
      label: 'DR. ASLAM PATHAN',
      details: '10:00 12:30 1:00 1:30 2:00 2:30 3:00',
      fee: 10000,
      star: 1,
      sex: 'Male',
      Day: 'monday',
      time: '2:00-2:00pm',
      status: 'approved',
    },
    {
      imgSrc: src2,
      label: 'DR. Tullu ',
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
                      {Appointments &&
                        Appointments.filter(
                          (item) => item.status === 'pending'
                        ).map((item, index) => {
                          return (
                            <ImageCardList
                              mainTitle={item.label}
                              image={item?.imgSrc}
                              badge="Dr Fitness Recommended"
                              day={item.Day}
                              fee={item.fee}
                              time={item.time}
                              status={item.status}
                            />
                          );
                        })}
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Colxx sm="12" lg="12">
                      {Appointments &&
                        Appointments.filter(
                          (item) => item.status === 'approved'
                        ).map((item, index) => {
                          return (
                            <ImageCardList
                              mainTitle={item.label}
                              image={item?.imgSrc}
                              badge="Dr Fitness Recommended"
                              day={item.Day}
                              fee={item.fee}
                              time={item.time}
                              status={item.status}
                            />
                          );
                        })}{' '}
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Colxx sm="12" lg="12">
                      {Appointments &&
                        Appointments.filter(
                          (item) => item.status === 'rejected'
                        ).map((item, index) => {
                          return (
                            <ImageCardList
                              mainTitle={item.label}
                              image={item?.imgSrc}
                              badge="Dr Fitness Recommended"
                              day={item.Day}
                              fee={item.fee}
                              time={item.time}
                              status={item.status}
                            />
                          );
                        })}{' '}
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

  const [getData,setGetData] = useState(props)
  // console.log(props)
  // useEffect(() => {
    // }, [getData])
    
    
    const handleApprove =()=>{
      if(props.status === 'pending' )
      setGetData({...getData,status:"approved"})
      console.log(getData)
    }
    console.log(getData)


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
                    <Button color='success' outline className='mr-2'
                    onClick={handleApprove}
                    >
                      Approve
                    </Button>
                    <Button color='danger'>
                      Reject 
                    </Button>
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
