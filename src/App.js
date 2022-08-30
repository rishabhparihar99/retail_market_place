import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      title: "Hats",
      id: 1,
    },
    {
      title: "Jackets",
      id: 2,
    },
    {
      title: "Sneakers",
      id: 3,
    },
    {
      title: "Womens",
      id: 4,
    },
    {
      title: "Mens",
      id: 5,
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          {/* <img/> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
