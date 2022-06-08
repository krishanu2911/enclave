import React from "react";
import {
  User,
  Feed,
  Profile,
  Bookmark,
  Login,
  Signup,
  Explore,
  Error,
} from "../pages/index";
import { Route, Routes } from "react-router-dom";
function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/user/:userID" element={<User />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
export { RoutePath };
