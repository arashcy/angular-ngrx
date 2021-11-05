import { Project } from './../../projects/project.model';
import { ProjectActions, ProjectsActionTypes } from './projects.actions';


const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: null
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: null
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: null
  }
];

const createProject = (projects, project) => [...projects, project];
const updateProject = (projects, project) => projects.map(p => {
  return p.id === project.id ? Object.assign({}, project) : p;
});
const deleteProject = (projects, project) => projects.filter(w => project.id !== w.id);

// Define shape of state
export interface ProjectsState {
  projects: Project[];
  selectedProjectId: string | null | Project
}
// Define initial state
export const initialState: ProjectsState = {
  projects: initialProjects,
  selectedProjectId: null
}

// Simple reducer 
export function reducer (state = initialState, action: ProjectActions): ProjectsState {
  switch(action.type){
    case ProjectsActionTypes.ProjectQuery:
      return {
        selectedProjectId: action.payload,
        projects: state.projects
      }
    case ProjectsActionTypes.AddProject:
      return {
        selectedProjectId: state.selectedProjectId,
        projects: createProject(state.projects, action.payload)
      }
    case ProjectsActionTypes.UpdateProject:
      return {
        selectedProjectId: state.selectedProjectId,
        projects: updateProject(state.projects, action.payload)
      }
    case ProjectsActionTypes.DeleteProject:
      return {
        selectedProjectId: state.selectedProjectId,
        projects: deleteProject(state.projects, action.payload)
      }
    default: 
      return state;
  }
}