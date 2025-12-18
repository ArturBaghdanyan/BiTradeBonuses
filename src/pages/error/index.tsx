import Footer from "../../components/footer"
import Header from "../../components/header"
import illustration from "../../assets/illustration.svg";
import style from "./style.module.scss";

export const ErrorPage = () => {
	return (
		<div className={style.error}>
			<Header />
			<div className="pages_title">
				<p>404 Page</p>
			</div>
			<div className={`${style.error_container} container-spacing`}>
				<div className={style.error_container_content}>
					<div className={style.error_container_content_column}>
						<div className={style.error_container_content_column_img}>
							<img src={illustration} alt="illustration" draggable = "false" style={{userSelect:"none"}} />
						</div>
						<div className={style.error_container_content_column_piece}>
							<div className={style.error_container_content_column_piece_text}>
								<h3><b>ooops!</b> page not found</h3>
								<p>
									Oops! It looks like you're lost. The page you were 
									looking for couldn't be found. Don't worry, it 
									happens to the best of us.
								</p>
							</div>
							<div className={style.error_container_content_column_piece_button}>
								<button>Back to home</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<Footer />
		</div>
	)
}