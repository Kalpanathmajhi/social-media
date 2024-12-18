import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home/HomePage";
import FeedPage from "./page/Feed/Feed";
import SignInPage from "./page/SignIn/SignIn";
import { useUser } from "@clerk/clerk-react";
import CreatePost from "./page/createPost/CreatePost";
import UserProfile from "./page/Profile/UserProfile";
import EditProfile from "./page/Edit/EditProfile";
import "swiper/css";
import "swiper/css/pagination";
import CreateButton from "./components/CreateButton";

function App() {
  const { user } = useUser();
  return (
    <>
      <main className="flex w-full flex-1 h-inherit">
        <CreateButton />
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to={"/feed"} /> : <Home />}
          />

          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/edit/:id" element={<EditProfile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;