import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Button from './Button.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import MyComp from './MyComp.jsx'

function App() {
  return (
    <>
      <Header/>
      <MyComp></MyComp>
      <ColorPicker></ColorPicker>
      <Counter></Counter>
      <Food/>
      <Button></Button>
      <Footer/>
    </>
  )
}

export default App
