import { NewsCard } from "../../components/candidatCard/NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { candidats } from "../../data";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../app/services/public";
export default function ActualiteCandidat({ post }) {
    const data = Array(5).fill(0);
    const { id } = useParams();
    const [candidatPost, setCandidatPost] = useState([]);
    useEffect(() => {
        const getCandidatPost = async () => {
            const postCandidat = await getAllPosts();
            console.log(id);
            
            console.log(postCandidat.data);
            setCandidatPost(postCandidat.data.filter((p) => p.id_candidat == id));
            console.log(candidatPost);
            
        };
        getCandidatPost();
    },[]);
    return (
        <InfiniteScroll
            style={{
                paddingBottom: "5rem",
                paddingTop: "10rem",
            }}
            dataLength={candidatPost.length}
        >
            {candidatPost.map((item, index) => (
                <NewsCard post={item} key={index} />
            ))}
        </InfiniteScroll>
    );
}
