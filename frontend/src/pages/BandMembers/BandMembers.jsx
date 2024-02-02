import { useEffect, useState } from "react";
import "./BandMembers.css";
import Navbar from "../../components/Navbar/Navbar";

function BandMembers() {
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
      <Navbar />
      <main className="band_member_card_container">
        {bandMembers.map((bandMember) => (
          <article className="band_member_card" key={bandMember.id}>
            <img
              className="band_member_photo"
              src={bandMember.pict_url}
              alt="musicien en concert"
              draggable="false"
            />
            <div className="band_member_text">
              <p>{bandMember.name}</p>
              <p>{bandMember.role}</p>
              <p>Bio: {bandMember.bio}</p>
              <p>Citation: {bandMember.quote}</p>
            </div>
          </article>
        ))}
      </main>
    </>
  );
}

export default BandMembers;
