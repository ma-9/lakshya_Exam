import React, { useState, useEffect } from 'react';
import FirebaseDatabase from 'api';
import { fullFroms, LoadingGif, ExamOver } from 'temp/data';

function CandidateSide() {
  const queRef = FirebaseDatabase.ref('/questions/admin');
  const [data, setData] = useState([]);
  useEffect(() => {
    queRef.on('value', (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  const colors = ['#2b2b52', '#4C4B4B', '#019031', '#3C40C6', '#AE1438'];

  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(colors.length));
  }

  return (
    <div className='App'>
      <h1 className='main-heading'>Candidate Side</h1>
      <div className='container'>
        {data ? (
          data &&
          data.map((value: any) => {
            return (
              <div
                key={Math.random()}
                className='candidateContainer'
                style={{ backgroundColor: `${colors[getRandomInt()]}` }}
              >
                <h3 className='Question'> Que:- {value.Question} </h3>
                <p className='Answer'>Ans:- {value.Answer} </p>
              </div>
            );
          })
        ) : (
          <div className='four-o-four-container'>
            <h3>We done it... Thanks for being with us.</h3>
            <img src={ExamOver} alt='Loading..' />
          </div>
        )}
      </div>
      <div className='fullform-container'>
        <h3>Full Forms for help</h3>
        <div className='fullforms'>
          {fullFroms.map((data, index) => {
            return (
              <p key={index}>
                {' '}
                <b> {data.Que} </b> : <i> {data.Ans} </i>{' '}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CandidateSide;
