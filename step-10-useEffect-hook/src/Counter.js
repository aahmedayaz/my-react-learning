import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Counter = () => {
  let [post, setPosts] = useState([]);
  let [state , setState] = useState(false)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${document.getElementById('input').value}`)
      .then((res) => {
        setPosts([res.data]);
      })
  } , [state])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
      })
  }, []);

  return (
    <>
      <div className='container'>
        <input type='number'  id='input'/>
        <button onClick={() => setState(true)}>Get Single Post</button>
      </div>
      {
        Array.from(post).map((item) => {
          return <p key={item.id}>{item.id} - {item.title}</p>
        })
      }
    </>
  );
};

export default Counter;
