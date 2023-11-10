import axios from 'axios'

export const AdminCatalogService = {
  async updateCategory(category: ICategory): Promise<ICategory> {
    const response = await axios.patch(
      `http://localhost:8080/api/categories/${category.id}`,
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
