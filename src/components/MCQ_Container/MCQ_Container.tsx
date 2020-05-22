import React, { useEffect, useState } from 'react';
import { fetchSampleData, sendDataToFirebase } from 'api';

function MCQ_Container() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    setData(fetchSampleData());
  }, []);

  const handleONSubmit = (e: any, value: any, Answer: any, index: any) => {
    e.preventDefault();
    e.persist();
    sendDataToFirebase({ SrNO: index, Question: value.title, Answer }, index);
  };

  return data.length !== 0 ? (
    <React.Fragment>
      {data.map((value: any, i: any) => {
        let Answer: any;
        let defaulter = true;
        return (
          <div key={i + 1} className='questionContainer'>
            <h5>
              Que-{i + 1}: {value.title}
            </h5>
            <form
              onSubmit={(e) => handleONSubmit(e, value, Answer, i)}
              className='form'
            >
              <input
                type='radio'
                onClick={() => {
                  defaulter ? (Answer = 'A') : (defaulter = !defaulter);
                }}
                id={`A-${i + 1}`}
                name={`Option${i}`}
                value='A'
              />
              <label htmlFor={`A-${i + 1}`}> A</label>
              <br />
              <input
                type='radio'
                onClick={() => {
                  defaulter ? (Answer = 'B') : (defaulter = !defaulter);
                }}
                id={`B-${i + 1}`}
                name={`Option${i}`}
                value='B'
              />
              <label htmlFor={`B-${i + 1}`}> B</label>
              <br />
              <input
                type='radio'
                onClick={() => {
                  defaulter ? (Answer = 'C') : (defaulter = !defaulter);
                }}
                id={`C-${i + 1}`}
                name={`Option${i}`}
                value='C'
              />
              <label htmlFor={`C-${i + 1}`}> C</label>
              <br />
              <input
                type='radio'
                onClick={() => {
                  defaulter ? (Answer = 'D') : (defaulter = !defaulter);
                }}
                id={`D-${i + 1}`}
                name={`Option${i}`}
                value='D'
              />
              <label htmlFor={`D-${i + 1}`}> D</label>
              <br />
              If other ->
              <input
                type='text'
                className='textValue'
                onChange={(e) => {
                  Answer = e.target.value;
                }}
                name='TextValue'
                id='TextValue'
                placeholder='Enter TextValue '
              />
              <button type='submit' className='submitButton'>
                Send
              </button>
            </form>
          </div>
        );
      })}
    </React.Fragment>
  ) : null;
}

export default MCQ_Container;
