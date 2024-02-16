import { ToastContainer} from 'react-toastify';
import { Navigation } from './components/navigation/Navigation';
import { Background } from './components/Background';
import { Routes } from './pages/Routes';
import 'react-toastify/dist/ReactToastify.css';
import {
  ArcElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Logo } from './components/Logo';

ChartJS.defaults.font.family = 'lato';
ChartJS.defaults.font.size = 16;
ChartJS.defaults.font.weight = 'lighter'; // lighter font weight
ChartJS.defaults.color = '#557786';
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Background />
      <Logo className='fixed border-8 border-red-500'/>
      <Navigation />
      <Routes />
      <ToastContainer
        position="bottom-right"
        newestOnTop
        autoClose={3000}
        toastClassName="rounded-lg"
        closeButton={true}
      />
    </div>
  );
};
export default App;
