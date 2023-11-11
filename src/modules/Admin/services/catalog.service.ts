import axios from 'axios'

export const AdminCatalogService = {
  async updateCategory(category: any): Promise<ICategory> {
    const response = await axios.patch(
      `${process.env.API}/api/categories/${category.id}`,
      category,
      {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      }
    )

    return response.data
  },
}
