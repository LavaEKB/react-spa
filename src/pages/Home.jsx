import { useState, useEffect } from 'react'
import { getAllCategories } from '../api'
import { Preloader } from '../components/Preloader'
import { CategoryList } from '../components/CategoryList'
import { Search } from '../components/Search'

function Home() {
    const [catalog, setCatalog] = useState([]);
    //для поиска
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    //функция управления поиском
    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        );
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(data.categories)
        })
    }, []);

    return <>
        <Search cb={handleSearch} />
        {!catalog.length ? <Preloader /> : (
            <CategoryList catalog={filteredCatalog} />
        )}
    </>
}
export { Home };

