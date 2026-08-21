import React, { Fragment, useEffect } from 'react'
import ServicesCards from '../ServicesCards/ServicesCards'
import ServicesCardsModals from '../ServicesCardsModals/ServicesCardsModals'
import ServicesSlider from '../ServicesSlider/ServicesSlider'

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <ServicesSlider />
      <ServicesCards />
      <ServicesCardsModals />
    </Fragment>
  )
}

export default Services
