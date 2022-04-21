import Router from 'next/router';
import MainLayout from '../../components/Main.layout';

const Index = () => {
  return (
    <MainLayout title='About page'>
      <h1>About page</h1>

      <button onClick={() => Router.push('/')}>To home page</button>
    </MainLayout>
  );
};

export default Index;