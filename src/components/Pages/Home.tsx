import React, { Fragment } from 'react'
import AvaluosBienesInmuebles from '../AvaluosBienesInmuebles/AvaluosBienesInmuebles';
import HeroSlogan from "../HeroSlogan/HeroSlogan";

const Home = () => {
  return (
    <Fragment>
      <HeroSlogan /> 
      <AvaluosBienesInmuebles />
    </Fragment>
  )
}

export default Home
