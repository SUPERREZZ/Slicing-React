import '../custom.css'
import logo from '../assets/logo.webp'
// eslint-disable-next-line react/prop-types
const Hero = ({ homeRef }) => {
  return (
    <div id='Hero' ref={homeRef} className={`w-full h-[calc(100vh-85px)] flex flex-col gap-12 text-center  text-white justify-center items-center bg-custom`} >
        <img src={logo} className='w-[200px]' alt="logo" />
        <div className='text-center flex flex-col gap-4'>
            <p className='text-5xl font-bold uppercase tracking-wider font-mono '>Copii Senja</p>
            <p className='text-2xl font-mono '>Tempat Nyaman Bagi Kamu Pecinta Kopi</p>
        </div>
        <button className='text-2xl font-bold uppercase tracking-wider font-mono mt-4 outline outline-1 outline-white px-4 py-2 rounded-3xl duration-300 hover:scale-105 hover:bg-white hover:duration-300  hover:text-black'>Pesan Sekarang &gt;</button>

    </div>
  )
}

export default Hero