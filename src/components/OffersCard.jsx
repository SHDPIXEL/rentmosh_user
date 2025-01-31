import { Tag, Gift, Percent, BadgeCheck } from "lucide-react";
import offerbg from "../assets/images/offer2.png";

const OffersCard = ({ offer, bgColor = "bg-yellow-500" }) => {
  const iconMap = {
    tag: Tag,
    gift: Gift,
    percent: Percent,
    badge: BadgeCheck,
  };

  const IconComponent = iconMap[offer.icon] || Tag;

  return (
    <div
      className="relative bg-cover bg-center rounded-xl"
      style={{ backgroundImage: `url(${offerbg})`, backgroundColor: `${bgColor}33`, }} // Apply the background image here
    >
      {/* Semi-transparent overlay
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: bgColor,
          opacity: 0.3, // Adjust the opacity here
          zIndex: 1
        }}
      ></div> */}
      {/* <div className="p-4">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2 text-start">
          {offer.name}
        </h3>
        <p className="text-yellow-500 text-start text-sm mb-2">
          {offer.description}
        </p>
      </div> */}
      {/* {offer.bullets && (
          <p className="text-white text-sm text-start mt-2">
            {offer.bullets}
          </p>
        )} */}
      <div className="relative flex flex-col items-center p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* White Circle */}
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
          <IconComponent className="w-7 h-7 text-black" />
        </div>

        {/* Title */}
        <h4 className="text-md font-semibold text-yellow-500">{offer.title}</h4>

        {/* Offer Code */}
        {offer.code && (
          <div className="mt-3 px-4 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-md">
            Code: {offer.code}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default OffersCard;
