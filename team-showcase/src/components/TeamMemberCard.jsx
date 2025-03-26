import React from "react";

const TeamMemberCard = ({ name, jobTitle }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>{jobTitle}</p>
    </div>
  );
};

const styles = {
  card: { border: "3px solid rgba(0, 0, 0, 0.6)",
    borderRadius: "8px",
    margin: "10px",
    padding: "15px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.61)",
    width:"200px",
    textAlign: "center"
   },
};
export default TeamMemberCard;
