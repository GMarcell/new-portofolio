import {
	SiBootstrap,
	SiCplusplus,
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiLaravel,
	SiNextdotjs,
	SiNuxtdotjs,
	SiPython,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTypescript,
	SiVuedotjs,
} from "react-icons/si";

export const SolarSystem = () => {
	return (
		<section className="skill-test">
			<div className="container-solar-system-framework">
				<div className="sun">Framework</div>
				<div className="axis1">
					<div className="earth">
						<SiReact fontSize={72} />
					</div>
					<div className="earth-1">
						<SiNextdotjs fontSize={72} />
					</div>
					<div className="earth-2">
						<SiBootstrap fontSize={72} />
					</div>
					<div className="earth-3">
						<SiNuxtdotjs fontSize={72} />
					</div>
				</div>
				<div className="axis2">
					<div className="earth">
						<SiTailwindcss fontSize={72} />
					</div>
					<div className="earth-1">
						<SiLaravel fontSize={72} />
					</div>
					<div className="earth-2">
						<SiVuedotjs fontSize={72} />
					</div>
					<div className="earth-3">
						<SiSass fontSize={72} />
					</div>
				</div>
			</div>
			<div className="container-solar-system-code-language">
				<div className="sun-code">Language</div>
				<div className="axis1-code">
					<div className="earth">
						<SiJavascript fontSize={72} />
					</div>
					<div className="earth-1">
						<SiTypescript fontSize={72} />
					</div>
					<div className="earth-2">
						<SiHtml5 fontSize={72} />
					</div>
					<div className="earth-3">
						<SiCss3 fontSize={72} />
					</div>
				</div>
				<div className="axis2-code">
					<div className="earth">
						<SiCplusplus fontSize={72} />
					</div>
					<div className="earth-1">
						<SiPython fontSize={72} />
					</div>
				</div>
			</div>
		</section>
	);
};
