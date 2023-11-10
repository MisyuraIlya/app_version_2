import React, { FC, useEffect, useState } from 'react'
// import MyCropper from '../../../../components/tools/MyCropper';
import { Link, useParams } from 'react-router-dom'
import { useCategories } from '../../../Catalog/store/CategoriesStore'
import { AdminCatalogService } from '../../services/catalog.service'
import { useDebounce } from 'use-debounce'
import { base64ToFile } from '../../../../helpers/base64ToFile'
import { useProductsEditStore } from '../../store/ProductsEditStore'
import { MediaObjectService } from '../../services/mediaObject.service'

interface CategoryEditItemProps {
  element: ICategory
}

const CategoryEditItem: FC<CategoryEditItemProps> = ({ element }) => {
  const [loading, setLoading] = useState(false)
  const { categories, getAllCategories, setCategories } = useCategories()
  // const {setLvl1,setLvl2,setLvl3} = useProductsEditStore()
  const [title, setTitle] = useState(element.title)
  const [valueDebounced] = useDebounce(title, 1000)
  const { lvl1, lvl2, lvl3 } = useParams()
  // const uploadImg = async (img) => {
  //     const convertFile = base64ToFile(img.img,img.fileName)
  //     const res = await MediaObjectService.uploadImage(convertFile, 'category')
  //     const res2 = await AdminCatalogService.updateCategory({id: element.id ,mediaObject: res['@id']})
  //     await MediaObjectService.ftpUploader(res2.mediaObject.filePath,'src/img/categories','category')
  //     await getAllCategories()
  // }

  // const unpublishHandle = async (categoryId: number | string, isPublished: boolean) => {
  //     const newCat = categories.map((item) => {
  //         if(item.id === categoryId){
  //             item.isPublished = isPublished
  //         }
  //         return item
  //     })
  //     setCategories(newCat)
  //     await AdminCatalogService.updateCategory({id: categoryId ,isPublished})

  // }

  const handleLink = () => {
    if (lvl1 != '0' && lvl2 == '0') {
      return `/admin/category-edit/${lvl1}/${element.id}/0`
    } else if (lvl1 != '0' && lvl2 != '0') {
      return `/admin/products-edit/${lvl1}/${lvl2}/${element.id}`
    } else {
      return `/admin/category-edit/${element.id}/0/0`
    }
  }

  // useEffect(() => {
  //     if(valueDebounced){
  //         AdminCatalogService.updateCategory({id: element.id ,title:valueDebounced})
  //     }
  // },[valueDebounced])

  return (
    <div className="flex-container">
      <div className="col-lg-1 enter MyCenetred">
        <Link to={handleLink()}>
          <span className="material-symbols-outlined googleIconHover">
            move_item
          </span>
        </Link>
      </div>
      <div className="col-lg-1 sort MyCenetred">
        <span className="material-symbols-outlined">drag_indicator</span>
      </div>
      <div className="col-lg-2 for-img">
        <div
          className={
            element?.mediaObject?.filePath ? 'img-load active' : 'img-load'
          }
        >
          {/* {element?.mediaObject?.filePath && 
                <img
                    className="main-img"
                    src={globalFileServer + 'categories/' + element?.mediaObject?.filePath}
                />
            } */}
          {/* <MyCropper
                aspectRatio={16/16} 
                itemId={element.id}
                folder="categories"
                setPreload={() => setLoading(true)}
                unsetPreload={() => setLoading(false)}
                uploadImg={uploadImg}
            /> */}
        </div>
      </div>
      <div className={'col-lg-1 title'}>
        <p>{element.id}</p>
      </div>
      <div className={'col-lg-3 title'}>
        <input
          type="text"
          placeholder="שם הקטגוריה"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* 
        <div className="col-lg-1 status">
            {!element.isPublished ?
                <div onClick={() => unpublishHandle(element.id,true)} className="input active">
                    <span className="material-symbols-outlined" style={{color:'white',height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>done</span>
                </div>
            :
            <div onClick={() => unpublishHandle(element.id,false)} className="input MyCentered">
                <span className="material-symbols-outlined" style={{color:'white',height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>close</span>
            </div>
            }
        </div> */}
    </div>
  )
}

export default CategoryEditItem
