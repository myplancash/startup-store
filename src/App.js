import './categories.style.scss';

function App() {


  const categories = [
    {
      id: 1,
      title: 'Snikers',
    },
    {
      id: 2,
      title: 'Socks',
    },
     {
      id: 3,
      title: 'T-shirt',
    },
    {
      id: 4,
      title: 'Jeans',
    },

  ]


  return (
    <div className="categories-container">
     {categories.map(({title, id}) => (
      <div key={id} className='category-container'>
        <div className="background-image">
        </div>
        <div className='category-body-container'>
          <h2>{title}</h2>
          <h2>SHOW NOW</h2>
        </div>
      </div>
     ))}
    </div>
  ); 
}

export default App;
