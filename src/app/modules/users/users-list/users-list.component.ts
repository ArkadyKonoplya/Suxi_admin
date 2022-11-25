import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { UserService } from 'src/app/core/services/user.service';
declare var $: any

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: any;
}


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {
  public dataTable: DataTable;
  currentdate: Date;
  role = new FormControl('');
  rolelist: string[] = ['Admin', 'Customer'];
  activeId!: string;
  isEdit: boolean = false;

  constructor(public spinnerService: SpinnerService, public userservice: UserService, public notificationService: NotificationService, private changeDetectorRef: ChangeDetectorRef) {
    this.currentdate = new Date();
    this.dataTable = {
      headerRow: ['Name', 'Email', 'Roles', 'Actions'],
      footerRow: ['Name', 'Email', 'Roles', 'Actions'],
      dataRows: []
    }
  }

  ngOnInit(): void {

  }

  async ngAfterViewInit() {
    await this.getUserDetails();
    $('#datatables').DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
      }

    });
    const table = $('#datatables').DataTable();
  }

  edit(id: string) {
    this.activeId = id;
    this.isEdit = true;
  }
  save(row: any) {
    this.activeId = row.id;
    this.upadteUser(row);
    this.isEdit = false;
  }
  close(id: string) {
    this.activeId = id;
    this.isEdit = false;
  }


  //get all User data
  public async getUserDetails() {
    this.spinnerService.show();
    await this.userservice.getUserDetails().then(res => {
      if (res) {
        this.dataTable.dataRows = res;
        this.spinnerService.hide();
        this.dataTable = {
          headerRow: ['Name', 'Email', 'Roles', 'Actions'],
          footerRow: ['Name', 'Email', 'Roles', 'Actions'],
          dataRows: res
        };
        this.changeDetectorRef.detectChanges();
      }
    })
  }

  //Update User data
  public upadteUser(user: any) {
    this.spinnerService.show();
    this.userservice.updateUser(user).subscribe(res => {
      if (res) {
        this.notificationService.showNotification('success', res.message);
        this.spinnerService.hide();
      }
    });
  }

}
