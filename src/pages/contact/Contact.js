import React from 'react'
import DefaultContainerFlex from '../../containers/DefaultContainerFlex';
import FluffText from '../../components/fluff/FluffText';
import { useLocation } from 'react-router-dom';
import '../pages.css';

const Contact = () => {
  const location = useLocation();

  return (
    <DefaultContainerFlex 
    content={
      <>
        <h3>Contact stuff</h3>
        <FluffText text={location.pathname.slice(1)} />
      </>
    }
    />
  )
};

export default Contact;
