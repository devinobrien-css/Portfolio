import { ToastContainer } from 'react-toastify';
import { LoadingScreen } from './components/LoadingScreen';
import { initializeChartConfig } from './util/chart.config';
import { Router } from './util/router/Router';
import { Footer } from './components/Footer';
import { ThemeProvider } from './util/context/ThemeContext';
import { TLDRProvider } from './util/context/TLDRContext';
import { SiteVerification } from './components/SEO/SiteVerification';
import { MyOrganizationSchema } from './components/SEO/OrganizationStructuredData';

initializeChartConfig();

/**
 * Main App component
 * @returns {JSX.Element} The main App component
 */
const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <TLDRProvider>
        {/* Global SEO enhancements */}
        <SiteVerification />
        <MyOrganizationSchema />

        <div className=''>
          <LoadingScreen />
          <Router />
          <ToastContainer
            newestOnTop
            autoClose={3000}
            position='bottom-right'
            toastClassName='rounded-lg dark:bg-slate-800 dark:text-white'
            closeButton={true}
          />
          <Footer />
        </div>
      </TLDRProvider>
    </ThemeProvider>
  );
};
export default App;
