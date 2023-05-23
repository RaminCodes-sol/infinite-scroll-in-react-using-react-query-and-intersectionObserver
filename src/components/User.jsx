

const User = ( { user }) => {
  return (
    <div className="flex flex-col gap-2 text-white bg-purple-600 mb-5 px-4 py-2 rounded-lg">
        <h3>ID: {user.id}</h3>
        <figure>
            <img src={user.image} alt='img' className="rounded-lg"/>
        </figure>
        <h1>{user.fullname}</h1>
        <code>{user.email}</code>
    </div>
  )
}

export default User