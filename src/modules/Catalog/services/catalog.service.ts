import axios from 'axios'

interface GetCatalogResponse extends Hydra {
  'hydra:member': IProduct[] // Define a more specific type if possible
}

interface GetCategoriesResponse extends Hydra {
  'hydra:member': ICategory[]
}

interface GetCategoriesAttribute extends Hydra {
  'hydra:member': IAttributeMain[]
}

interface GetPurchaseHistoryItem extends Hydra {
  'hydra:member': PurchaseHistoryItem[]
}

export const CatalogServices = {
  async GetCatalog(
    lvl1: string | number,
    lvl2: string | number,
    lvl3: string | number,
    searchParams: string
  ): Promise<GetCatalogResponse> {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/catalog/${lvl1}/${lvl2}/${lvl3}${searchParams}&userExtId=852187`
    )
    return response.data
  },

  async GetCategories(userExId: string): Promise<GetCategoriesResponse> {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/categoriesApp?userExtId=${userExId}`
    )
    return response.data
  },

  async GetCategoriesAll(): Promise<GetCategoriesResponse> {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/categories`
    )
    return response.data
  },

  async GetCategoriesFilter(
    userExId: string,
    searchValue: string
  ): Promise<GetCategoriesResponse> {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/categoriesApp?userExtId=${userExId}&search=${searchValue}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    return response.data
  },

  async GetAttributes(
    lvl1: string | number,
    lvl2: string | number,
    lvl3: string | number,
    searchValue: string,
    userExId: string
  ): Promise<GetCategoriesAttribute> {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/attribute/${lvl1}/${lvl2}/${lvl3}?userExtId=${userExId}&search=${searchValue}`
    )
    return response.data
  },

  async GetPurchaseHistory(
    userExId: string,
    sku: string
  ): Promise<GetPurchaseHistoryItem> {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/purchaseHistory/${userExId}/${sku}`
    )
    return response.data
  },
}
