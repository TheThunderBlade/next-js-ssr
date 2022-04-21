import NextNProgress from 'nextjs-progressbar';
import '../styles/Main.css';

const _App = ({ Component, pageProps }) => {
  return (
    <div>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps}/>
    </div>
  );
};

export default _App;