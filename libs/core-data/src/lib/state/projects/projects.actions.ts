import { Action } from "@ngrx/store";
import { Project } from "@workshop/core-data";

export enum ProjectsActionTypes { 
    ProjectQuery = '[Projects] Queried',
    AddProject = '[Projects] Add Project',
    UpdateProject = '[Projects] Update Project',
    DeleteProject = '[Projects] Delete Project'
}

export class ProjectQuery implements Action {
    readonly type = ProjectsActionTypes.ProjectQuery;
    constructor(public payload: Project) {

    }
}

export class AddProject implements Action {
    readonly type = ProjectsActionTypes.AddProject;
    constructor(public payload: Project) {

    }
}

export class UpdateProject implements Action {
    readonly type = ProjectsActionTypes.UpdateProject;
    constructor(public payload: Project) {

    }
}

export class DeleteProject implements Action {
    readonly type = ProjectsActionTypes.DeleteProject;
    constructor(public payload: Project) {

    }
}

export type ProjectActions = AddProject | ProjectQuery | DeleteProject | UpdateProject