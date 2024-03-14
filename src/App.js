import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)
  return <section className='section'>
    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((person, personIndex) => {
        const {id, image, name, title, quote} = person
        // more stuff coming up
      })}
    </div>
  </section>
}

export default App;
