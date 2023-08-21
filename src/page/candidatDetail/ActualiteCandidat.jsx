import { NewsCard } from "../../components/candidatCard/NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { candidats } from "../../data";
import { useEffect, useState } from "react";
export default function ActualiteCandidat({post}) {
    const data = Array(5).fill(0);
    const { id } = useParams();
    const [candidatPost, setCandidatPost] = useState([])
    useEffect(() => {
        const getCandidats = async () => {
            const candidat =  candidats.find((c) => c.id == id);
            setCandidatPost(candidat.post);
        }
        getCandidats();
    })
    return (
        <InfiniteScroll
            style={{
                paddingBottom: "5rem",
            }}
            dataLength={data.length}
        >
            {candidatPost.map((item, index) => (
                <NewsCard post ={item} key={index} />
            ))}
        </InfiniteScroll>
    );
}
