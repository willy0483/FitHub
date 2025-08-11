import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-900">
      <section className="relative h-[60%] w-full">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="/assets/train-like-pro.jpg"
          alt="Athlete training intensely"
          className="w-full h-full object-cover object-center md:object-[70%_0%]"
          loading="eager"
        />
        <div className="absolute bottom-8 left-8 z-20 text-white max-w-md">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-2">
            <span className="block">Believe</span>
            <span className="block">Yourself</span>
          </h1>
          <div className="relative">
            <div className="absolute right-[102%] top-1/2 h-px bg-white w-[calc(90vw-1rem)]"></div>
            <p className="text-xl md:text-2xl font-medium relative">
              Train like a pro
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[40%] w-full ">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          src="/assets/start-training.jpg"
          alt="Person starting workout"
          className="w-full h-full object-cover object-center md:object-[65%] transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute bottom-25 right-0 z-20">
          <button
            onClick={handleClick}
            className="bg-secondary opacity-75 p-2 rounded-tl-[8px] rounded-bl-[8px] hover:cursor-pointer"
          >
            Start Training
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
