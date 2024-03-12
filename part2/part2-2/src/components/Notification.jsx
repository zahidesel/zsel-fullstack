const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='changes'>
      {message}
    </div>
  )
}

export default Notification