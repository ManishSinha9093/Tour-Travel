import React from 'react'
import Masonary, {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from './galleryImages'

function MasonryImagesGallery() {
  return (
    
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonary gutter='1rem'>
            {
                galleryImages.map((item,index)=>(
                    <img
                    className='masonary__img' src={item} key={index} alt='masonary image' style={{'width':'100%',
                        'display':'block','borderRadius':'10px'}}/>
                ))
            }
        </Masonary>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery