  
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const Allcategories = ['all', ...new Set(items.map((item) => item.category))]
function App() {
  const [ItemMenu, setItemMenu] = useState(items);
  const [categories, setcategories] = useState(Allcategories);
  const filterBtn = (category) => {
    if (category === 'all'){
      setItemMenu(items);
      return;
    }
    const newItem = items.filter((item)=> item.category === category);
    setItemMenu(newItem);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our movies</h2>
          <div className="underline"></div>
        </div>
        <Categories  categories={categories} filterBtn={filterBtn}/>
        <Menu Items={ItemMenu} />
      </section>
    </main>
  );
}

export default App;