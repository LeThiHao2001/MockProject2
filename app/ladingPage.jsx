import React from "react";
import Banner from "./components/Banner/Banner";
import Companies from "./components/Companies/Companies";
// import Tabs from './components/Courses/Courses';
import Mentor from "./components/Mentor/Mentor";
import Students from "./components/Students/Students";
import Newsletter from "./components/Newsletter/Newsletter";
import Course2 from "./components/Courses/Course2";
import Mentor2 from "./components/Mentor/Mentor2";
export default function LadingPage() {
  return (
    <main>
      {/* <Navbar /> */}
      <Banner />
      <Companies />
      {/* <Tabs /> */}
      <Course2 />
      {/* <Mentor /> */}
      <Mentor2 />
      <Students />
      <Newsletter />
      {/* <Footer /> */}
    </main>
  );
}
