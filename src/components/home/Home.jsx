
import TextBox from "./TextBox"
import ImgBox from "./ImgBox"
import "./Home.css"

const Home = () => {
  return (
    <main className="spa-body home-main">
        <div className='home-container'>
            <TextBox />
            <ImgBox />
        </div>
    </main>
  )
}

export default Home