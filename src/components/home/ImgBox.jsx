import "./Home.css"
import profilePicture from '../../assets/images/profile-img.webp'

const ImgBox = () => {
  return (
    <div className="img-container">
        <img src={profilePicture} alt="Profile Picture" className="img"/>
    </div>
    
  )
}

export default ImgBox

