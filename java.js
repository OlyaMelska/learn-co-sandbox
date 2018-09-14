const API_KEY = 'ogyTgjHZG9v4CMjrURKfGbrduEVh3eIC'

document.addEventListener('DOMContentLoaded', event =>{
  
  
  document.addEventListener('submit', event =>{
    event.preventDefault()
    let input = document.getElementById('ticketmaster-search')
    let value = input.value
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${value}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(responseJSON => {
      
      console.log(responseJSON)
      makeEvents(responseJSON)
    })
    
    
  })
})

function makeEvents(json){
  let div = document.getElementById('events-container')
  const events = json._embedded.events
  events.forEach( event => {
    const eventDiv = document.createElement('div')
    const eventH1 = document.createElement('h1')
    const eventDates = document.createElement('p')
    const eventPrices = document.createElement('p')
    const eventImages = document.createElement('img')
    
    eventH1.innerHTML = event.name
    eventDates.innerHTML = event.dates.start.localDate +" "+ event.dates.start.localTime
    eventPrices.innerHTML = '$' + event.priceRanges[0].min +'- $'+ event.priceRanges[0].max
    eventImages.src = event.images[0].url
    
    eventDiv.appendChild(eventH1)
    eventDiv.appendChild(eventImages)
    eventDiv.appendChild(eventDates)
    eventDiv.appendChild(eventPrices)
    
    eventDiv.classList.add("card", "blue-grey", "darken-1")
    div.appendChild(eventDiv)
    
  })
  
}