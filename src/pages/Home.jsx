import videoBg from "../assets/videoBg.mp4";
import companyLogo from "../assets/companyLogo.png";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser";
import Button from "../ui/Button";

function Home() {
  const videoRef = useRef(null);
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, [videoRef]);

  return (
    <div className="w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-65"></div>
      <video
        className="w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        ref={videoRef}
      />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center gap-[50px] text-white lg:flex-row lg:gap-[300px]">
        <img
          src={companyLogo}
          className="w-[175px] md:w-[250px] lg:w-[375px]"
        ></img>

        <div className="space-y-4 md:space-y-10">
          <div>
            <h1 className="text-xl md:text-3xl w-[400px] text-[#fcecc7] lg:text-5xl">
              <span className="text-yellow-500 text-[37px]  md:text-[45px] font-semibold uppercase lg:text-[52px]">
                Disco Dough:
              </span>{" "}
              <br></br>
              Where Every Bite&apos;s a Party!
            </h1>
            <p className="text-sm sm:display-hidden md:text-md mt-4 lg:text-lg">
              Fresh out of the oven, delivered straight to you.
            </p>
          </div>
          <div className="flex gap-10">
            {username === "" ? (
              <CreateUser />
            ) : (
              <Button to="/menu" type="primary">
                Continue ordering, {username}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
