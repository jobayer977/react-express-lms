import React from "react";
import "./lesson-video-block.styles.css";
import CustomButton from "../custom-button/CustomButton";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { activeStatusUpdate } from "../../redux/profile/profile.actons";

const LessonVideoBlock = ({ course, activeLesson, activeStatusUpdate }) => {
	const { courseId } = useParams();
	return (
		activeLesson && (
			<div className="lesson-video-block">
				<div className="video-meta-action">
					<h4>
						{activeLesson.lessonNo} {activeLesson.lessonTitle}
					</h4>

					<CustomButton
						onClick={(e) =>
							activeStatusUpdate(
								courseId,
								activeLesson.moduleId,
								activeLesson._id
							)
						}>
						Complected
					</CustomButton>
				</div>
				<div className="video-preview">
					<iframe
						title="wrfsd"
						key="132"
						width="983"
						height="553"
						src={activeLesson.video}
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
				</div>
				{/* <div className="video-controller">
				<CustomButton>Prev unit</CustomButton>
				<CustomButton>Next unit</CustomButton>
			</div> */}
			</div>
		)
	);
};

const mapStateToProps = (state) => ({
	activeLesson: state.profile.activeLesson,
});

export default connect(mapStateToProps, { activeStatusUpdate })(
	LessonVideoBlock
);
