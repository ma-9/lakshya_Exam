import React from 'react';
import { MCQQuestions } from 'components';

function AdminSide() {
  return (
    <div className='App'>
      <h1>Admin Side</h1>
      <div className='container'>
        <MCQQuestions />
      </div>
    </div>
  );
}

export default AdminSide;
