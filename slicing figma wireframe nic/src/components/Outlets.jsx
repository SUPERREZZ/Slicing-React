
import Outlet1 from '../assets/outlet1.jpg';
import Outlet2 from '../assets/outlets2.jpg';
import Outlet3 from '../assets/outlets3.jpg';
import Outlet4 from '../assets/outlets4.jpg';
import Outlet5 from '../assets/outlets5.jpg';

// eslint-disable-next-line react/prop-types
const Outlet = ({ src, location }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 pb-2  rounded-3xl'>
            <img src={src} className='w-[250px] h-[250px] rounded-t-3xl' alt="outlet" />
            <p className='text-center font-bold text-2xl capitalize font-mono'>{location}</p>
        </div>
    );
}

// eslint-disable-next-line react/prop-types
const Outlets = ({ outletRef }) => {
    return (
        <div id='Outlets' ref={outletRef} className="w-full h-[70vh] flex flex-col gap-8 pt-10 px-5 bg-[rgba(125, 120, 120, 0.14)]">
           <p className='text-5xl font-bold capitalize tracking-wider font-mono text-black'>Outlets</p>
           <div className='grid grid-cols-5 gap-4 '>
                <Outlet src={Outlet1} location="Bekasi" />
                <Outlet src={Outlet2} location="Tangerang" />
                <Outlet src={Outlet3} location="Jakarta Pusat" />
                <Outlet src={Outlet4} location="Surabaya" />
                <Outlet src={Outlet5} location="Jakarta Timur" />
           </div>
        </div>
    );
}

export default Outlets;
