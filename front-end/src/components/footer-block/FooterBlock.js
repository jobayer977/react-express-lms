import React from "react";
import "./footer-block.styles.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const FooterBlock = () => {
	return (
		<div className="footer-block">
			<div className="container">
				<div className="footer-content">
					<div className="row">
						<div className="col-md-4">
							<div className="footer-logo">
								<img src={logo} alt="" />
							</div>
						</div>
						<div className="col-md-4">
							<ul>
								<li>
									<Link to="/">
										<i className="fa fa-map"></i>Dhaka Bangladesh
									</Link>
								</li>
								<li>
									<Link to="/">
										<i className="fa fa-phone"></i>01973753854
									</Link>
								</li>
								<li>
									<Link to="/">
										<i className="fa fa-phone"></i>oneness@gmail.com
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-4">
							<h2>About the company</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Reprehenderit blanditiis reiciendis perferendis iste excepturi
								consectetur similique unde sed ea corrupti.
							</p>
							<div className="social-link">
								<ul>
									<li>
										<Link to="/">
											<i className="fa fa-facebook"></i>
										</Link>
									</li>
									<li>
										<Link to="/">
											<i className="fa fa-twitter"></i>
										</Link>
									</li>
									<li>
										<Link to="/">
											<i className="fa fa-github"></i>
										</Link>
									</li>
									<li>
										<Link to="/">
											<i className="fa fa-google-plus"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterBlock;
