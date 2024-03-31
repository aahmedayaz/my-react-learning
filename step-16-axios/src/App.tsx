import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  const [post, setPost] = useState<{[key: string] : string}[]>([]);

  const createPost = async () => {
    await axios.post(baseURL, {
      title: 'Ahmed',
      body: 'Ayaz'
    })
    .then((response): void => {
      console.log(response)
      console.log(response.data)
      setPost([
        ...post,
        {
          title: 'Ahmed',
          body: 'Ayaz'
        }
      ])
    })
    console.log(post)
  }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response)
      console.log(response.data)
    });
  }, []);
  return (
    <>
      {
        post[0] ?
        <>
          <h1>{post[101] ? post[101].title : post[0].title}</h1>
          <p>{post[101] ? post[101].body : post[0].body}</p>
          <button onClick={() => createPost()}>Post data</button>
        </>
        :
        <span>Loading</span>
      }
    </>
  );
}

export default App;
