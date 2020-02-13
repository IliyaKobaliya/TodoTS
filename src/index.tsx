import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/app';


const renderApp = () => <BrowserRouter><App /></BrowserRouter>;

const root = document.getElementById('root');
render(renderApp(), root);