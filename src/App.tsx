import { ToastContainer} from 'react-toastify';
import { Background } from './components/Background';
import { Logo } from './components/Logo';
import { initializeChartConfig } from './util/chart.config';
import { Router } from './util/router/Router';

initializeChartConfig();

/** 
 * Main App component
 * @returns {JSX.Element} The main App component
 */
const App = (): JSX.Element => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Background />
      <Logo />
      <Router />
      <ToastContainer
        newestOnTop
        autoClose={3000}
        position="bottom-right"
        toastClassName="rounded-lg dark:bg-slate-800 dark:text-white"
        closeButton={true}
      />
    </div>
  );
};
export default App;
