import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      Designed by <Link to="/aboutme"> Alisha Upton</Link>
    </div>
  );
}
