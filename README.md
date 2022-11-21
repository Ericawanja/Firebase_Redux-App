# Ecommerce store

This is an online store built using reactJs and firebase for the backend
concepts used include;

## 1. ReactJS react-router-dom
1. Advanced routing using react-router-dom library. These concepts include, 
- nested routes, 
- protected routes for the pages only available for the users who have logged in
Various react-router-dom hooks such as 
- useParams() to get the id of various products 
- useNavigate() to navigate to various routes and access the immediate previous routes
- useLocation() to check the path parameters to set active route(This can also be implemented using NavLink)

## 2. Redux toolkit
Redux toolkit is a state management library for react apps thjat simplifies managing state for big apps.
- create slice -
In this app I have used three slices i.e log inproducts slice, cart slice, and review slice
- asyncronous fetching of data- Using redux toolkit middleware i.e createAsyncThunk, i was able to fetch the data from the backend as well as post the data to the backend
- dispatch actions- i was able to dispatch various actions using useDispatch hook from react-redux library
- get the state- useSelector hook from react-redux library to get various states from the store
-combineReducers- Since the store receives only one reducer and I had multiple reducers for the different slices, i used combineReducer() method from react-redux library to combine them.
## 3. Basic ReactJs 

To come up with these app, I also used other basic reactJs concepts such as: 
- fuctional components, 
- props
- state 
- Event listeners
-  and conditional rendering to mention a few.
## 4. Javascript 

For the data manipulation i used various javascript data structures such as Arrays and objects an various methods to manipulate the data

# [Live link](https://reduxtoolkitfirebaseapp.netlify.app/)
