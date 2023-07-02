import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSpells } from '../hooks/useFetchSpells';

export const SpellList = () => {
  const [searchParams] = useSearchParams();
  const className= searchParams.get('className');
  const schoolName = searchParams.get('schoolName');
  const level = searchParams.get('level');
  const { spells, loading } = useSpells();
  const [filteredSpells, setFilteredSpells] = useState([]);



  useEffect(() => {
    if(!loading) {
      let tempFilteredSpells = [...spells]
      if (className) {
        tempFilteredSpells = tempFilteredSpells.filter(spell => spell.dnd_class.includes(className));
      }
      if (schoolName) {
        tempFilteredSpells = tempFilteredSpells.filter(spell => spell.school === schoolName);
      }
      if (level) {
        tempFilteredSpells = tempFilteredSpells.filter(spell => spell.level);
      }
      setFilteredSpells(tempFilteredSpells)
    }
  }, [className, schoolName, level, spells, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div>
        { filteredSpells ? filteredSpells.map((spell) => (
          <span>{spell.name}</span>
        )) : spells.map((spell) => (
          <span>{spell.name}</span>
        ))}
      </div>
      <div></div>
    </main>
  )
}
