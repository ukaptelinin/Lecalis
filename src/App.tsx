import { FC } from 'react';
import RootRoutes from './Components/RootRoutes/RootRoutes';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import AppHeader from './Components/AppHeader/AppHeader';
import AppFooter from './Components/AppFooter/AppFooter';

const App: FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AppHeader />
    <RootRoutes />
    <AppFooter />
  </BrowserRouter>
);

export default App;
