
import TextBox from "./TextBox"
import ImgBox from "./ImgBox"
import "./Home.css"

const Home = () => {
  return (
    <main className="main">
        <div className='container'>
            <TextBox />
            <ImgBox />
        </div>
    </main>
  )
}

export default Home