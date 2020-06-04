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
        <div className='four-o-four-container'>
          <h3>We done it... Thanks for being with us.</h3>
          <img src={ExamOver} alt='Loading..' />
        </div>
      </div>
    </div>
  );
}

export default CandidateSide;
