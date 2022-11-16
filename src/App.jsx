import { Messenger } from "./components/message.component";
import Landing from "./pages/landing";

const App = () => {
  return (
    <div className="bg-gray-800 h-screen overflow-y-scroll relative">
      <Landing />
      <Messenger />
    </div>
  );
}
export default App;