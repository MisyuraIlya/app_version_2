import axios from 'axios'

interface DocumentsResponse extends Hydra {
  'hydra:member': IDocument[]
}
interface HistoriesResponse extends Hydra {
  'hydra:member': IHistory[]
}
interface HistoryDetailedResponse extends Hydra {
  'hydra:member': IHistoryDetailed[]
}
interface RestoreCartResponse extends Hydra {
  'hydra:member': ICart[]
}
export const DocumentsService = {
  async GetDocuments(
    userExId: string,
    documentType: string,
    fromDate: string,
    toDate: string,
    page: string | number
  ): Promise<DocumentsResponse> {
    const response = await axios.get(
      `http://localhost:8080/api/documents?userExId=${userExId}&from=${fromDate}&to=${toDate}&documentType=${documentType}&page=${page}`
    )
    return response.data
  },

  async GetDocumentsItem(
    documentNumber: number | string
  ): Promise<IDocumentItems> {
    const response = await axios.get(
      `http://localhost:8080/api/documents/${documentNumber}`
    )
    return response.data
  },

  async GetKartesset(
    userExId: string,
    fromDate: string,
    toDate: string
  ): Promise<ICartesset> {
    const response = await axios.get(
      `http://localhost:8080/api/cartessets/${userExId}?from=${fromDate}&to=${toDate}`
    )
    return response.data
  },

  async GetHistory(
    userExId: string,
    fromDate: string,
    toDate: string
  ): Promise<HistoriesResponse> {
    const response = await axios.get(
      `http://localhost:8080/api/histories?createdAt[before]=${toDate}&createdAt[after]=${fromDate}&user.extId=${userExId}`
    )
    return response.data
  },
  async GetHistoryItem(
    documentId: string | number
  ): Promise<HistoryDetailedResponse> {
    const response = await axios.get(
      `http://localhost:8080/api/histories/${documentId}`
    )
    return response.data
  },

  async RestoreCart(
    documentType: string,
    userExtId: string,
    documentNumber: string
  ): Promise<ICart[] | null> {
    const response = await axios.get(
      `http://localhost:8080/api/restoreCart/${documentType}/${userExtId}/${documentNumber}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    if (response.data) {
      return response.data['hydra:member']
    } else {
      return null
    }
  },

  async createPdf(data: IPdfDocument) {
    const response = await axios.post(`http://localhost:8080/api/pdf`, data)
    return response.data
  },
  async createXl(data: IPdfDocument) {
    const response = await axios.post(`http://localhost:8080/api/xl`, data)
    return response.data
  },
}