import React from 'react';
import './App.css';
import { Box } from '@material-ui/core';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
//components

import Header from './components/Header'
import Home from './components/Home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
    <Header />
    <Box style={{margintop : 64}}> 
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path='/details' element={<DetailView/>} />
    <Route exact path='/create' element={<CreateView/>} />
    <Route exact path='/update' element={<UpdateView/>} />
    </Routes>
    </Box>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
