import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";
import Map from './Localization';

const options = [
  {id: 1, name: '537 993 271', icon: <FaPhoneAlt/>},
  {id: 2, name: 'e-mail', icon: <IoIosMail/>},
  {id: 3, name: '1 Maja 57, 32-340 Wolbrom', icon: <FaLocationDot/>},
  {id: 4, day: ['pn','wt','śr','czw','pt','sb','nd'], openHours: ['9,23','9,23','9,23','9,23','9,23','10-15','10-15'], icon: <IoCalendar/>},
];

const Contact = () => {
  return (
    <div className="w-full h-screen text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4">
            {options.map(({ id, name, icon, day, openHours }) => (
              <div key={id} className="my-5 flex justify-center border px-2 py-4 border-md">
                {icon}
                <a href="null" className={`mx-2 text-lg uppercase`}>{name}</a>
                {id === 4 && (
                  <ul className="mt-2">
                    <h1>Godziny Otwarcia</h1>
                    {day.map((d, id) => (
                      <li key={id}>{d}: {openHours[id]}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 bg-yellow-300">
            <Map/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
