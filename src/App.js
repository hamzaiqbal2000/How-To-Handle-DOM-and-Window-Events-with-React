import FileNamer from "./components/FileNamer/FileNamer";

function App() {
  //How To Handle DOM and Window Events with React
  return (
    <div className="App">
      <FileNamer />
    </div>
  );
}

export default App;
//react passes a special wrapper called syntheticEvent to event handler rather than the native browser Event
