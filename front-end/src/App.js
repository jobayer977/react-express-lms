import React, { Fragment, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { store } from "./redux/store";
import HomePage from "./pages/home-page/HomePage";
import HeaderBlock from "./components/header-block/HeaderBlock";
import FooterBlock from "./components/footer-block/FooterBlock";
import CourseDetailPage from "./pages/course-detail-page/CourseDetailPage";
import AuthPage from "./pages/auth-page/AuthPage";
import CourseLessonPage from "./pages/course-lesson-page/CourseLessonPage";
import HeroSection from "./components/hero-section/HeroSection";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import ModuleActionPage from "./pages/module-actions-page/ModuleActionPage";
import LessonActionPage from "./pages/lesson-action-page/LessonActionPage";
import UpdateLessonTeacherNotePage from "./pages/update-lesson-techers-note/UpdateLessonTeacherNotePage";

//Auth Utils
import setAuthToken from "./util/setAuthToken";
import { loadUser } from "./redux/auth/auth.actions";
import { getAllCourse } from "./redux/course/course.actions";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
function App({ authState: { isAuthenticated } }) {
	useEffect(() => {
		store.dispatch(loadUser());
		store.dispatch(getAllCourse());
	}, [loadUser, getAllCourse]);
	return (
		<Fragment>
			<HeaderBlock />
			<HeroSection />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/course-detail" component={CourseDetailPage} />
				<Route
					path="/auth"
					render={() => (isAuthenticated ? <Redirect to="/" /> : <AuthPage />)}
				/>
				<Route path="/lesson" component={CourseLessonPage} />
				<Route path="/dashboard" component={DashboardPage} />
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

const mapStateToProps = (state) => ({
	authState: state.auth,
});

export default connect(mapStateToProps)(App);
