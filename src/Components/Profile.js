import DP_Profile from "../images/DP-Profile.png";
import Phone from "../images/phone.png";
import Mail from "../images/mail.jpg";
import Location from "../images/location.png";
import LinkedIn from "../images/linkedIn.png";
const Profile = () => {
  return (
    <div>
      <div className="items-center flex justify-center ">
        <img src={DP_Profile} class="w-[200px] m-4" alt="DP Image" />
      </div>
      <div className="items-center justify-left mx-4 text-neutral-700">
        <p className="mb-2">
          <h3 className="font-bold text-2xl text-neutral-700">
            Dhairyasheel Rajendra Patil
          </h3>
          <h2 className="font-semibold text-ms  ">
            Frontend Developer (React, JavaScript)
            <p className="border-b-2 border-amber-300 w-12"></p>
          </h2>
        </p>
        {/* Middle border line */}
        {/* <p className="border-b-2 border-b-zinc-600 w-full"></p> */}
        {/* Contact */}
        <div className="w-xs leading-[29px] items-center justify-center ">
          <p className="font-semibold text-xl underline mb-2 text-emerald-900">
            Contact
          </p>
          <p className="flex">
            <img src={Phone} className="w-[26px] mr-2" />
            9665628113
          </p>
          <p className="flex ml-[-4px]">
            <img src={Mail} className="w-[34px] mr-1" />
            dpatilofficial@gmail.com
          </p>
          <p className="flex">
            {" "}
            <img src={LinkedIn} className="w-[25px] h-[24px] mr-2 " />
            <span className="mt-[-4px]">
              <a
                href="https://www.linkedin.com/in/belikedhairya/"
                target="blank"
              >
                www.linkedin.com/in/belikedhairya
              </a>
            </span>
          </p>
          <p className="flex">
            {" "}
            <img src={Location} className="w-[25px] h-[25px] mr-2 mt-1" />
            Flat No:12 Sant Dyaneshwar Raj Park Chinchwadgaon Pune - 411033
          </p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
