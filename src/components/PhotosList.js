import React from 'react'
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import Button from './Button'
import PhotosListItem from './PhotosListItem'
import Skeleton from './Skeleton'

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album)
  const [addPhoto, addPhotoResults] = useAddPhotoMutation()

  const handleClick = () => {
    addPhoto(album)
  }

  let content
  if (isFetching) {
    content = <Skeleton times={12} className='w-20 h-20 mx-2' />
  } else if (error) {
    content = 'Error fetching Photos.'
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />
    })
  }

  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg bold'>Photos in {album.title}</h3>
        <Button
          secondary
          rounded
          outline
          loading={addPhotoResults.isLoading}
          onClick={handleClick}
          className='text-green-500'
        >
          + Add Photo
        </Button>
      </div>
      <div className='mx-8 flex flex-row flex-wrap justify-center'>
        {content}
      </div>
    </div>
  )
}

export default PhotosList
