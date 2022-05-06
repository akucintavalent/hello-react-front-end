import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setGreeting } from './redux/greeting/greeting';

// eslint-disable-next-line react/prefer-stateless-function
const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:3000/greetings/message')
      .then((response) => {
        const greeting = response.data;
        console.log(greeting);
        dispatch(setGreeting({ payload: greeting }));
      })
      .catch(() => {});
  }, [dispatch]);
  const greeting = useSelector((state) => state.greeting.value.payload);
  console.log(greeting);
  return (
    <h1>{ greeting }</h1>
  );
};

export default Greeting;
