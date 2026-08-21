import React, { Fragment } from 'react'
import AvaluosBienesInmuebles from '../AvaluosBienesInmuebles/AvaluosBienesInmuebles';
import HeroSlogan from "../HeroSlogan/HeroSlogan";
import "./Home.scss";

const Home = () => {
  return (
    <Fragment>
      <HeroSlogan /> 
      <AvaluosBienesInmuebles />
    </Fragment>
  )
}

export default Home
