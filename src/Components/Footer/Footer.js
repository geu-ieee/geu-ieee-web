
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
function Footer() {
  return (
    <>
      <div className="bg-gray-800 text-white flex flex-col justify-around p-10 place-items-center md:flex-row" id="footer">
      <div className='flex flex-row w-10/11 lg:w-1/4 place-items-center justify-between'>
      <div >
          <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bsmq8rbdsnijtp9hbtg5" alt="ieee logo" className=' w-36 h-36 flex-shrink-0'/>
        </div>
      <ul className='flex flex-col space-y-4 text-xl ml-14 lg:ml-8'>
          <a href='#footer'><li >Home</li></a>
          <a href='#footer'><li >About Us</li></a>
          <a href='#footer'><li >Events</li></a>
          <a href='#footer'><li >Gallery</li></a>
          <a href='#footer'><li >Membership</li></a>
        </ul>
      </div>
        
        

        <div className="text-center text-2xl mt-10 sm-mt-0">
          <h2 className='pb-7'>Contact Us</h2>
          <div className='flex flex-row space-x-7 '>
            <a href="#footer" ><BsGithub /></a>
            <a href="#footer" ><BsLinkedin /></a>
            <a href="#footer" ><BsTwitter /></a>
          </div>
        </div>
        
      </div>
      <p className='text-center bg-gray-800 text-white'>© IEEE 2022</p>
    </>);
}
export default Footer;