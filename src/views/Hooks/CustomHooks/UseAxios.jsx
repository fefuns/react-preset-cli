import React from 'react';
import {useAxios} from 'utils/hooks';

export default function UseAxiosDemo() {
  const url = 'http://localhost:3000/';
  const [loading, data, error] = useAxios(url);
  if(loading) {
    return <div>loading...</div>
  } else {
    return error ? <div>{JSON.stringify(error)}</div>:<div>{JSON.stringify(data)}</div>
  }
}
