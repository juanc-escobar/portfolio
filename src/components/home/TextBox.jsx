import "./Home.css"
import { info } from "../info/Info"

const TextBox = () => {
  return (
    <section className="text-box">
      <div className="text-box-container">
        <h1 className="title-h1">Hi, I'm <span className="name-decoration">{info.firstName}</span> <span className="hand">🖐️</span></h1>
        <h2 className="title-h2">I'm {info.position}</h2>
        <p className="text-box-text">Hey there, welcome to my portfolio! Come on in and take a peek around.  If you're interested in bringing me on board for your team or just want to connect and say hi, please don't hesitate to drop me a message right here.  Let's connect and make some magic happen!</p>
      </div>
    </section>
  )
}

export default TextBox