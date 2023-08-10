import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

import InputPost from './components/InputPost';
import ListPosts from './components/ListPosts';

function App() {
  return (
    <Fragment>
      <div className='container'>
      <InputPost/>
      <ListPosts/>
      </div>
    </Fragment>
  );
}

export default App;
