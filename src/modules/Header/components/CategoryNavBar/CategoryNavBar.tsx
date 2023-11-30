import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCategories } from '../../../Catalog/store/CategoriesStore'
const CategoryNavBar = () => {
  const { categories, getCategories } = useCategories()
  const [active, setActive] = useState('')

  useEffect(() => {
    if (categories.length === 0) {
      getCategories()
    }
  }, [])

  return (
    <nav
      id="cat-nav"
      onClick={() => console.log('toggle nav')}
      className={
        true ? 'active header-cats-main-desktop' : 'header-cats-main-desktop'
      }
    >
      <div className="container">
        <ul className="main-menu-ecare">
          {categories?.map((element, index) => {
            if (element.lvlNumber === 1 && element.isPublished) {
              return (
                <li
                  key={index}
                  className={
                    active === element.id.toString()
                      ? 'active main-li'
                      : 'main-li'
                  }
                >
                  <Link to={`/client/catalog/${element.id}/0/0?page=1`}>
                    <p>{element.title}</p>
                  </Link>

                  <div
                    id={'sub_menu_' + element.id}
                    className={
                      active === element.id.toString()
                        ? 'wide-sub-menu active'
                        : 'wide-sub-menu'
                    }
                    // onClick={(e) => close("sub_menu_" + element.id)}
                  >
                    <div className="sub-menu-wrapp scrollbar animated fadeIn">
                      <div className="flex-container">
                        <div className="col-lg-12 flex-container sub-menu-container">
                          {element.categories?.map((elem, ind) => {
                            return (
                              <div key={ind} className="item">
                                <Link
                                  to={`/client/catalog/${element.id}/${elem.id}/0`}
                                >
                                  <h2>{elem.title}</h2>
                                </Link>
                                <div className="children">
                                  <ul>
                                    {elem?.categories?.map((e, i) => {
                                      return (
                                        <li key={i}>
                                          <Link
                                            to={`/client/catalog/${element.id}/${elem.id}/${e.id}`}
                                          >
                                            {e.title}
                                          </Link>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        <div className="col-lg-3">
                          <div className="banner animated pulse">
                            {/* <Link to={element.Link ? element.Link : '/'}> */}
                            {/* <img src={`${process.env.REACT_APP_MEDIA}/banner/${element.Banner}`} alt="" /> */}
                            {/* </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </nav>
  )
}

export default CategoryNavBar
