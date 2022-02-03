import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Mustafa Can",
					description:
						"JUNİOR FULL STACK DEVELOPER. I am a self-taught developer with a passion for learning and building things. I am currently working on my portfolio and learning new technologies.",
					image: "https://i1.sndcdn.com/artworks-SqPLYJO0MWdRlxIz-EnTThQ-t500x500.jpg",
					url: "",
					keywords: [
						"mustafa can",
						"mustafa",
						"mustafacan",
						"Portfolio",
						"mustafa Portfolio ",
						"mustafa can Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"reactjs ",
						"contextapi",
						"redux",
					
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Feedbacks />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
