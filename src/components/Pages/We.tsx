import React, { Fragment } from 'react'
import HeroSlogan from '../HeroSlogan/HeroSlogan'
import WeCards from '../WeCards/WeCards'
import WeContent from '../WeContent/WeContent'

const We = () => {
  return (
    <Fragment>
      <HeroSlogan />
      <WeContent />
      <WeCards />
    </Fragment>
  )
}

export default We
