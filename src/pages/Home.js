import Mage from '../assets/home/mage.png';
import Santa from '../assets/home/santa.png';
import Welcome from '../assets/home/santaChair.png';

export const Home = () => {
  return (
    <main>
      <div className="flex flex-col flex-shrink items-center border-b pb-24 border-dark-900 text-center">
        <h1 className="font-bold text-7xl my-20 text-gray-700 dark:text-white">Welcome to Britzky's Spellbook!</h1>
        <img className="rounded-lg" src={Welcome} alt="santa in a chair" />
        <h2 className="font-bold text-3xl my-10 text-gray-700 dark:text-white text-center">One stop shop for displaying information about spells and organize your current spells for your next adventure.</h2>
      </div>
      <div className="flex flex-shrink flex-col md:flex-row gap-16 items-center my-48 border-b pb-28 border-dark-900">
        <img className="md:max-w-md rounded-xl" src={Mage} alt="gnome mage with blue egg" />
        <p className="text-gray-700 dark:text-white text-2xl text-center">Select class or school to see all of the spells for your class or school.</p>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="flex flex-shrink flex-col md:flex-row-reverse gap-16 my-10 items-center" >
        <img className="md:max-w-md rounded-xl" src={Santa} alt="Santa with fist clenched" />
        <p className="text-gray-700 dark:text-white text-2xl text-center">Or if you already know what spell you're curious about, just use the search bar to find it!</p>
      </div>
    </main>
  )
}
