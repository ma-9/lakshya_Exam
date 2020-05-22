import React, { useState, useEffect } from 'react';
import FirebaseDatabase from 'api';

function CandidateSide() {
  const queRef = FirebaseDatabase.ref('/questions');
  const [data, setData] = useState([]);
  useEffect(() => {
    queRef.on('value', (snapshot) => {
      setData(snapshot.val());
    });
  }, []);
  return (
    <div className='App'>
      <h1>Candidate Side</h1>
      <div className='container'>
        {data &&
          data.map((value: any) => {
            return (
              <div key={Math.random()} className='candidateContainer'>
                <h3 className='Question'> Que:- {value.Question} </h3>
                <p className='Answer'>Ans:- {value.Answer} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CandidateSide;
