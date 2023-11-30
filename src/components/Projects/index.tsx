import { Container, Wrapper, Title, CardContainer} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants'


const Projects = ({setOpenModal}:any) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <CardContainer>
          {projects.map((project) => (
              <ProjectCard project={project} setOpenModal={setOpenModal}/>
            ))}
          
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects