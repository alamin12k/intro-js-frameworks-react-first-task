import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <>
      <div className="profileCards">
        <ProfileCard name="John" description="Hi, my name is john." image="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"/>
        <ProfileCard name="Michael" description="Hi, my name is michael." image="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" />
        <ProfileCard name="Katherine" description="Hi, my name is katherine." image="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg" />
      </div>
    </>
  )
}

export default App
