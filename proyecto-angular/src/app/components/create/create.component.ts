import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [
    ProjectService,
    UploadService
  ]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public saveProject;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '', 0, '', '');
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project) {
          // Subir imagen
          if(this.filesToUpload) {
            this._uploadService.makeFileRequest(Global.url + '/upload-image/' + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.status = 'success';
                console.log(result);
                this.saveProject = result.project;
                form.reset();
              })
              .catch((error) =>{
                console.log(error);
                this.status = 'failed';
              });
          }
          else {
            this.status = 'success';
            this.saveProject = response.project;
            form.reset();
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
