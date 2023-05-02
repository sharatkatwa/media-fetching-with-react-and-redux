import React from 'react'
import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store'
import AlbumListItems from './AlbumListItems'
import Button from './Button'
import Skeleton from './Skeleton'

function AlbumsList({ user }) {
  const { data, isFetching, isError } = useFetchAlbumsQuery(user)
  const [addAlbum, results] = useAddAlbumMutation()

  const handleClick = () => {
    addAlbum(user)
  }

  let content
  if (isFetching) {
    content = <Skeleton times={3} className='h-10 w-full' />
  } else if (isError) {
    content = <div>Error Fetching Albums.</div>
  } else {
    content = data.map((album) => {
      return <AlbumListItems key={album.id} album={album} />
    })
  }

  return (
    <div>
      <div className='m-3 flex flex-row justify-between items-center'>
        <h3 className='text-lg bold'>Album by {user.name}</h3>
        <Button
          success
          outline
          rounded
          loading={results.isLoading}
          className='text-black'
          onClick={handleClick}
        >
          + Add album
        </Button>
      </div>
      <div className='p-5'>{content}</div>
    </div>
  )
}

export default AlbumsList
