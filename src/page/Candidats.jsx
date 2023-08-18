import CandidatCard from "../components/candidatCard/CandidatCard";
import { candidats } from "../data";
import { Pagination } from "antd";
import { Card, List } from "antd";

export default function Candidats() {
    return (
        <div>
            <List
                pagination={{
                    position: "bottom",
                    pageSize: 5,
                    align: "center",
                }}
                style={{ display: "flex",flexDirection:"column",height:"calc(100vh - 11rem)",padding:"1rem" }}
                grid={{ gutter: 8, xs: 1, sm: 2, md: 3 }}
                dataSource={candidats}
                renderItem={(item) => (
                    <List.Item>
                        <CandidatCard candidat={item} />
                    </List.Item>
                )}
            />
        </div>
    );
}
