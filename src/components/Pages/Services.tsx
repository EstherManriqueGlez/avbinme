import React, { Fragment, useState } from 'react'
import ServicesCards from '../ServicesCards/ServicesCards'
import ServicesCardsModals from '../ServicesCardsModals/ServicesCardsModals'
import ServicesSlider from '../ServicesSlider/ServicesSlider'

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <Fragment>
      <ServicesSlider />
      <ServicesCards onOpenService={setActiveService} />
      <ServicesCardsModals
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </Fragment>
  )
}

export default Services
