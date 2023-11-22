import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Loader from '../../../shared/Loader'
import RightSide from '../components/RightSide/RightSide'
import LeftSide from '../components/LeftSide/LeftSide'
import { useCatalog } from '../store/CatalogStore'
import { getProductsLocalStorage } from '../helpers/catalog.helpler'
import { useSearchStore } from '../store/SearchStore'

const Catalog = () => {
  const { documentType, lvl1, lvl2, lvl3 } = useParams()
  const location = useLocation()
  const {
    loading,
    setCatalogParameters,
    getCatalog,
    setUrlSearch,
    getAttributes,
  } = useCatalog()
  const {
    loading: filterLoading,
    findCategoriesFilter,
    setSavedValue,
    searchValue,
    savedValue,
    setCategoriesFilter,
    clearPaginationSearch,
    findProductsByValue,
  } = useSearchStore()
  const isSearchDocument = documentType === 'search'

  useEffect(() => {
    setCatalogParameters(lvl1 ?? '0', lvl2 ?? '0', lvl3 ?? '0', location.search)
    if (!isSearchDocument) {
      setSavedValue('')
      setCategoriesFilter([])
      clearPaginationSearch()
      getCatalog()
    }
    if (isSearchDocument) {
      findCategoriesFilter()
      findProductsByValue(
        lvl1 ?? '0',
        lvl2 ?? '0',
        lvl3 ?? '0',
        location.search
      )
    }
    getAttributes(searchValue)
  }, [location.pathname, location.search])

  return (
    <div className="page-container category-page">
      <div className="category-page-subcont">
        <div className="category-page-subcont2 flex-container">
          {(loading || filterLoading) && <Loader />}
          {/* <BreadCrumbs/> */}
          <div className="slide-menu-cont col-lg-3">
            <RightSide />
          </div>
          <div className="category-page-sub col-lg-9">
            <LeftSide />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
