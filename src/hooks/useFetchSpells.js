import { useState, useEffect } from 'react'

const fetchSpells = async () => {
  const baseUrl = 'https://api.open5e.com/spells/?format=json&page=';
  const totalPages = 17
  const pageUrls = Array.from({length:totalPages }, (_, i) => `${baseUrl}${i + 1}`);

  try {
    const allPagesData = await Promise.all(pageUrls.map(url => fetch(url)));
    const allSpells = allPagesData.flatMap(pageData => pageData.formData.results)
    return allSpells
  } catch (error) {
    console.error('Error fetching spells: ', error);
    return []
  }
}

export const useSpells = () => {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetSpells = async () => {
      setLoading(true);
      const fetchedSpells = await fetchSpells();
      setSpells(fetchedSpells);
      setLoading(false);
    }
    fetchAndSetSpells();
  }, []);

  return { spells, loading }
};
