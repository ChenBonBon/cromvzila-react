import { useState } from "react";

export default function Project2() {
  const [staffVisible, setStaffVisible] = useState(false);

  function handleMouseOver() {
    setStaffVisible(true);
  }

  function handleMouseOut() {
    setStaffVisible(false);
  }

  return (
    <div className="relative">
      <img
        src="/images/project/project-2/bg.png"
        alt="/images/project/project-2/bg.png"
      />
      <img
        src="/images/project/project-2/bg-staff.png"
        alt="/images/project/project-2/bg-staff.png"
        className="absolute top-1/2 left-0 h-1/2 cursor-pointer"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      {staffVisible && (
        <img
          src="/images/project/project-2/staff.png"
          alt="/images/project/project-2/staff.png"
          className="absolute top-0 left-[48%] h-full"
        />
      )}
    </div>
  );
}
