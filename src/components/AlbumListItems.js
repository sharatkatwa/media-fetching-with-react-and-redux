import ExpandablePanel from './ExpandablePanel'
import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import { useRemoveAlbumMutation } from '../store'
import PhotosList from './PhotosList'

function AlbumListItems({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation()

  const handleClick = () => {
    removeAlbum(album)
  }

  const header = (
    <>
      <Button
        outline
        danger
        rounded
        loading={results.isLoading}
        onClick={handleClick}
        className='mr-4'
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  )

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}

export default AlbumListItems
