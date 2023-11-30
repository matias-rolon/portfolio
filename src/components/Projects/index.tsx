import { Container, Wrapper, Title, CardContainer} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants'


const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Proyectos</Title>
        <CardContainer>
          {projects.map((project) => (
              <ProjectCard project={project}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects