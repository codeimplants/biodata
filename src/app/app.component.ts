import { Component } from '@angular/core';
import { RootService } from './root.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biodata';

  constructor(private root: RootService) { }

  ngOnInit(): void {
    this.root.getList().subscribe((result) => {
      console.log("Data", result)
    })
  }
}
