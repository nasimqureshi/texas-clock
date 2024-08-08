

const CurrentTime = () => {
  let time = new Date();
  return (
    <div>
      <div className="lead">This is the current local time: {time.toLocaleDateString()} -{""} {time.toLocaleTimeString()}</div>
    </div>
  )
}

export default CurrentTime
