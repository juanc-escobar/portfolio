import './Footer.css'
import {info} from '../info/Info'

const Footer = () => {
  return (
    <footer className='footer'>
        <p className='footer-text'>Created by {info.firstName} {info.secondName} {info.lastName} &copy; 2023</p>
    </footer>
  )
}

export default Footer