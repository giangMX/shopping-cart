import { Component, OnInit } from "@angular/core";
import {CdkDragDrop,moveItemInArray,transferArrayItem,} from "@angular/cdk/drag-drop";
import { Board } from "src/app/models/board.model";
import { Column } from "src/app/models/column.model";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from "src/app/confirm-box/confirm-box.component";;

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit {
  constructor(
    public dialog: MatDialog
  ) {}

  board: Board = new Board([
    new Column("Todo", [
      "Cong viec phai lam 1",
      "Cong viec phai lam 2",
      "Cong viec phai lam 3",
      "Cong viec phai lam 4",
    ]),
    new Column("Doing", ["Dang lam 1", "Dang lam 2", "Dang lam 3"]),
    new Column("Done", [
      "Hoan thanh 1",
      "Hoan thanh 2",
      "Hoan thanh 3",
      "Hoan thanh 4",
      "Hoan thanh 5",
    ]),
  ]);

  ngOnInit() {}

  confirmDialogDelete(name): void {
    const message = `Bạn chắc chắn  xóa không?`;
    const dialogData = new ConfirmDialogModel("Xác nhận lại", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      width:"500px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        this.board.columns.forEach(col => {
          if(col.name === name){
            this.board.columns.splice(this.board.columns.indexOf(col),1);
          }
        });
      }
    });
  }

  confirmDialogDelDetail(name,delItem): void {
    const message = `Bạn chắc chắn  xóa công việc này không?`;
    const dialogData = new ConfirmDialogModel("Xác nhận lại", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      width:"500px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        this.board.columns.forEach(col => {
          if(col.name === name){
            col.tasks.forEach(element => {
              if(element === delItem){
                col.tasks.splice(col.tasks.indexOf(element),1);
                col.updateCount();
              }
            });
          }
        });
      }
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addJob(event,name,showField){
    if(event.target.value ===""){
      showField.hidden = false;
      return;
    }
    this.board.columns.forEach(col => {
      if(col.name === name){
        col.tasks.push(event.target.value);
        col.updateCount();
        showField.hidden = true;
      }
    });
    event.target.value = "";
  }

  addColumn(event,newlist){
    this.board.columns.push(new Column(newlist.value,[]));
    newlist.value = "";
  }

  // delete(name){
  //   if(confirmDialog){
  //     this.board.columns.forEach(col => {
  //       if(col.name === name){
  //         this.board.columns.splice(this.board.columns.indexOf(col),1);
  //       }
  //     });
  //   }
  // }
}
