import React from "react";

function CategoryFilter({categories, setCategory}) {

  const filters = categories.map(category => {
    return (
    <button 
      key={categories.indexOf(category)}
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
    )
})


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {filters}
    </div>
  );
}

export default CategoryFilter;
