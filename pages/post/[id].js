import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MainLayout from '../../components/Main.layout';

const Post = ({ post: serverPost }) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await res.json();
      setPost(data);
    }

    if (!serverPost){
      fetchData();
    }
  }, []);

  if (!post) {
    return <MainLayout>
      <p>Loading...</p>
    </MainLayout>
  }

  return (
    <MainLayout title={`Post #${post.id}`}>
      <h1>{post.title}</h1>
      <hr/>
      <p>{post.body}</p>
    </MainLayout>
  );
};

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null }
  }
  const data = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await data.json();
  return { post };
}

export default Post;