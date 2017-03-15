#### redux install

    npm install --save redux
    
    npm i --save react react-dom
    
    npm i babel-preset-react --save-dev
    
#### lab1-demo 

    redux without react 
    
#### lab2-demo

    redux with react 
    
#### lab3-demo

    1.react-redux 
    
    2.three way to 'mapDispatchToProps'
    
#### lab4-demo

    1.use constant variables to defined action type
    
    2.
        (1)use applyMiddleware channel between action dispatch and reducer 
            
            code:
            
            import fetchMiddleware from './fetchmiddleware'
            
            const store = createStore(
              itemApp,
              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
              applyMiddleware(fetchMiddleware))
            
        (2)use redux-thunk 
        
            *npm install --save redux-thunk
            
            code:
            
            import thunk from 'redux-thunk'
            
            const store = createStore(
              itemApp,
              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
              applyMiddleware(thunk))
    
    3.json-server db query 
    
        json-server db start
        
        json-server --watch --port 5555 src/lab4-demo/db/items.json
    
##### install suggested

    1.npm i eslint-plugin-react --save-dev
    
        in file '.eslintrc'
        
        1."extends": ["airbnb-base", "plugin:react/recommended"]
        
        2. "ecmaFeatures": {"jsx": true,"experimentalObjectRestSpread": true}
        
        3. "plugins": ["import", "react"]
        
    2.npm install whatwg-fetch --save
        
        ref by https://github.com/github/fetch
        
##### refs

    1.http://ithelp.ithome.com.tw/articles/10187498
    
    2.http://ithelp.ithome.com.tw/articles/10187640
    
    3.http://ithelp.ithome.com.tw/articles/10187762
    
    4.http://ithelp.ithome.com.tw/articles/10187802
        
    

