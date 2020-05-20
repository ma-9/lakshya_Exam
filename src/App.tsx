import React, { useState } from 'react';
import './App.css';
import { MCQQuestions, OneMarkQuestions } from 'components';

function App() {
  const [value, setValue] = useState(0);
  const [questionLength, setQuestionLength] = useState(0);

  const [value2, setValue2] = useState(0);
  const [questionLength2, setQuestionLength2] = useState(0);

  const handleOnChange = (e: any, type: number) => {
    type === 0 ? setValue(e.target.value) : setValue2(e.target.value);
  };

  const handleOnSubmit = (e: any, type: number) => {
    e.preventDefault();
    type === 0 ? setQuestionLength(value) : setQuestionLength2(value2);
  };

  return (
    <div className='App'>
      <h1>Lakshya Exam</h1>
      <div className='container'>
        <form onSubmit={(e) => handleOnSubmit(e, 0)} className='questionLength'>
          <p>Total Number of MCQ</p>
          <input
            type='number'
            className='inputBox'
            value={value}
            onChange={(e) => handleOnChange(e, 0)}
            name='questionLength'
            id='questionLength'
            placeholder='Total Number of MCQ'
          />
          <button type='submit' className='submitButton'>
            Generate
          </button>
        </form>
        <MCQQuestions data={questionLength} />
        <br />
        <br />
        <hr />
        <br />
        <form onSubmit={(e) => handleOnSubmit(e, 1)} className='questionLength'>
          <p>Total Number of 1 Mark Question</p>
          <input
            type='number'
            className='inputBox'
            value={value2}
            onChange={(e) => handleOnChange(e, 1)}
            name='questionLength'
            id='questionLength'
            placeholder='Total Number of MCQ'
          />
          <button type='submit' className='submitButton'>
            Generate
          </button>
        </form>
        <OneMarkQuestions data={questionLength2} />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
