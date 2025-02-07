import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { UploadService } from "../../services/upload.service";
import { Global } from "../../services/global";
import { Project } from "../../models/project";
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [
    ProjectService,
    UploadService
  ]
})
export class EditComponent implements OnInit {

  public url: string;
  public title: string;
  public project: Project;
  public saveProject;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router : Router,
    private _route : ActivatedRoute
  ) {
    this.title = 'Editar proyecto';
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getProject(id);
    });
  }

  getProject(id) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form) {
    console.log(this.project);
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if (response.project) {
          // Subir imagen
          if(this.filesToUpload) {
            this._uploadService.makeFileRequest(this.url + '/upload-image/' + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.status = 'success';
                console.log(result);
                this.saveProject = result.project;
              })
              .catch((error) =>{
                console.log(error);
                this.status = 'failed';
              });
          }
          else {
            this.status = 'success';
            this.saveProject = response.project;
          }
        }
        else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }
}
