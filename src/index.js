import React, { useState, useEffect } from 'react';
import data from './data'; // assuming the data is in a separate file called data.js

const App = () => {
  const [index, setIndex] = useState(0);

  const prevIndex = index === 0 ? data.length - 1 : index - 1;
  const nextIndex = index === data.length - 1 ? 0 : index + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, nextIndex]);

  const handlePrev = () => {
    setIndex(prevIndex);
  };

  const handleNext = () => {
    setIndex(nextIndex);
  };

  return (
    <div>
      <h1 id="review-heading">Reviews</h1>
      <div id="review-container">
        {data.map((item, i) => (
          <div
            key={item.id}
            className={`review ${i === index ? 'active-slide' : ''}`}
          >
            <img
              src={item.image}
              alt={`${item.name} - ${item.title}`}
              className={`person-image person-${i}-image`}
            />
            <h3 id={`person-${i}-index`} className="person-name">
              {item.name}
            </h3>
            <p className="person-title">{item.title}</p>
            <p className="person-quote">{item.quote}</p>
          </div>
        ))}
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default App;
