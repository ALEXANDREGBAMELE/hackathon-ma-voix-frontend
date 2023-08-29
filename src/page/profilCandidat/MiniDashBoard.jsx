import React, { useEffect, useState } from "react";
import { Card, Row, Col, Statistic, Button } from "antd";
import { UserOutlined, BarChartOutlined, CalendarOutlined, FileTextOutlined } from "@ant-design/icons";
import { getMyActivities, getMyMeets, getMyPosts, getMyProgrammes, getMyfollowers } from "../../app/services/candidat";
import "./style-candidat.css";
const Dashboard = () => {
  const [followers, setFollowers] = useState(0);
  const [programmes, setProgrammes] = useState(0);
  const [posts, setPosts] = useState(0);
  const [activity, setActivity] = useState(0);
  const [meetings, setMeetings] = useState(0);


  const logUser = JSON.parse(localStorage.getItem("logUser"));
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(logUser);
  console.log(token);

  useEffect(() => {

    
    try {
      const getFollowers = async () => {
        const response = await getMyfollowers();
        console.log(response);
        setFollowers(response.followers.length);
      };
      getFollowers().then(r => r);


      
    } catch (error) {
      console.error("Erreur lors de la récupération des followers :", error);
    }

    try{
      const getProgramme = async () => {
        const response = await getMyProgrammes();
        if (response.message && response.message === "Unauthenticated."){
          localStorage.clear();
        }
        setProgrammes(response.data.length);
      }
      getProgramme().then(r => r);
    }catch(error){
      console.error("Erreur lors de la récupération des programmes :", error);

    }

    try{
      const myPost = async () => {
        const response = await getMyPosts();
        console.log(response);
        if (response.message) {
          return;
        }
        setPosts(response.posts.length);
      }
      myPost().then(r => r);
    }catch(error){
      console.error("Erreur lors de la récupération des posts :", error);

    }

    try{
      const myActivity = async () => {
        const response = await getMyActivities();
        console.log(response);
        if (response.message) {
          return;
        }
        setActivity(response.data.length);
      }
      myActivity().then(r => r);
    }catch(error){
      console.error("Erreur lors de la récupération des activités :", error);

    }
     
    try{
      const getMeetings = async () => {
        const response = await getMyMeets();
        console.log(response);
        if (response.message) {
            return;
        }
        setMeetings(response.data.length);
      }
      getMeetings().then(r => r);
    }catch(error){
      console.error("Erreur lors de la récupération des meetings :", error);

    }

  }, []);



  return (
    <div className="candidat-dashboard">
      <Row gutter={16} className="candidat-dashboard-row">
        <Col span={8} className="candidat-dashboard-col">
          <Card className="candidat-dashboard-card">
            <Statistic
              title="Followers"
              value={followers}
              valueStyle={{ color: "#3f8600" }}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8} className="candidat-dashboard-col">
          <Card className="candidat-dashboard-card">
              <Statistic
                title="Programmes"
                value={programmes}
                valueStyle={{ color: "#3f8600" }}
                prefix={<BarChartOutlined />}
              />
          </Card>
        </Col>
        <Col span={8} className="candidat-dashboard-col">
          <Card className="candidat-dashboard-card">
            <Statistic
              title="Posts"
              value={posts}
              valueStyle={{ color: "#3f8600" }}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>

        <Col span={8} className="candidat-dashboard-col">
          <Card className="candidat-dashboard-card">
            <Statistic
              title="Activités"
              value={activity}
              valueStyle={{ color: "#3f8600" }}
              prefix={<CalendarOutlined />}
            />
          </Card>
        </Col>
        <Col span={8} className="candidat-dashboard-col">
          <Card className="candidat-dashboard-card">
            <Statistic
              title="Meetings"
              value={meetings}
              valueStyle={{ color: "#3f8600" }}
              prefix={<CalendarOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
