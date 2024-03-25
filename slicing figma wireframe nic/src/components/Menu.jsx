import imgsatu from "../assets/satu.jpeg";
import imgdua from "../assets/dua.jpeg";
import imgtiga from "../assets/tiga.jpeg";
import imgempat from "../assets/empat.jpeg";

const Sidebar = () => {
  return (
    <div className="w-[calc(30%-20px)] bg-gray-100 rounded-lg  h-full flex flex-col gap-6 items-center justify-center px-5">
      <img
        src={imgsatu}
        className="w-full h-auto max-h-[110px] rounded"
        alt=""
      />
      <img
        src={imgdua}
        className="w-full h-auto max-h-[110px] rounded "
        alt=""
      />
      <img
        src={imgtiga}
        className="w-full h-auto max-h-[110px] rounded"
        alt=""
      />
      <img
        src={imgempat}
        className="w-full h-auto max-h-[110px] rounded"
        alt=""
      />
    </div>
  );
};

const MenuList = () => {
  return (
    <div className="w-[calc(70%-20px)] bg-gray-100 rounded-lg h-full flex flex-col gap-auto justify-between py-5">
      <p className="text-3xl font-bold capitalize font-mono text-black mx-5">Menu</p>
      <div className="grid grid-cols-2 gap-9 px-5">
        <img src={imgdua} alt="" className="w-full h-auto max-h-[180px] rounded" />
        <img src={imgdua} alt="" className="w-full h-auto max-h-[180px] rounded" />
      </div>
      <div className="px-5">
        <p className="text-3xl font-bold capitalize font-mono text-black ">About</p>
        <p className="text-xs font-bold capitalize font-mono text-black ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In iusto,
          quidem et cum debitis corrupti eius asperiores dolor natus vitae animi
          hic molestias! Fugit dolorem, voluptate ullam ratione rerum similique
          debitis reiciendis quae iure tempora mollitia soluta maiores quod
          deleniti eaque fuga velit deserunt iusto excepturi quaerat quisquam
          ipsum? Laboriosam!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 px-5">
        <img src={imgsatu} alt="" className="w-full h-auto max-h-[180px] rounded" />
        <img src={imgsatu} alt="" className="w-full h-auto max-h-[180px] rounded" />
        <img src={imgsatu} alt="" className="w-full h-auto max-h-[180px] rounded" />
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Menu = ({ menuRef }) => {
  return (
    <div id="Menu" ref={menuRef} className="w-full h-screen bg-[rgba(125, 120, 120, 0.1)] flex justify-between py-10">
        <MenuList className=""/>
        <Sidebar className=""/>
    </div>
  );
};

export default Menu;
