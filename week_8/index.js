/*const title = document.querySelector('.title')
const myLocation = document.querySelector('.location')
let data = fetch('https://api.github.com/users/OlyaMelska').then(response => response.json()).then( responseJson => 
{
  title.innerHTML = responseJson.login
  myLocation.innerHTML = responseJson.location
}) 
console.log(data)
console.log('hello')*/

let input = document.querySelector('#search-box')
input.addEventListener('keydown', (event) =>{
  const value = input.value
  const configuration = {
    headers: {
      'Authorization': 'token OlyaMelska:502fc27f14af5220efe18d8ec6a44c57204e4cf4'
    }
  };
  fetch('https://api.github.com/search/repositories?q=' + value, configuration).then(response => response.json())
  .then(responseJson => console.log(responseJson))
})