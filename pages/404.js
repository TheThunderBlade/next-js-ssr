import Link from 'next/link';
import classes from '../styles/Error.module.css';

const ErrorPage = () => {
  return (
    <div>
      <h1 className={classes.error}>Error 404</h1>
      <p>Please go back to <Link href={'/'}><a>home page</a></Link></p>
    </div>
  );
};

export default ErrorPage;