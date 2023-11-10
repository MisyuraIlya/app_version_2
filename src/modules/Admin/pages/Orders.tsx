import React, { useEffect } from 'react'
import OrdersFilter from '../components/Orders/OrdersFilter'
import OrdersList from '../components/Orders/OrdersList'
import { useAdminOrders } from '../store/OrdersStore'
import Calendar from 'react-calendar'
import moment from 'moment'
import { useLocation, useNavigate } from 'react-router-dom'
const Orders = () => {
  const {
    getOrders,
    choosedDate,
    showCalendar,
    setShowCalendar,
    type,
    setDateFrom,
    setDateTo,
    setSearch,
    setDocumentType,
    // setPage
  } = useAdminOrders()
  // const history = useHistory()

  const location = useLocation()
  const navigate = useNavigate()
  const handleCalendar = (date: any) => {
    const urlSearchParams = new URLSearchParams(location.search)
    if (type === 'from') {
      urlSearchParams.set('from', moment(date).format('YYYY-MM-DD'))
    } else {
      urlSearchParams.set('to', moment(date).format('YYYY-MM-DD'))
    }
    const updatedUrl = '?' + urlSearchParams.toString()
    navigate(location.pathname + updatedUrl)
    setShowCalendar(false)
  }

  useEffect(() => {
    // if(!UrlHandler.isThereParams(history.location.search)) {
    //     let from= moment().subtract(1, 'months').format('YYYY-MM-DD');
    //     let to =  moment().format('YYYY-MM-DD');
    //     let search= '';
    //     let documentType = 'all'
    //     let page = 1
    //     const url = UrlHandler.createUrl(history.location.search,page,from,to,documentType,search)
    //     history.push(history.location.pathname + url);
    //     setDateFrom(from)
    //     setDateTo(to)
    //     setSearch(search)
    //     setDocumentType(documentType)
    //     setPage(page)
    // } else {
    //     const {page, from, to, documentType, search} = UrlHandler.getUrlParams(history.location.search)
    //     const url = UrlHandler.createUrl(history.location.search,page,from,to,documentType,search)
    //     history.push(history.location.pathname + url);
    //     setDateFrom(from)
    //     setDateTo(to)
    //     setSearch(search)
    //     setDocumentType(documentType)
    //     setPage(page)
    // }
    getOrders()
  }, [location.search])
  return (
    <div className="page-container history admin-history docs agent-docs agent-docs-approvePage karteset gviya">
      <div className="docs-sub-cont">
        {/* <BreadCrumbs/> */}
        <Calendar
          onChange={(date) => handleCalendar(date)}
          value={new Date(choosedDate)}
          calendarType="Hebrew"
          locale="he-IL"
          className={showCalendar ? 'active' : null}
        />
        <OrdersFilter />
        <OrdersList />
      </div>
    </div>
  )
}

export default Orders
