import { Routes, Route } from "react-router-dom";
import { SpellInfo, Search, SpellList, PageNotFound, Home } from '../pages';

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="spell/:slug" element={<SpellInfo />} />
        <Route path="search" element={<Search />} />
        <Route path="filter" element={<SpellList />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  )
}
