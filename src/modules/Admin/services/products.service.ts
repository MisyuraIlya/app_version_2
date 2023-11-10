import axios from 'axios'

interface productResponse extends Hydra {
  'hydra:member': IProduct[]
}

export const AdminProductService = {
  async createNewImage(product: IProduct): Promise<IImagePath> {
    const response = await axios.post(
      `http://localhost:8080/api/product_images`,
      product
    )

    return response.data
  },

  async updateProduct(product: IProduct): Promise<IProduct> {
    const response = await axios.patch(
      `http://localhost:8080/api/products/${product.id}`,
      product,
      {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      }
    )

    return response.data
  },

  async deleteImage(imageId: number | string) {
    const response = await axios.delete(
      `http://localhost:8080/api/product_images/${imageId}`
    )

    return response.data
  },

  async GetProducts(
    lvl1: number | string,
    lvl2: number | string,
    lvl3: number | string
  ): Promise<productResponse> {
    const response = await axios.get(
      `http://localhost:8080/api/catalog/${lvl1}/${lvl2}/${lvl3}?itemsPerPage=10000`
    )
    return response.data
  },
}
