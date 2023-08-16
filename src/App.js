import {useState, useEffect} from 'react'
import './App.css'
let phrases = ['Hello', 'Hello', 'Goodbye', 'Goodbye', 'Apple', 'Apple', 'Red', 'Red']
let random = phrases[Math.floor(Math.random() * phrases.length)]
phrases.splice(phrases.indexOf(random), 1)
let random2 = phrases[Math.floor(Math.random() * phrases.length)]
phrases.splice(phrases.indexOf(random2), 1)
let random3 = phrases[Math.floor(Math.random() * phrases.length)]
phrases.splice(phrases.indexOf(random3), 1)
let random4 = phrases[Math.floor(Math.random() * phrases.length)]
phrases.splice(phrases.indexOf(random4), 1)
let random5 = phrases[Math.floor(Math.random() * phrases.length)]
phrases.splice(phrases.indexOf(random5), 1)
let random6 = phrases[Math.floor(Math.random() * phrases.length)]
phrases.splice(phrases.indexOf(random6), 1)
let random7 = phrases[Math.floor(Math.random() * phrases.length)]
phrases.splice(phrases.indexOf(random7), 1)
let random8 = phrases[Math.floor(Math.random() * phrases.length)]
phrases.splice(phrases.indexOf(random8), 1)
let cardsOpen = 0
function App() {
  let[card1, setCard1] = useState(null)
  let[card2, setCard2] = useState(null)
  let[card3, setCard3] = useState(null)
  let[card4, setCard4] = useState(null)
  let[card5, setCard5] = useState(null)
  let[card6, setCard6] = useState(null)
  let[card7, setCard7] = useState(null)
  let[card8, setCard8] = useState(null)
  let[hide,setHide] = useState(true)
  let[hide2,setHide2] = useState(true)
  let[class1,setClass1] = useState('cards')
  let[class2,setClass2] = useState('cards')
  let[class3,setClass3] = useState('cards')
  let[class4,setClass4] = useState('cards')
  let[class5,setClass5] = useState('cards')
  let[class6,setClass6] = useState('cards')
  let[class7,setClass7] = useState('cards')
  let[class8,setClass8] = useState('cards')
  let [activeCards, setActiveCards] = useState([])

  function click1() {
    if (card1 === null && cardsOpen < 2) {
      setCard1(random)
      cardsOpen += 1
    }
    if (card1 !== null) {
      setCard1(null)
      cardsOpen -= 1
    }
    console.log(cardsOpen)
    //check()
  }

  function click2() {
    if (card2 === null && cardsOpen < 2) {
      setCard2(random2)
      cardsOpen += 1
    }
    if (card2 !== null) {
      setCard2(null)
      cardsOpen -= 1
    } 
    //check()
  }

  function click3() {
    if (card3 === null && cardsOpen < 2) {
      setCard3(random3)
      cardsOpen += 1
    }
    if (card3 !== null) {
      setCard3(null)
      cardsOpen -= 1
    } 
  }

  function click4() {
    if (card4 === null && cardsOpen < 2) {
      setCard4(random4)
      cardsOpen += 1
    }
    if (card4 !== null) {
      setCard4(null)
      cardsOpen -= 1
    } 
  }

  function click5() {
    if (card5 === null && cardsOpen < 2) {
      setCard5(random5)
      cardsOpen += 1
    }
    if (card5 !== null) {
      setCard5(null)
      cardsOpen -= 1
    } 
  }

  function click6() {
    if (card6 === null && cardsOpen < 2) {
      setCard6(random6)
      cardsOpen += 1
    }
    if (card6 !== null) {
      setCard6(null)
      cardsOpen -= 1
    } 
  }

  function click7() {
    if (card7 === null && cardsOpen < 2) {
      setCard7(random7)
      cardsOpen += 1
    }
    if (card7 !== null) {
      setCard7(null)
      cardsOpen -= 1
    } 
  }

  function click8() {
    if (card8 === null && cardsOpen < 2) {
      setCard8(random8)
      cardsOpen += 1
    }
    if (card8 !== null) {
      setCard8(null)
      cardsOpen -= 1
    }
  }
  function check() {
    
    if (cardsOpen === 2) {
      console.log('re rendering')
      // make a linear search algorithim to find matches (might need nested for loop too)  | ask edgar about eval because some say its harmful
      let listOfCards = [card1,card2,card3,card4,card5,card6,card7,card8]
      let value1 = null
      let value2 = null
      let value1Name = null
      let value2Name = null
      let tempObj = null
      for (let i=0; i < listOfCards.length; i++) {
        if (eval('card' + (i + 1).toString()) !== null && value1 == null) {
          tempObj = listOfCards[i]
          value1 = eval('card' + (i + 1).toString())
          value1Name = 'card' + (i + 1).toString()
          console.log('This is value 1: ', value1)
        
          
        }
      }
      
      for (let i=0; i < listOfCards.length; i++) {
        if (eval('card' + (i + 1).toString()) !== null && value2 == null && value1Name !== ('card' + (i + 1).toString())) {
          value2 = eval('card' + (i + 1).toString())
          value2Name = 'card' + (i + 1).toString()
          console.log('This is value2: ', value2)
       
        }
      }
    
    if (value1 !== null && value2 !== null) {
      if (value1 === value2) {
        console.log('Running timer')
        setHide(false)
        const timer = setTimeout(() => {
          cardsOpen -= 2
          console.log('f')
          eval('set' + value1Name.replace('card', 'Class'))('gone')
          eval('set' + value2Name.replace('card', 'Class'))('gone')
          //('set', value1Name)
          // listOfCards.forEach((card) => {
          //   if(tempval1 == null && card !== null){
          //     card = ''
          //   }

          //   if(tempval2 == null && card !== null){
          //     card = ''
          //   }
          // })
        
          
          setHide(true)

        }, 3000);
        return () => clearTimeout(timer);
      }
      else{
        setHide2(false)
        const timer = setTimeout(() => {
          setHide2(true)
          eval('set' + value1Name.replace('c', 'C'))(null)
          eval('set' + value2Name.replace('c', 'C'))(null)
          cardsOpen -= 2
          console.log(cardsOpen)
          console.log('e')
        }, 3000)
        return () => clearTimeout(timer);
      }
    }
    }
  }

  useEffect(() => {
    //console.log('re rendering')
    check()   
  })

 
  return (
   <div>
      <button className={class1} style={{position: 'absolute', left: '10px', top: '10px'}} onClick={click1}>{card1}</button>
      <button className={class2} style={{position: 'absolute', left: '170px', top: '10px'}} onClick={click2}>{card2}</button>
      <button className={class3} style={{position: 'absolute', left: '330px', top: '10px'}} onClick={click3}>{card3}</button>
      <button className={class4} style={{position: 'absolute', left: '490px', top: '10px'}} onClick={click4}>{card4}</button>
      <button className={class5} style={{position: 'absolute', left: '10px', top: '270px'}} onClick={click5}>{card5}</button>
      <button className={class6} style={{position: 'absolute', left: '170px', top: '270px'}} onClick={click6}>{card6}</button>
      <button className={class7} style={{position: 'absolute', left: '330px', top: '270px'}} onClick={click7}>{card7}</button>
      <button className={class8} style={{position: 'absolute', left: '490px', top: '270px'}} onClick={click8}>{card8}</button>
      <p hidden={hide} className='correct'>You found a match!</p>
      <p hidden={hide2} className='wrong'>Incorrect these dont match!</p>
   </div>
  );
}

export default App;
