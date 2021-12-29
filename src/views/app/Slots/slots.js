/*eslint-disable*/
import React,{useState} from 'react';
import { Button, Row, Table } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import AddSlotsModal from "./AddSlotsModal";
import './Consultant.css'
import { useSelector } from 'react-redux';
const Slots = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Slots" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <AdministratoDoctor/>
        </Colxx>
      </Row>
    </>
  );
};

export default Slots;


const AdministratoDoctor = (props) => {
  const Appointments = [
    {
      id: 1,
      // imgSrc: src,
      name: 'DR. SHAHEDA ANWAR',
      day: 'Monday',
      start_time: "10:00 AM",
      end_time: "1:00 PM",
    },
  ];
  const dataslots = useSelector((state) => state?.exercise?.datavar);

  console.log(dataslots,"Data Aya?")

  const [addSlotModal, setsAddSlotModal] = useState(false);
  const data = props?.location?.item;
  const viewData ={
    name:"ABC",
    email_address:"abc@gmail.com",
    speciality:"Therapist",
    departments:"DPT"
  }
  console.log(data,"testing")
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">
       
        <div className="row center-childrens  pb-4">
          <div className="col-xl-6 col-md-6 col-12 containerWithShadow p-4">
            <h5>Doctor Details</h5>
            <ul style={{ listStyle: "none" }}>
              <li>
                <span
                  className="light-Color-Para"
                  style={{ fontSize: "12px", fontWeight: "500" }}
                >
                  DOCTOR NAME
                </span>
                <p>{viewData?.name}</p>
              </li>{" "}
              <li>
                <span
                  className="light-Color-Para"
                  style={{ fontSize: "12px", fontWeight: "500" }}
                >
                  DOCTOR EMAIL
                </span>
                <p>{viewData?.email_address}</p>
              </li>{" "}
              <li>
                <span
                  className="light-Color-Para"
                  style={{ fontSize: "12px", fontWeight: "500" }}
                >
                  SPECIALITY.
                </span>
                <p>{viewData?.speciality}</p>
              </li>
              <li>
                <span
                  className="light-Color-Para"
                  style={{ fontSize: "12px", fontWeight: "500" }}
                >
                  DEPARTMENT
                </span>
                <p>{viewData?.departments}</p>
              </li>
            </ul>
            <div className="d-flex justify-content-between">
              <h5>Slots Details</h5>
              <Button
                onClick={() => {
                  setsAddSlotModal(true);
                }}
              >
                Add Slots
              </Button>
            </div>
            <Table hover responsive>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Doctor Name</th>
                                <th>Day</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Edit</th>
                              </tr>
                            </thead>
                            {Appointments.map((item, index) => {
                                return (
                                  <>
                                    <tbody>
                                      <tr>
                                        <th scope="row">{item.id}</th>
                           
                                        <td className="pt-50">{item.name}</td>
                                        <td>{dataslots.day ? dataslots.day : item?.day }</td>
                                        <td>{dataslots.from ? dataslots.from : item?.start_time }</td>
                                        <td>{dataslots.to ? dataslots.to : item?.end_time}</td>
                                        <td><Button style={{height:"20px",padding:10,paddingTop:0}} outline>Edit</Button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </>
                                );
                              })}{' '}
                          </Table>
            {/* <ProfileTable
              tableHead={["Day", "From", "To"]}
              data={Object.keys(viewData?.timings).map((item) => {
                return [
                  item,
                  viewData?.timings[item].from,
                  viewData?.timings[item].to,
                ];
              })}
            /> */}
          </div>
        </div>
      </div>
      <AddSlotsModal
        show={addSlotModal}
        onHide={() => setsAddSlotModal(false)}
        {...props}
      />
    </div>
  );
};

// export default AdministratoDoctor;


