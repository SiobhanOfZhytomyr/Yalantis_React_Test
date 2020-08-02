import React from 'react';
import {useEffect, useState} from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { getUsers } from './utils/getPeople';
import { monthData } from './utils/months';
import { calcColor } from './utils/calcColor';

const RenderTooltip = (props) => {
  return (
    <Tooltip {...props}>
      <ul>
        {props.map(person => 
          <li>{person}</li>
        )}
      </ul>
    </Tooltip>
  );
}

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(monthData)

  useEffect(() => {
    async function fetchData() {
      const res = await getUsers()

      res.forEach(element => {
        const tempData = data
        const tempMonth = tempData[element.mob -1]
        tempMonth.birthdaysCount += 1
        tempMonth.people.push(`${element.firstName}  ${element.lastName} `)
        tempData[element.mob-1] = tempMonth
        setData(tempData)
      });
      setLoading(false)
  }

  fetchData()
},[])

  if (loading) return <p>Loading...</p>
  return (
    <div className="container">
      <h1>Тестове завдання для Yalantis React.js School</h1>
      <ul className="list-group mt-3 mb-3 w-75 align-items-center">
        {data.map((month, idx) => 
        <OverlayTrigger placement="right" overlay={RenderTooltip(month.people)}>
          <li 
          className={`list-group-item w-75 ${calcColor(month.birthdaysCount)} text-center`} id={idx} key={month.name}>
            {month.name}
          </li>
          </OverlayTrigger>
          )}
      </ul>
    </div>
  );
}

export default App;
