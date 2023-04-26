import topping1 from "../assets/images/toppng 1.png";
import topping2 from "../assets/images/PngItem_1144050 2.png";
import telephone from "../assets/images/Free Ui View Mobile App Mockup 1.png";

const PrApp: React.FC<any> = () => {
  return (
    <div className=" w-full mx-auto p-9 pl-10 sm:grid grid-cols-3 gap-4 sm:p-32 mt-10 sm:mt-10 bg-BG_Basic text-white ">
      <div className="sm:relative border-8 border-cyan-500 col-span-2 p-5 sm:ml-10">
        <div className="sm:absolute -left-14 flex flex-col gap-5 sm:gap-10 sm:px-10 sm:py-10 sm:mx-auto bg-white sm:h-full md:left-16">
          <h1 className="text-2xl text-black font-bold">
            A Great App Makes Your Life Better
          </h1>
          <p className="sm:text-sm font-san text-black">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <h1 className="font-bold text-xl ">Download App Now</h1>
          <div className="flex gap-5">
            <img className="w-1/3" src={topping1} />
            <img className="w-1/3" src={topping2} />
          </div>
        </div>
      </div>
      <img
        src={telephone}
        className="hidden sm:block w-96 sm:mx-auto sm:ml-16"
      />
    </div>
  );
};

export default PrApp;
