import hero_bg1 from "./../assets/img/hero-bg1.png";
import hero_man from "./../assets/img/hero-man.png";

function Hero() {
  return (
    <section className=" bg-blue text-white">
      <div
        style={{ backgroundImage: `url('${hero_bg1}')` }}
        className={`h-200 bg-contain bg-no-repeat justify-around bg-center flex mr-60`}
      >
        <div className="self-center justify-self-center w-5/10 mr-0 ">
          <h1 className="text-7xl font-bold">Find Your Dream Job with Ease</h1>
          <p className="text-xl  ml-6 w-13/20">
            Search, Apply, and Track Job Applications All in One Place
          </p>
        </div>
        <div className="place-self-end  -mb-18 -mr-50 ">
          <img src={hero_man} className="h-162.5 " alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
