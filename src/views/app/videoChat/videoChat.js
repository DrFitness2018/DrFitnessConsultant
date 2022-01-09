/*eslint-disable*/

import React from 'react';
import { Button, Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

const VideoChat = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Start Live Session With your Patient/Trainee" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h2> Instruction to Follow Before Starting Live Session with costumers </h2>
          <ul style={{fontSize:'16px'}}>
          <li> First Enter your Name "Eg:- Dr. Fitness"</li>
          <li> Click on Create Meeting Button</li>
          <li> Copy Attendee URL then send if to desired patient/costumer</li>
          <li> You can add or remove multiple costumer at a Time!</li>
          </ul>
          <a href='https://ckwmkqgcp232551idk02p9d6421-cc88s8pxn-drfitness2018.vercel.app/create' target='_blank'>
            <Button outline >
              Create Live Session 
            </Button>
          </a>
        </Colxx>
        <Colxx xxs='12'>
        <frame name="content" src="https://ckwmkqgcp232551idk02p9d6421-cc88s8pxn-drfitness2018.vercel.app/create" />
        </Colxx>
      </Row>
    </>
  );
};

export default VideoChat;
