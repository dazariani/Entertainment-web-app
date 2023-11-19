import { HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { dataObject } from "../../data";
import { dataProps } from "../../data-type";
import useWindowWidth from "../../useWindowWidth";
import { userDataList } from "../../user-data";
import { userDataType } from "../../user-data";
import MainApp from "../main-app/MainApp";

import LoginPage from "../loginPage/LoginPage";
import SignupPage from "../signupPage/SignupPage";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { ThemeProps } from "./app-types";

const defaultTheme: ThemeProps = {
  red: "rgb(252, 71, 71)",
  black: "rgb(16, 20, 30)",
  grey: "rgb(90, 105, 143)",
  darkBlue: "rgb(22, 29, 47)",
  white: "rgb(255, 255, 255)",
};

// Get tv shows data from localStorage
const setLocalStorageDataList = () => {
  let localList = localStorage.getItem("dataList");
  if (localList) {
    let newLocalList: dataProps[] = JSON.parse(localList);
    return newLocalList;
  } else {
    return [dataObject];
  }
};

// Get users list data from localStorage
const setLocalStorageUserList = () => {
  let localList = localStorage.getItem("userList");
  if (localList) {
    let newLocalList: userDataType = JSON.parse(localList);
    return newLocalList;
  } else {
    return userDataList;
  }
};

function App() {
  const [currentDataIndex, setCurrentDataIndex] = useState<number>(
    setLocalStorageUserList()[0] ? setLocalStorageUserList()[0].index : 0
    // 0
  );

  const [dataList, setDataList] = useState<dataProps[]>(
    setLocalStorageDataList()
    // []
  );
  const [userData, setUserData] = useState<userDataType>(
    setLocalStorageUserList()
    // userDataList
  );

  const [data, setData] = useState<dataProps | null>(
    setLocalStorageDataList()[userData[0].index]
    // dataObject
  );

  const [inputValue, setInputValue] = useState<string>("");
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [resultCount, setResultCount] = useState<number>(0);
  const [tabNum, setTabNum] = useState<number>(0);

  const width = useWindowWidth();

  // Set new user to localStorage
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userData));
  }, [userData]);

  // Set data list to localStorage
  useEffect(() => {
    localStorage.setItem("dataList", JSON.stringify(dataList));
  }, [dataList]);

  // Set current account data changes to datalist (bookmarks)
  useEffect(() => {
    if (data) {
      let newDataList = [...dataList];
      newDataList[currentDataIndex] = data;
      setDataList(newDataList);
    }
  }, [data]);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HelmetProvider>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </HelmetProvider>
        <Container>
          {data ? (
            <MainApp
              userData={userData}
              setUserData={setUserData}
              tabNum={tabNum}
              setTabNum={setTabNum}
              inputValue={inputValue}
              setInputValue={setInputValue}
              scrollValue={scrollValue}
              setScrollValue={setScrollValue}
              data={data}
              setData={setData}
              width={width}
              resultCount={resultCount}
              setResultCount={setResultCount}
            />
          ) : (
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <LoginPage
                      dataList={dataList}
                      userData={userData}
                      setUserData={setUserData}
                      setCurrentDataIndex={setCurrentDataIndex}
                      setData={setData}
                    />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <SignupPage
                      userData={userData}
                      setUserData={setUserData}
                      dataList={dataList}
                      setDataList={setDataList}
                      currentDataIndex={currentDataIndex}
                    />
                  }
                />
              </Routes>
            </BrowserRouter>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    width: 100%;
    flex-direction: row;
  }
`;
