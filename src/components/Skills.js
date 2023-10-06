import colorSharp from "../assets/img/color-sharp.png";
import { ListItem, ListItemText, Typography, Box, Grid } from "@mui/material";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							{/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
							<br />
							<Typography variant="h4">Programming Language</Typography>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<Grid container spacing={1}>
										<Grid item xs={12} sm={4}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">Javascript</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={4}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">Typescript</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={4}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">HTML</Typography>
											</Box>
										</Grid>
									</Grid>
								</Grid>
								<Grid
									item
									xs={12}
									sx={{ marginLeft: "20px", marginRight: "20px" }}
								>
									<Grid container spacing={1}>
										<Grid item xs={12} sm={4}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">CSS</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={4}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">Python</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={4}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">C++</Typography>
											</Box>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<br />
							<Typography variant="h4">Framework</Typography>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<Grid container spacing={1}>
										<Grid item xs={12} sm={3}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">ReactJS</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={3}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">NextJS</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={3}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">NuxtJS</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={3}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">Bootstrap</Typography>
											</Box>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Grid container spacing={1} sx={{paddingX: '20px'}}>
										<Grid item xs={12} sm={3}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">Tailwind</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={3}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">SasS</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={3}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">Laravel</Typography>
											</Box>
										</Grid>
										<Grid item xs={12} sm={3}>
											<Box
												display="flex"
												justifyContent="center"
												sx={{
													background:
														"linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
												}}
											>
												<Typography variant="h6">Vue</Typography>
											</Box>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="Image" />
		</section>
	);
};
