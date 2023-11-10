import React from 'react'
import VideoSection from '../components/VideoSection/VideoSection'
import SliderSection from '../components/SliderSection/SliderSection'
import { useCategories } from '../../Catalog/store/CategoriesStore'
import ContactFooter from '../../../shared/ContactFooter'
const HomePage = () => {
  const { categoriesLvl1 } = useCategories()
  return (
    <div className="home-page">
      <VideoSection />
      <SliderSection
        title={'קטגוריות'}
        array={categoriesLvl1}
        toShow={5}
        column={1}
      />
      <ContactFooter />
    </div>
  )
}

export default HomePage
