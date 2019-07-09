1.  1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

1:A
Array.map(), Array.filter(), Array.concat() can be used without side effects, Object.assign() is used to create a new Object while extending the props of another Object.





1.  2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

2:A
Actions: in Redux are packets of information, usually an object, that contain an action type and a "payload" that contains some data for that action type. 

Reducers: handle those actions and update the store. Reducers are pure functions.

store: is a single JS Object that contains our state for our app. you do not overwrite or mutate the original state object directly, but copy the state object, modify the copy, and then replace the original state with the new copy.

In React-Redux apps, when your Redux is a single source of truth, it means that the only way to change your data in the UI is to dispatch redux actions which will change state within the redux reducer.





1.  3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

3:A
Application state is global state that all sub components can access, Component State is the local state restricted to a single component and cannot be accessed outside of the component.




1.  4. What is middleware?

4:A
Middleware is software that is like the glue that enables you to connect smaller bits of software together easily. Middleware allows us to intercept data and allow processes to continue or not.





1.  5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

5:A
When an action creator is called, thunk will intercept and look at what is returned. If the data returned is an action, it will forward the action to the reducer. If the data is a function or a thunk, a function returned from a function, then it will invoke that function and pass in the dispatch function as an argument. Simply put a way to chain actions together.




1.  6. Which `react-redux` method links up our `components` with our `redux store`?

6.A
the connect() method will link up the components with the redux store.