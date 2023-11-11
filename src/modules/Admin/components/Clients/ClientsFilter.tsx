import React, { useEffect, useState } from 'react'
import { useClientStore } from '../../store/ClientsStore'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce'

const ClientsFilter = () => {
  const { totalClients, search, setSearch, getClients } = useClientStore()
  const [valueDebounced] = useDebounce(search, 1000)
  const [activeSearch, setActiveSearch] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (activeSearch) {
      getClients()
    }
  }, [valueDebounced])
  return (
    <div className="filter flex-container">
      <div className="col-lg-2">
        <p onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_forward</span>
          <span>חזור</span>
        </p>
        <p>{'נמצאו ' + totalClients + ' לקוחות'}</p>
      </div>
      <div style={{ display: 'flex' }} className="col-lg-10">
        <div className="col-lg-4">
          <div className="search-cont">
            <input
              onClick={() => setActiveSearch(true)}
              onBlur={() => setActiveSearch(false)}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="חיפוש לקוח..."
            />
            {search ? (
              <span
                className="material-symbols-outlined search-img"
                onClick={() => setSearch('')}
              >
                close
              </span>
            ) : (
              <span className="material-symbols-outlined search-img">
                search
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-7">
          <ul
            className="filter-ul"
            style={{
              backgroundImage:
                'url(' + process.env.MEDIA + '/icons/filter.svg)',
            }}
          >
            {/* HERE FILTER BY SOMETHING */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ClientsFilter
