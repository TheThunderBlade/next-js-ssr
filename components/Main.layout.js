import Head from 'next/head';
import Link from 'next/link';

const MainLayout = ({ children, title = 'Next App' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/posts'}><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background: wheat;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          nav a {
            color: black;
            text-decoration: none;
          }

          main {
            margin-top: 60px;
          }
        `}
      </style>
    </div>
  );
};

export default MainLayout;