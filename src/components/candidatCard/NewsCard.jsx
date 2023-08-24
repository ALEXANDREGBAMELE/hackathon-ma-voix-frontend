import { EditOutlined, SendOutlined, LikeOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { curentUser, isLoggedIn,token } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { likedPosts } from "../../app/publicApi/public";
const { Meta } = Card;
export const NewsCard = ({ post }) => {
    const user = useSelector(isLoggedIn);
    const dispatch = useDispatch();
    const User = useSelector(curentUser);
    const tokenUser = useSelector(token);

    const handleLike =async () => {
        if (user) {
            const rest =await likedPosts(User.id,post.id,tokenUser);
            console.log(rest);
            return
            
        }
        alert("vous devez vous connecter pour aimer un post");
        

    };
    return (
        <Card
            style={{
                width: "40rem",
                marginBottom: "1.5rem",
                padding: "1rem",
            }}
            actions={[
                <p onClick={handleLike} >
                    <LikeOutlined /> Like
                </p>,
                <p>
                    <EditOutlined key="edit" /> commenter
                </p>,
                <p>
                    <SendOutlined /> Partager
                </p>,
            ]}
        >
            <Meta
                avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="bhhhhh"
                description="vghgh hhhg"
            />
            <img
                src={`https://lesinnovateurs.me/`}
                style={{
                    width: "100%",
                    height: "10rem",
                    margin: "1rem",
                    objectFit: "contain",
                }}
                alt="image du post"
            />
        </Card>
    );
};
