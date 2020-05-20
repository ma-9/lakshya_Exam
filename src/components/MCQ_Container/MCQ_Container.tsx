import React from 'react';

function MCQ_Container({ data }: any) {
  const handleONSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target);
  };

  const GenerateQuestions = () => {
    let Questions = [];

    for (let i = 1; i <= data; i++) {
      Questions.push(
        <div key={i} className='questionContainer'>
          <h5> Que-No: {i} </h5>
          <form onSubmit={(e) => handleONSubmit(e)} className='form'>
            <input type='radio' id={`A-${i}`} name='Option' value='A' />
            <label htmlFor={`A-${i}`}>Option A</label>
            <br />
            <input type='radio' id={`B-${i}`} name='Option' value='B' />
            <label htmlFor={`B-${i}`}>Option B</label>
            <br />
            <input type='radio' id={`C-${i}`} name='Option' value='C' />
            <label htmlFor={`C-${i}`}>Option C</label>
            <br />
            <input type='radio' id={`D-${i}`} name='Option' value='D' />
            <label htmlFor={`D-${i}`}>Option D</label>
            <br />
            If other ->
            <input
              type='text'
              className='textValue'
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
    }
    return Questions;
  };

  return data !== 0 ? (
    <React.Fragment>{GenerateQuestions()}</React.Fragment>
  ) : null;
}

export default MCQ_Container;
