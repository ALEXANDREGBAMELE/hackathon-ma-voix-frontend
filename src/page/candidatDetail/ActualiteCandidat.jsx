import { NewsCard } from "../../components/candidatCard/NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { candidats } from "../../data";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../app/publicApi/public";
export default function ActualiteCandidat({ post }) {
    const data = Array(5).fill(0);
    const { id } = useParams();
    const [candidatPost, setCandidatPost] = useState([]);
    useEffect(() => {
        const getCandidatPost = async () => {
            const candidatPosts = await getAllPosts();
            console.log(candidatPosts);
            setCandidatPost(candidatPosts.filter((p) => p.user_id == id));
        };
        getCandidatPost();
    },[]);
    return (
        <InfiniteScroll
            style={{
                paddingBottom: "5rem",
                paddingTop: "10rem",
            }}
            dataLength={data.length}
        >
            {candidatPost.map((item, index) => (
                <NewsCard post={item} key={index} />
            ))}
        </InfiniteScroll>
    );
}
