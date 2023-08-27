
import Collapse from "rc-collapse";
import { React, useEffect, useState } from "react";
import SondageSideBar from "../sideBar/SondageSideBar.jsx";
import ListeCommune from "../sideBar/ListeCommune.jsx";
import { Space, Table, Tag } from 'antd';
import {getAllElections} from "../../app/services/public.js";

export function ELections() {

  //api get all elections

    const [elections, setElections] = useState([]);
    const [loading, setLoading] = useState(false);
    const getElections = async () => {
        setLoading(true);
        const elections = await getAllElections();
        console.log(elections.data);
        setElections(elections.data);
        setLoading(false);
    }
    useEffect(() => {
        getElections();

    }, []);

}

export default ELections;