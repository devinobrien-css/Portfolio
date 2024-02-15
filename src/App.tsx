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
      <svg version="1.1" viewBox="0 0 212 192" className='fixed w-1/6 sm:w-1/12'>
        <g 
          transform='translate(-240, -320) scale(1)'
        >
          <path className="fill-[#33485E]" d="M342.6,396c0,21.4-16.43,38.95-37.37,40.74l-0.21,0.01l-34.99,0.14V414.3h10.75  c5.08,5.83,12.57,9.51,20.92,9.51c15.36,0,27.81-12.45,27.81-27.81s-12.45-27.81-27.81-27.81c-8.35,0-15.84,3.68-20.92,9.51h-10.75  v-22.59l34.93,0.13l0.27,0.02C326.17,357.05,342.6,374.6,342.6,396z"/>
          <path className="fill-[#557786]" d="M301.47,375.09c-11.55,0-20.91,9.36-20.91,20.91s9.36,20.91,20.91,20.91c11.55,0,20.91-9.36,20.91-20.91  S313.01,375.09,301.47,375.09z M301.47,403.85c-4.34,0-7.85-3.52-7.85-7.85s3.52-7.85,7.85-7.85c4.34,0,7.85,3.52,7.85,7.85  S305.8,403.85,301.47,403.85z"/>
        </g>
      </svg>
      {/* <Logo className='fixed border-8 border-red-500'/> */}
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
