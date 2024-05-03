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
      <div className="absolute w-full h-full top-0 flex flex-row justify-center items-center gap-[300px] text-white">
        <img src={companyLogo} className="w-[375px]"></img>

        <div className="space-y-10">
          <div>
            <h1 className="text-5xl w-[400px] text-[#fcecc7]">
              <span className="text-yellow-500 text-[52px] font-semibold uppercase">
                Disco Dough:
              </span>{" "}
              Where Every Bite&apos;s a Party!
            </h1>
            <p className="text-lg mt-4">
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
