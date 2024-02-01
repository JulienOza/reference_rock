import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./pages/ContactForm/ContactForm";

function App() {
  const [bandMembers, setBandMembers] = useState([]);

  useEffect(() => {
    async function fetchBandMembers() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/bandmembers`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBandMembers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchBandMembers();
  }, []);

  return (
    <>
      <nav className="navbar_container">
        <img
          className="navbar_logo"
          src="../src/assets/icons/logo_rr_light.svg"
          alt=""
          href="/"
        />
        <ul>
          <li>Lien 1</li>
          <li>Lien 2</li>
          <li>Lien 3</li>
        </ul>
      </nav>
      <main className="main_container">
        {bandMembers.map((bandMember) => (
          <article className="band_member_card" key={bandMember.id}>
            <img
              className="band_member_photo"
              src={bandMember.pict_url}
              alt="musicien en concert"
            />
            <p>Nom: {bandMember.name}</p>
            <p>Rôle: {bandMember.role}</p>
            <p>Bio: {bandMember.bio}</p>
            <p>Citation: {bandMember.quote}</p>
          </article>
        ))}
      </main>
      <ContactForm />
    </>
  );
}

export default App;
