import { useState } from "react";
import { NavLink } from "react-router-dom";

export const DropdownMenu = ({onClassChange, onSchoolChange, onLevelChange}) => {

    const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
    const schools = ['Conjuration', 'Necromancy', 'Evocation', 'Abjuration', 'Transmutation', 'Divination', 'Enchantment', 'Illusion'];
    const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [toggleClass, setToggleClass] = useState(true);
    const [toggleSchool, setToggleSchool] = useState(true);
    const [toggleLevel, setToggleLevel] = useState(true);

    const handleClassChange = (cls) => {
        setSelectedClass(cls);
    }

    const handleSchoolChange = (school) => {
        setSelectedSchool(school);
    }
    
    const handleLevelChange = (level) => {
        setSelectedLevel(level)
    }
 
  return (
    <>
        <div className="relative">
            <button onClick={() => setToggleClass(!toggleClass)} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Classes<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="class-dropdown" className={`${toggleClass ? "hidden" : "" } mt-3 absolute overflow-visible z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                { classes.map((cls, index) => (
                <li key={index}>
                    <NavLink to={`/filter/${cls.toLowerCase()}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <button onClick={() => handleClassChange(cls)}>
                            {cls}
                        </button>
                    </NavLink>
                </li>
                ))}
                </ul>
            </div>
        </div>
        <div className="relative">
            <button onClick={() => setToggleSchool(!toggleSchool)} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Schools <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="school-dropdown" className={`${toggleSchool ? "hidden" : "" } mt-3 absolute overflow-visible z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                { schools.map((school, index) => (
                <li key={index}>
                    <NavLink to={`/filter/${school.toLowerCase()}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <button onClick={() => handleSchoolChange(school)}>
                            {school}
                        </button>
                    </NavLink>
                </li>
                ))}
                </ul>
            </div>
        </div>
        <div className="relative">
        <button onClick={() => setToggleLevel(!toggleLevel)} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Levels<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div id="level-dropdown" className={`${toggleLevel ? "hidden" : "" } mt-3 absolute overflow-visible z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            { levels.map((level, index) => (
            <li key={index}>
                <NavLink to={`/filter/${level}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <button onClick={() => handleLevelChange(level)}>
                        {level}
                    </button>
                </NavLink>
            </li>
            ))}
            </ul>
        </div>
        </div>
    </>
  )
}
