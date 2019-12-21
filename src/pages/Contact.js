import React from 'react'
import DefaultContainer from '../containers/DefaultContainer';
import FluffText from '../components/fluff/FluffText';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  return (
    <DefaultContainer 
    content={
      <>
        <FluffText text={location.pathname.slice(1)} />
      </>
    }
    />
  )
};

export default Contact;
