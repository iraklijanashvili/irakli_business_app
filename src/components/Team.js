import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const TeamCard = ({ imgSrc, name, title }) => {
  return (
    <div className="relative flex flex-col gap-3 md:hover:shadow-lg rounded-xl md:py-14 py-8 px-6 team-card md:cursor-pointer bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-md hover:shadow-xl transition-all duration-300">
      <Image
        src={imgSrc}
        width={200}
        height={200}
        alt="team member"
        className="drop-shadow-2xl w-32 sm:w-48 md:mb-6 mb-4 rounded-full border-4 border-rose-500 mx-auto object-cover"
      />
      <h2 className="text-xl sm:text-2xl font-bold text-center pb-1">{name}</h2>
      <p className="text-center sm:text-lg text-base text-gray-600 dark:text-gray-300 font-medium">
        {title}
      </p>
      <div className="flex md:flex-col gap-4 mt-4 md:absolute md:bottom-16 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-rose-600">
        <Link target="_blank" href="#">
          <FacebookRoundedIcon className="text-2xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link target="_blank" href="#">
          <GitHubIcon className="text-2xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link target="_blank" href="#">
          <LinkedInIcon className="text-2xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24 py-10">
      <span className="service-name text-center">OUR TEAM</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        The most qualified and talented individuals
      </h2>

      <div className="mx-auto flex justify-center mt-16">
        <TeamCard
          imgSrc={"/team/irakli_profile.jpeg"}
          name="Irakli Janashvili"
          title="CEO and Founder"
        />
      </div>
    </section>
  );
};

export default Team;
