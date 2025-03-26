import React from "react"
import TeamMemberCard from "./components/TeamMemberCard"
function App() {
  return (
    <div style={{display: "flex", justifyContent: "center",marginTop: "250px",gap: "25px"}}>
    <TeamMemberCard name="Jesse" jobTitle="Full Stack Dev"/>
    <TeamMemberCard name="Ryan" jobTitle="Full Stack Dev"/>
    <TeamMemberCard name="Chris" jobTitle="Full Stack Dev"/>
    </div>
  )
}

export default App
