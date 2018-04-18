import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../../service/student/file-upload.service';
import { FileUpload } from '../../../../service/student/fileupload';

@Component({
  selector: 'app-company-approval',
  templateUrl: './company-approval.component.html',
  styleUrls: ['./company-approval.component.css']
})
export class CompanyApprovalComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}

  constructor(private uploadService: FileUploadService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
 
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }
}
