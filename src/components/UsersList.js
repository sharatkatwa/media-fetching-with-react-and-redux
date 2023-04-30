import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchUsers, addUser } from '../store'
import Button from '../components/Button'
import Skeleton from './Skeleton'
import useThunk from '../hooks/use-thunk'

import UserListItems from './UserListItems'

function UsersList() {
  const [doFetchUsers, isLoadingUsers, LoadingUsersError] = useThunk(fetchUsers)
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)

  const { data } = useSelector((state) => {
    return state.users
  })

  useEffect(() => {
    doFetchUsers()
  }, [doFetchUsers])

  const handleClick = () => {
    doCreateUser()
  }

  let content

  if (isLoadingUsers) {
    content = <Skeleton times={6} className='h-10 w-full' />
  } else if (LoadingUsersError) {
    content = <div>error fetching data</div>
  } else {
    content = data.map((user) => <UserListItems key={user.id} user={user} />)
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        <Button primary rounded loading={isCreatingUser} onClick={handleClick}>
          + Add User
        </Button>

        {creatingUserError && 'Error creating user'}
      </div>
      {content}
    </div>
  )
}

export default UsersList
