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

/**
 * Initialize the chart.js configuration
 * @returns {void}
 */
export const initializeChartConfig = (): void => {
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
};