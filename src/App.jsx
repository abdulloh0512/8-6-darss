import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Music from "./pages/Music";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import { getToken } from "./components/Utiles";
import { useDispatch } from "react-redux";
import { create } from "./redux/musicSlice";
import styled from "@emotion/styled";

function App() {
  const SiteMain = styled.div`
    height: 100vh;
  `;
  const dispatch = useDispatch();
  useEffect(() => {
    getToken()
      .then((res) => {
        dispatch(create(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <SiteMain>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home></Home>
              </Layout>
            }
          ></Route>
          <Route
            path="/likes"
            element={
              <Layout>
                <Likes></Likes>
              </Layout>
            }
          ></Route>
          <Route
            path="/playlist/:id"
            element={
              <Layout>
                <Music></Music>
              </Layout>
            }
          ></Route>
        </Routes>
      </SiteMain>
    </>
  );
}

export default App;
