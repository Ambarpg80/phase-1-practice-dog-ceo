//console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', ()=>{

/*----------------------------FETCHING DOG IMAGES --------------------------------------*/
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let ul = document.createElement('ul')   // creates a ul 

let div = document.getElementById('dog-image-container')



fetch ("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then((message)=>{
   // console.log(message) 
  for (const urlItem of message.message)  {   //iterate through object
        //  console.log(urlItem)           
         
       let li = document.createElement('li')    // creates an li 
        li.innerHTML = `<img src= "${urlItem}"></img> `  
       ul.append(li)                                       // add li to ul
        }                                   
        div.append(ul)                //  add ul to div
    })
  


 /*----------------------------------FETCHING DOG BREEDS-------------------------------------------*/
 
 let breeds = []
 
 function loadBreeds(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch (breedUrl)
 .then(response => response.json())
 .then ((message)=>{
   breeds=Object.keys(message.message)
   updateBreeds(breeds)
 })

 }
 function updateBreeds(breeds){
   const breedUl = document.getElementById("dog-breeds")
   breedUl.innerHTML= " "
   breeds.forEach(breed => addBreeds(breed))
 }  //function updateBreeds

 const breedUrl = 'https://dog.ceo/api/breeds/list/all'

 

   function addBreeds(breed){  
    
      const breedUl = document.getElementById("dog-breeds")
      let li = document.createElement('li')
      li.className = "breed-list" // adds class name for li's
      li.innerHTML = breed 
      breedUl.append(li) // add li to ul
       li.addEventListener('click', colorChange)
      } // function addBreeds
      /*----------------CHANGE FONT COLOR  WHEN LI IS CLICKED------------------*/   


      function colorChange(event){                                  
           event.target.style.color = "green";    // changes li color to green 
            } //  function colorChange


   /*---------------- FILTER WITH DROPDOWN------------------*/


    let  dropDown = document.getElementById('breed-dropdown') 
             
        
      function pickALetter(event){
        const shortList= breeds.filter((dogList)=>{ // filters dogList 
               return event.target.value === dogList.charAt(0)})  
               updateBreeds(shortList)   
              }     // function pickALetter         
    
              
    dropDown.addEventListener("change" , pickALetter)
       
    
        
      
   loadBreeds()
   
}) // DOMContentloaded