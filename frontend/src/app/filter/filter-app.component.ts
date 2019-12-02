import {Component, OnInit} from "@angular/core";
import {ActiveFilter} from "./filter1.component";


@Component({
  selector: 'app-root',
  templateUrl: './appFilter.component.html',
})
export class FAppComponent implements OnInit{
  /*resources: Filter[] = [
    {
      id: "all",
      title: "All",
      active: true,
    },
    {
      id: "article",
      title: "Article",
    },
    {
      id: "video",
      title: "Video",
    },
    {
      id: "course",
      title: "Course",
    },
  ]
  levels: Filter[] = [
    {
      id: "beginner",
      title: "Beginner",
      active: true,
    },
    {
      id: "intermediate",
      title: "Intermediate",
    },
    {
      id: "advanced",
      title: "Advanced",
    },
  ]*/

  optionReceived(option:ActiveFilter){
    console.log('Consulting: ' + option.group + '--' +option.active);
  }

  ngOnInit(): void {
  }

}
