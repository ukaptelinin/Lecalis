import { FC } from 'react';
import RootRoutes from './Components/RootRoutes/RootRoutes';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import AppHeader from './Components/AppHeader/AppHeader';
import AppFooter from './Components/AppFooter/AppFooter';
import QuizStateContextProvider from './Components/QuizStateContextProvider/context';

const App: FC = () => (
  <QuizStateContextProvider>
    <BrowserRouter>
      <ScrollToTop />
      <AppHeader />
      <RootRoutes />
      <AppFooter />
    </BrowserRouter>
  </QuizStateContextProvider>
);

export default App;
