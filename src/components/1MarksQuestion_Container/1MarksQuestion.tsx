import React from 'react';

function OneMarkQuestion({ data }: any) {
  const GenerateQuestions = () => {
    let Questions = [];

    const allData: any = [];

    for (let i = 1; i <= data; i++) {
      let value: any;
      const handleONSubmit = (e: any) => {
        e.preventDefault();
        allData.push(value);
      };
      Questions.push(
        <div key={i} className='questionContainer'>
          <h5> Que-No: {i} </h5>
          <form onSubmit={(e) => handleONSubmit(e)} className='form'>
            Ans :-
            <input
              type='text'
              onChange={(e) => {
                value = e.target.value;
              }}
              className='textValue'
              name='TextValue'
              multiple
              id='TextValue'
              placeholder={`Enter Ans for ${i} Que`}
            />
            <button type='submit' className='submitButton'>
              Send
            </button>
            <p className='printedAnswer'> {value} </p>
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
