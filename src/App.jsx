import Card from "./components/Card";
import Overview from "./components/Overview";
import data from "./data/data";


function App() {
  return (
    <div className="App">
      <h1 >Social Media</h1>
      <p>Total Folowers 23,004  </p>
     {data.map((item) => (
        <Card
          key={item.id}
          icon={item.icon}
          user={item.user}
          total={item.total}
          today={item.today}
          
        />
      ))}
    </div>

    


  );
}

export default App
