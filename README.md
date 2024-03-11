<h1 align="center">Welcome to One Dionys - Debounce Throttle Functions! 👋 </h1>

<p align="center">Functions to control the frequency of function calls, helping to address the issue of resource abuse. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-debounce-throttle-functions?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-debounce-throttle-functions?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-debounce-throttle-functions?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-debounce-throttle-functions?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-debounce-throttle-functions.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-debounce-throttle-functions?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-debounce-throttle-functions?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const { debounce, throttle } = require('./src/debounceThrottle');

// Example of using debounce function
const debouncedFunction = debounce(() => {
    console.log('Debounced function called');
}, 200);

// Example of using throttle function
const throttledFunction = throttle(() => {
    console.log('Throttled function called');
}, 200);

// Call the debounced function
debouncedFunction(); // This will not trigger immediately

// Call the throttled function
throttledFunction(); // This will trigger immediately
```

#### Explanation

* `Debounce Function`: Debouncing ensures that a function will not be called more often than a specified interval of time. It is typically used when you want to wait for some time after the last call to the function before executing it.
* `Throttle Function`: Throttling limits the rate at which a function can be called. It ensures that a function is called at most once during an interval of time. Throttling is useful when you want to ensure that a function is not called more frequently than a specified frequency.

#### Return Value

* Both debounce and throttle functions return a new function that encapsulates the original function and its behavior. This returned function can then be used to execute the original function with the specified debouncing or throttling behavior.

## 📆 Release Date

* v1.0.0 : 07 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Debounce Throttle Functions is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Debounce Throttle Functions? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
