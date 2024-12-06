import UserCard from "./components/UserCard"
import "./App.css"
import johnp from "./assets/John.png"
import bmp from "./assets/bm.png"
import cp from "./assets/c.png"
function App() {
  return (
    <div className="container">
      <UserCard name="John Wick" desc="John Desc" image={johnp} style={{"borderRadius":"10px"}} x/>
      <UserCard name="Batman" desc="Bat Desc" image={bmp} style={{"borderRadius":"40px"}}/>
      <UserCard name="Charles" desc="Charlie Desc" image={cp} style={{"borderRadius":"70px"}}/>
    </div>
  )
}

export default App
