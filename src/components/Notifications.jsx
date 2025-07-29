const Notification = ({ message }) => {
  if (!message) return null

  return (
    <div className="text-center py-2 px-4 my-4 rounded font-medium text-sm bg-yellow-100 text-yellow-800 border border-yellow-300">
      {message}
    </div>
  )
}

export default Notification
