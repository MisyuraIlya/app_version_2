import React, { useEffect } from 'react'
import { useDocuments } from '../store/DocumentsStore'
import DocumentCardList from '../components/DocumentCardList'
import DocsFilter from '../components/DocsFilter'
import { useParams } from 'react-router-dom'
import DocsTotal from '../components/DocsTotal'
import HistoryCardList from '../components/HistoryCardList'
import Loader from '../../../shared/Loader'
const HistoryItemPage = () => {
  const { loading, getOrderItems, setDocumentType, setDocumentId } = useDocuments()

  const { id } = useParams()

  useEffect(() => {
    setDocumentType('historyItem')
    if (id) {
      getOrderItems(id)
      setDocumentId(id)
    }
  }, [])
  return (
    <div className="page-container history admin-history docs">
      <div className="docs-sub-cont">
        {loading && <Loader />}
        <DocsFilter />
        <HistoryCardList />
        <DocsTotal />
      </div>
    </div>
  )
}

export default HistoryItemPage
