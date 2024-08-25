import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="p-4 bg-blue-500 text-white">Hello, Tailwind!</div>
      <Button className='m-4 w-36 active:scale-90 duration-300 transition-all'>Button</Button>
    </>
  );
}

export default App;
