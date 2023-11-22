import React, { useEffect } from 'react'
import { useDocuments } from '../store/DocumentsStore'
import DocumentCardList from '../components/DocumentCardList'
import DocsFilter from '../components/DocsFilter'
import { useParams } from 'react-router-dom'
import DocsTotal from '../components/DocsTotal'
import Loader from '../../../shared/Loader'
const DocumentsItemPage = () => {
  const { loading, getOrderItems, setDocumentType, setDocumentId } = useDocuments()

  const { id } = useParams()

  useEffect(() => {
    setDocumentType('documentItem')
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
        <DocumentCardList />
        <DocsTotal />
      </div>
    </div>
  )
}

export default DocumentsItemPage
