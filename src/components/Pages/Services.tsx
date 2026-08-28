import { useState } from 'react'
import { ServicesCards } from '../ServicesCards/ServicesCards'
import { ServicesCardsModals } from '../ServicesCardsModals/ServicesCardsModals'
import { ServicesSlider } from '../ServicesSlider/ServicesSlider'

export const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      <ServicesSlider />
      <ServicesCards onOpenService={setActiveService} />
      <ServicesCardsModals
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </>
  )
}

