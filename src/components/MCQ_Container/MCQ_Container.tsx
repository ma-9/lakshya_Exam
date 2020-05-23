import React, { useEffect, useState } from 'react';
import database from 'api';
import QuestionComponent from './question.component';

function MCQ_Container() {
  const queRef = database.ref('/questions/admin');
  const [data, setData] = useState<
    Array<{ Question: string; Answer: string; SrNo: number }>
  >([]);
  useEffect(() => {
    queRef.on('value', (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  if (!Array.isArray(data)) return null;

  return (
    <div>
      {data.map((element, index) => (
        <QuestionComponent
          key={index}
          Question={element?.Question}
          Answer={element?.Answer}
          SrNo={index}
        />
      ))}
    </div>
  );
}

export default MCQ_Container;
