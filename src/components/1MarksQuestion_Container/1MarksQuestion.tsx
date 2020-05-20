import React from 'react';

function OneMarkQuestion({ data }: any) {
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
            Ans :-
            <input
              type='text'
              className='textValue'
              name='TextValue'
              multiple
              id='TextValue'
              placeholder={`Enter Ans for ${i} Que`}
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

export default OneMarkQuestion;
