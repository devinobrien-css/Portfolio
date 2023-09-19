import { Messenger } from './components/Message';
import Landing from './routes/landing/landing';

const App = () => {
  return (
    <div className="relative h-screen overflow-y-scroll bg-gray-800">
      <Landing />
      <Messenger />
    </div>
  );
};
export default App;
