import React, { Fragment, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import { Switch, Route } from "react-router-dom";
import HeaderBlock from "./components/header-block/HeaderBlock";
import FooterBlock from "./components/footer-block/FooterBlock";
import CourseDetailPage from "./pages/course-detail-page/CourseDetailPage";
import AuthPage from "./pages/auth-page/AuthPage";
import CourseLessonPage from "./pages/course-lesson-page/CourseLessonPage";
import HeroSection from "./components/hero-section/HeroSection";
import { auth, createProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { getUserData } from "./redux/user/user.actions";
import StudentDashboard from "./pages/student-dashboard/StudentDashboardPage";
import AdminDashboardPage from "./pages/admin-dashboard/AdminDashboardPage";
import ModuleActionPage from "./pages/module-actions-page/ModuleActionPage";
import LessonActionPage from "./pages/lesson-action-page/LessonActionPage";
import UpdateLessonTeacherNotePage from "./pages/update-lesson-techers-note/UpdateLessonTeacherNotePage";

function App({ getUserData }) {
	useEffect(() => {
		auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					getUserData({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
		});
	}, [getUserData]);

	return (
		<Fragment>
			<HeaderBlock />
			<HeroSection />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/course-detail" component={CourseDetailPage} />
				<Route path="/auth" component={AuthPage} />
				<Route path="/lesson" component={CourseLessonPage} />
				<Route path="/student-dashboard" component={StudentDashboard} />
				<Route path="/admin-dashboard" component={AdminDashboardPage} />
				<Route path="/course-module-action" component={ModuleActionPage} />
				<Route path="/course-lesson-action" component={LessonActionPage} />
				<Route
					path="/course-lesson-note-update"
					component={UpdateLessonTeacherNotePage}
				/>
			</Switch>
			<FooterBlock />
		</Fragment>
	);
}

export default connect(null, { getUserData })(App);
