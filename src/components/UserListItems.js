import { removeUser } from '../store'
import useThunk from '../hooks/use-thunk'
import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import AlbumsList from './AlbumsList'

function UserListItems({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser)

  const handleClick = () => {
    doRemoveUser(user)
  }

  const header = (
    <>
      <Button
        danger
        rounded
        className='mr-3'
        loading={isLoading}
        onClick={handleClick}
      >
        <GoTrashcan />
      </Button>
      {error && 'Error deleting user.'}
      {user.name}
    </>
  )
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  )
}

export default UserListItems
