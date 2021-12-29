/*eslint-disable*/
import React,{useState,useEffect} from 'react'
import { Form, select, Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { AdministratorAddDoctorSlots } from "../../../../Store/Actions/administratorActions";
import { NotificationManager } from 'components/common/react-notifications';
import { getSlotdata } from 'redux/store/actions/exerciseInnerAction';

const selectDay = [
  { label: "monday", value: "monday", key: 1 },
  { label: "tuesday", value: "tuesday", key: 2 },
  { label: "wednesday", value: "wednesday", key: 3 },
  { label: "thursday", value: "thursday", key: 4 },
  { label: "friday", value: "friday", key: 5 },
  { label: "saturday", value: "saturday", key: 6 },
  { label: "sunday", value: "sunday", key: 7 },
];

const selectWorkingSlot = [
  { label: "10:00", value: "10:00", key: 1 },
  { label: "15:00", value: "15:00", key: 1 },

  { label: "20:00", value: "20:00", key: 2 },
  { label: "25:00", value: "25:00", key: 1 },

  { label: "30:00", value: "30:00", key: 3 },
  { label: "35:00", value: "35:00", key: 3 },

  { label: "40:00", value: "40:00", key: 4 },
  { label: "45:00", value: "45:00", key: 3 },

  { label: "50:00", value: "50:00", key: 5 },
];
const selectBreakSlot = [
  { label: "05:00", value: "05:00", key: 1 },
  { label: "10:00", value: "10:00", key: 2 },
  { label: "15:00", value: "15:00", key: 3 },
];
const AddSlotsModal = (props) => {
  const item = { key: "addSlot" };
  function createSlots(slotConfig) {
    const {
      configSlotHours,
      configSlotMinutes,
      configSlotPreparation,
      timeArr,
    } = slotConfig;
    // timeArr.push({from:`${props?.viewData?.timings?.from}` ,to:`${props?.viewData?.timings?.to}`})
    let defaultDate = new Date().toISOString().substring(0, 10);
    let slotsArray = [];
    let _timeArrStartTime;
    let _timeArrEndTime;
    let _tempSlotStartTime;
    let _endSlot;
    let _startSlot;

    for (var i = 0; i < timeArr.length; i++) {
      _timeArrStartTime = new Date(
        defaultDate + " " + timeArr[i]?.from
      )?.getTime();
      _timeArrEndTime = new Date(defaultDate + " " + timeArr[i]?.to)?.getTime();
      _tempSlotStartTime = _timeArrStartTime;

      while (
        new Date(_tempSlotStartTime)?.getTime() <
        new Date(_timeArrEndTime)?.getTime()
      ) {
        _endSlot = new Date(_tempSlotStartTime);
        _startSlot = new Date(_tempSlotStartTime);

        _tempSlotStartTime = _endSlot?.setHours(
          parseInt(_endSlot?.getHours()) + parseInt(configSlotHours)
        );
        _tempSlotStartTime = _endSlot?.setMinutes(
          parseInt(_endSlot?.getMinutes()) + parseInt(configSlotMinutes)
        );

        if (
          new Date(_tempSlotStartTime)?.getTime() <=
          new Date(_timeArrEndTime)?.getTime()
        ) {
          slotsArray.push({
            from: new Date(_startSlot).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            }),
            to: _endSlot.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            }),
          });
        }

        _tempSlotStartTime = _endSlot?.setMinutes(
          _endSlot?.getMinutes() + parseInt(configSlotPreparation)
        );
      }
    }

    console.log(slotsArray);
    if (slotsArray.length === 0) {
      NotificationManager.warning('Please enter Valid Details', 3000, null, null, '');

      return [];
    }
    let lastSlotValueTo = Object.values(slotsArray?.at(-1))[1];
    let endtimeOfDoctor = timeArr?.at(-1)?.to;
    let test1 = endtimeOfDoctor?.split(":");
    let test2 = lastSlotValueTo?.split(":");
    if (Number(test1[1]) < Number(test2[1])) {
      let test3 = configSlotPreparation?.split(":");
      let test4 = lastSlotValueTo?.split(":");
      let breakPlusSlotValue = Number(test4[1]) + Number(test3[0]);
      if (breakPlusSlotValue === 60) {
        let one = "01";
        // eslint-disable-next-line
        let a = Number(test4[0]) + Number(one);
      } else {
        let test5 = test4[0] + ":" + breakPlusSlotValue;
        slotsArray.push({ from: test5, to: endtimeOfDoctor });
      }
    } else {
      let diff = test1[1] - test2[1];
      let test3 = configSlotPreparation?.split(":");
      let test4 = lastSlotValueTo?.split(":");
      let breakPlusSlotValue = Number(test4[1]) + Number(test3[0]);
      let test5 = test4[0] + ":" + breakPlusSlotValue;
      if (diff > test3[0]) {
          slotsArray.push({ from: test5, to: endtimeOfDoctor });
        }
    }
    
    return slotsArray;
}
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();
  const dispatch = useDispatch();

const onSubmit = async (data) => {
      const apiData = {
        day:data?.day,
        from:data?.from,
        to:data?.to,
      };
      dispatch(getSlotdata(apiData));
    props.onHide();
    
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={props.show}
        style={{ boxShadow: 'none' }} 
             >
        <ModalHeader closeButton>
          {/* <ModalTitle id="contained-modal-title-vcenter"> */}
            Add Slots
            <Button outline onClick={props.onHide } style={{marginLeft:'20px'}} >Close</Button>
          {/* </ModalTitle> */}
        </ModalHeader>
        <ModalBody>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
              <div className="row">
                <div className="col-lg-6">
                  <span className="label-name-login">Select day</span>
                  <select
                    className="input-login-modal"
                    defaultValue={selectDay[0]}
                    custom
                    {...register("day", {})}
                  >
                    {selectDay?.map((item, index) => (
                      <option value={item?.label} key={index + 1}>
                        {item?.label}
                      </option>
                    ))}
                  </select>
                  {errors?.day?.message ? (
                    <div className="text-error">{errors?.day?.message}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <span className="label-name-login">Duration</span>
                  <select
                    as="select"
                    className="input-login-modal"
                    defaultValue={selectWorkingSlot[0]}
                    custom
                    {...register("duration", {})}
                  >
                    {selectWorkingSlot?.map((item, index) => (
                      <option value={item?.label} key={index + 1}>
                        {item?.label}
                      </option>
                    ))}
                  </select>
                  {errors?.duration?.message ? (
                    <div className="text-error">
                      {errors?.duration?.message}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <span className="label-name-login">Break</span>
                  <select
                    as="select"
                    className="input-login-modal"
                    defaultValue={selectBreakSlot[0]}
                    custom
                    {...register("break", {})}
                  >
                    {selectBreakSlot?.map((item, index) => (
                      <option value={item?.label} key={index + 1}>
                        {item?.label}
                      </option>
                    ))}
                  </select>
                  {errors?.break?.message ? (
                    <div className="text-error">{errors?.break?.message}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <span className="label-name-login">From</span>
                  <input
                    className="input-login-modal"
                    type="time"
                    {...register("from", {
                      required: {
                        value: true,
                        message: "this field is required field",
                      },
                    })}
                  />
                  {errors?.from?.message ? (
                    <div className="text-error">{errors?.from?.message}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <span className="label-name-login">To</span>
                  <input
                    className="input-login-modal"
                    type="time"
                    {...register("to", {
                      required: {
                        value: true,
                        message: "this field is required field",
                      },
                    })}
                  />
                  {errors?.to?.message ? (
                    <div className="text-error">{errors?.to?.message}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className='col-12 text-center'>

                    <Button>
                    Add Slot
                    </Button>
                </div>
              </div>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddSlotsModal;
