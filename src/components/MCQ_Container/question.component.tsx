import React, { useState } from 'react';

interface IProps {
  Question: string;
  Answer: string;
  SrNo: number;
}

const Questioncomponent: React.FC<IProps> = (props) => {
  const [val, setVal] = useState(props.Answer ?? '');
  const handleSubmit = async () => {
    await fetch(
      `https://lakshyaexam-91b83.firebaseio.com/questions/admin/${props.SrNo}.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Question: props.Question,
          Answer: val,
          SrNO: props.SrNo,
        }),
      }
    );
  };
  if (!props.Question) return null;
  return (
    <div>
      <p> {props.Question} </p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p> Ans:- </p>
        <input
          type='text'
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}> Send </button>
    </div>
  );
};

export default Questioncomponent;
