import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';


import PostsIndex from './components/PostsIndex';
import NewPost from './components/NewPost';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
            <Switch>
                <Route path="/post/new" component={NewPost} />
                <Route path="/" component={PostsIndex} />

            </Switch>
        </div>
      </BrowserRouter>


  </Provider>
  , document.querySelector('.container'));
