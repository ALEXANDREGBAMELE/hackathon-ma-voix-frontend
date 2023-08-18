import CandidatCard from "../components/candidatCard/CandidatCard";
import { candidats } from "../data";

export default function Candidats() {
    return (
        <div>
            <div className="listCandidat">
                {candidats.map((c) => <CandidatCard key={c.id} candidat={c} /> )}
           </div>
        </div>
    );
}
