import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingFromApi } from '../redux/reducer/greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.greeting);

  const dispatch = useDispatch(fetchGreetingFromApi());

  useEffect(() => {
    dispatch(fetchGreetingFromApi());
  }, [dispatch]);

  return (
    <>
      <h1>Hey</h1>
      <p>{greeting}</p>
    </>
  );
};

export default Greeting;
