import { Component, OnInit } from '@angular/core';
import { ListformationsService } from 'src/app/service/listformation.service';


@Component({
  selector: 'app-listformations',
  templateUrl: './listformations.component.html',
  styleUrls: ['./listformations.component.css'],
})
export class ListformationsComponent implements OnInit {
  listformation: any;
  p: number = 1;
  term: any;

  constructor(private listformationtservice: ListformationsService) {}
  

  ngOnInit(): void {
    this.allformation();
  }
  allformation() {
    this.listformationtservice.getFormation().subscribe((res: any) => {
      this.listformation = res['data'];
      console.log('list formation', this.listformation);
    });
  }
}
