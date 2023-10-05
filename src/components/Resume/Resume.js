// components/Resume.js
import Image from 'next/image'

import React, { useState, useEffect } from 'react';
const technologyData = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'React', icon: '⚛️' },
    { name: 'MongoDB', icon: '📊' },
    { name: 'Prisma', icon: '🔵' },
    { name: 'GraphQL', icon: '🚀' },
];

const formatTimeUnit = (value, unit) => {
    if (value === 1) {
        return `${value} ${unit}`;
    } else {
    if (unit === 'mes') {
        return `${value} meses`;
    } else {
        return `${value} ${unit}s`;
    }
    }
};

const formatDuration = (language, years, months, days, hours, minutes, seconds, remainingMillisecondsFinal) => {
  const timeUnits = [
    { value: years, unit: language === 'en' ? 'year' : 'año' },
    { value: months, unit: language === 'en' ? 'month' : 'mes' },
    { value: days, unit: language === 'en' ? 'day' : 'día' },
    { value: hours, unit: language === 'en' ? 'hour' : 'hora' },
    { value: minutes, unit: language === 'en' ? 'minute' : 'minuto' },
    { value: seconds, unit: language === 'en' ? 'second' : 'segundo' },
    { value: remainingMillisecondsFinal, unit: language === 'en' ? 'millisecond' : 'milisegundo' },
  ];

  const formattedDuration = timeUnits
    .map(({ value, unit }) => formatTimeUnit(value, unit))
    .join(', ');

  return formattedDuration;
};

const calculateExperience = (language) => {
    const startDate = new Date('2019-07-28');
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - startDate;

    // Extracting years, months, days, hours, minutes, seconds, and milliseconds
    const years = Math.floor(diffInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    const remainingMilliseconds = diffInMilliseconds % (365 * 24 * 60 * 60 * 1000);

    const months = Math.floor(remainingMilliseconds / (30 * 24 * 60 * 60 * 1000));
    const remainingMonthsMilliseconds = remainingMilliseconds % (30 * 24 * 60 * 60 * 1000);

    const days = Math.floor(remainingMonthsMilliseconds / (24 * 60 * 60 * 1000));
    const remainingDaysMilliseconds = remainingMonthsMilliseconds % (24 * 60 * 60 * 1000);

    const hours = Math.floor(remainingDaysMilliseconds / (60 * 60 * 1000));
    const remainingHoursMilliseconds = remainingDaysMilliseconds % (60 * 60 * 1000);

    const minutes = Math.floor(remainingHoursMilliseconds / (60 * 1000));
    const remainingMinutesMilliseconds = remainingHoursMilliseconds % (60 * 1000);

    const seconds = Math.floor(remainingMinutesMilliseconds / 1000);
    const remainingMillisecondsFinal = remainingMinutesMilliseconds % 1000;

    return formatDuration(language, years, months, days, hours, minutes, seconds, remainingMillisecondsFinal)
}
const Resume = ({language}) => {
  const [experienceYears, setExperience] = useState(calculateExperience(language));

  const renderDescription = () => {

    if (language === 'en') {
      return (
        <>
          <div className="mb-4">
                <p className="text-gray-dark">
                    Welcome to my digital world!
                </p>

                <p className="text-gray-dark">
                    My journey began in 2019, exploring the vast realm of web development.
                </p>
                <p className="text-gray-dark">
                    This is where creativity meets functionality in the expansive universe of JavaScript.
                </p>
                <p className="text-gray-dark">
                    Since then, I have forged a path filled with elegant code and innovative solutions.
                </p>
          </div>
          <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-dark mb-2">Technologies:</h3>
        {renderTechnologies()}
      </div>

        </>
      );
    } else {
      return (
        <>
          <div className="mb-4">
            <p className="text-gray-dark">
                ¡Bienvenido a mi mundo digital! 
            </p>

            <p className="text-gray-dark">
                Mi viaje comenzó en 2019 explorando el vasto mundo del desarrollo web. 
            </p>
            <p className="text-gray-dark">
                Aquí es donde la creatividad se encuentra con la funcionalidad en el amplio universo de JavaScript. 
            </p>
            <p className="text-gray-dark">
                Desde entonces, he forjado un camino lleno de código elegante y soluciones innovadoras.
            </p>
          </div>
          <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-dark mb-2">Tecnologías:</h3>
        {renderTechnologies()}
      </div>
        </>
      );
    }
  };

  const renderTechnologies = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {technologyData.map((tech, index) => (
          <div key={index} className="flex items-center">
            <span className="mr-2 text-2xl">{tech.icon}</span>
            <span className="text-gray-dark">{tech.name}</span>
          </div>
        ))}
      </div>
    );
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
        setExperience(calculateExperience(language));
    }, 1);
    return () => clearInterval(intervalId);

  }, [,language]);
  return (
    <div className="bg-white border border-gray-light p-6 mt-6 rounded-md ">
      <div className="mb-6 grid grid-cols-2 gap-4 items-center">
          <Image
              src="/profile.jpg"
              width={500}
              height={500}
              className="w-30 h-30 rounded-full"
              alt="Picture of the author"
          />
          <p className="text-gray-dark text-end">
              {language === 'en'
              ? `${experienceYears} working with JavaScript.`
              : ` ${experienceYears} trabajando con JavaScript.`}
          </p>
      </div>
      {renderDescription()}
    </div>
  );
};

export default Resume;
