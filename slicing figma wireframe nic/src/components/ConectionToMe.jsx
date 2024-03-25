import location from '../assets/GoogleMapTA.webp'

const contact = ({ contactRef }) => {
  return (
    <div id='Contact' ref={contactRef} className='w-full h-[70vh] flex flex-col gap-5 py-10 px-20 bg-[rgba(125, 120, 120, 0.14)]'>
        <p className="text-5xl font-bold uppercase tracking-wider font-mono text-black ">Contact</p>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-4'>
          <p className="text-3xl font-bold uppercase tracking-wider font-mono text-black ">Copii Senja</p>
          <p className="text-2xl font-mono">Bekasi,West Java,Indonesia </p>
          <p className="text-2xl font-mono">+6285815997598</p>
        </div>
        <img className='w-[600px] h-[300px] rounded-3xl' src={location} alt="" />
      </div>
    </div>
  )
}

export default contact