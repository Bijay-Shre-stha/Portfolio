import './Loading.css'
const Loading = () => {
  return (
    <div>
        <div className="preloader__wrap">
        <div className="preloader">
            <div className="loading__circle loading__circle__one"></div>
            <div className="loading__circle loading__circle__two"></div>
            <div className="loading__circle loading__circle__three"></div>
        </div>
    </div>
    </div>
  )
}

export default Loading
