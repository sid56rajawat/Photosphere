import "./assets/css/App.css";

function MyButton() {
  return <button>I'm a button</button>;
}

function Greeting(obj) {
  return <h1 className="greeting">Hello, {obj.name}</h1>;
}

export default function MyApp() {
  return (
    <div className="main">
      <Greeting name="Shivam" age="20" />
      <MyButton />
    </div>
  );
}

