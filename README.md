# Homework #2

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* arrow functions
		* arrow functions are a shorthand way of defining functions. It strips out much of the syntax making it look cleaner. The `function` keyword is removed, and if all it does is return a simple calculation, the curly braces and `return` keyword may be ommitted as well.
		``` js
		return arr.map(function(n, i) {
			return <Component key={i} data={n} />
		});
		```
		becomes
		``` js
		return arr.map((n,i) => <Component key={i} data={n} />);
		```
	* state
		- A component's state is an object that allows it to store variables for use in it's internal logic. While props are passed down to the component from the parent and do not change, the state is controlled by the component itself and may change based on various internal or external factors.
	* constructor
		- The constructor is called when creating an instance of an ES6 class, and it can be used to initialize the component's state, bind helper functions, call the constructor of the parent class, and more.
	* setState - setState with a callback function and setState with an object passed in
		- The setState will change the component's state, but it is asynchronous. The object version is usually used when the state is being completely overwritten. If the new state needs to refer to the old state, like for an increment, the callback version should be used.
	* .bind
		- .bind allows the `this` keyword to be redifined for a function. A use case for React is to bind a component's helper functions to the component itself.
	* functional components vs class components
		- functional stateless components are sometimes known as 'dumb' components. They are simply functions that return what a normal component would return in it's render function. A full class component has all the accoutrements including life cycle methods, potential helper functions, and state.
  	* onClick
		- onClick is property on a React component that takes a callback to a function that is known as an event handler. The DOM will call it when the appropriate event is triggered. in this case it would be triggered when the component is clicked by the user.


2. Fork and clone this repo.  When you need to commit use the following commands.
		
	* Run: `npm install -g create-react-app`
	* Create a boilerplate React app called clock. `create-react-app clock`
	* Navigate into /clock and run the command: `npm start`
	* Your `<App />` component will render a `<NavBar />` and a `<Clock />` component.
	* Create a file called `NavBar.js` and a file called `Clock.js`
	* `<NavBar />` and `<Clock />` will both be React components.  `<NavBar />` should display the title of your page in a larger font.
	* `<Clock />` will display a clock that updates every second.  (You will need to use the `Date` object.)
  	* `Date` example: `const now = new Date(); now.getHours(); now.getDay(); now.getMinutes(); now.getSeconds(); etc.`
	* Create a clock that updates every second. JavaScript's `setInterval(cb, miliseconds)` function allows you to specify code that runs after a set time.
	* Style `<Clock />` and try to make it look nice.



#### Congratulations on finishing Homework #2!

For more information about our other courses visit: https://www.lambdaschool.com
