import { Sidebar } from "../../../components/Sidebar/Sidebar";

import { Layout } from "antd";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Layout>
        <Sidebar />
      </Layout>
    </div>
  );
};
