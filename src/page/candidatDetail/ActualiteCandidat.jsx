import { NewsCard } from "../../components/candidatCard/NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ActualiteCandidat() {
    const data = Array(5).fill(0);
    return (
        <InfiniteScroll style={{
            paddingBottom:"5rem"
        }} dataLength={data.length}>
            {data.map((item, index) => (
                <NewsCard key={index} />
            ))}
        </InfiniteScroll>
    );
}
