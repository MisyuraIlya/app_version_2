import React from 'react'
import ProductList from './components/ProductList/ProductList'
import FiltersBlock from './components/FiltersBlock/FiltersBlock'
// import Pagination from './components/Pagination/Pagination';
import Pagination from '../../../../shared/Pagination'
import { useParams } from 'react-router-dom'
import { useCatalog } from '../../store/CatalogStore'

const LeftSide = () => {
  const { categoriesLvl1, hydraPagination } = useCatalog()
  // const {
  //     totalPages: filterTotalPages,
  //     page: filterPage,
  //     lastPage: filterLastPage,
  //     nextPage: filterNextPage,
  //     previousPage: filterPreviousPage
  // } = useSearchStore()
  const { documentType, lvl1 } = useParams()
  // const currentCategory = (categoriesLvl1?.filter((item) => item.Id == lvl1))[0]
  // const isSearchDocument = documentType === 'search'
  return (
    <div className={'category-page-sub2'}>
      {/* {currentCategory?.Id &&
        <Helmet>
            <title>{currentCategory.Title}</title>
            <meta name="keywords" content={currentCategory.Title}/>
            <link rel="canonical" href={entry + '/category/' + currentCategory.ParentId + '/' + currentCategory.Id}/>
            <link rel="alternate" href={entry + '/category/' + currentCategory.ParentId + '/' + currentCategory.Id} hreflang="he-il"/>
        </Helmet>
        } */}

      <FiltersBlock />
      <div className="category-header-cont">
        <div className="row-cont flex-container">
          <div className="h1-cont col-lg-8">{/* <h1>{pageTitle}</h1> */}</div>
        </div>
      </div>
      <ProductList />
      <Pagination hydraPagination={hydraPagination} />
    </div>
  )
}

export default LeftSide
