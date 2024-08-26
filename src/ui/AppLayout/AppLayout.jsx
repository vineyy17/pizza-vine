import { Outlet, useNavigation } from 'react-router-dom';
import { split } from '../../animations/text';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import scroll from '../../animations/scroll';
import './AppLayout.scss';

function AppLayout() {
  scroll();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  useEffect(() => {
    split();
  });

  return (
    <div className="home">
      {isLoading && <Loader />}

      <Header />

      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
