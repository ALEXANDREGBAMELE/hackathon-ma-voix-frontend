/* eslint-disable no-unused-vars */
import {
  EditOutlined,
  SendOutlined,
  LikeOutlined,
  Loading3QuartersOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import { Breadcrumb, Layout, Menu, theme, Input, Button, Space } from "antd";

import { useEffect, useState } from "react";
import { getMyPosts } from "../../app/services/candidat";
import CandidatAllPosts from "./CandidatAllPosts";
const { Content } = Layout;
export default function PostCandidat() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

 

  useEffect(() => {
    const getPost = async () => {
      const getuser = JSON.parse(localStorage.getItem("logUser"));

      setLoading(true);
      const post = await getMyPosts();
      console.log(post);
      if (post.message) {
        setPost([]);
        setLoading(false);
        return;
      }

      setPost(post.posts);
      setLoading(false);
    };
    getPost();
    console.log(post);

    
  }, []);

  return (
    <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              overflow: "auto",
              minHeightheight: "calc(100vh - 11rem)",
              paddingBottom: "4rem",
            }}
          >
            {loading && (
              <Loading3QuartersOutlined
                start={0}
                end={100}
                style={{
                  fontSize: "5rem",
                  color: theme.primary,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100vw",
                  height: "100vh",
                  alignContent: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Chargement en cours...
              </Loading3QuartersOutlined>
            )}
            {post?.map((item, index) => {
              return <CandidatAllPosts post={item} key={index} />;
            })}
          </div>
        </Content>
    </Layout>
  );
}
