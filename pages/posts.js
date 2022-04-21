import Link from 'next/link';
import MainLayout from '../components/Main.layout';

const Posts = ({ posts }) => {
  return (
    <MainLayout title='Post page'>
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const data = await fetch('http://localhost:4200/posts');
  const posts = await data.json();
  return {
    props: { posts },
  };
}

export default Posts;