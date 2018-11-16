import { Component, OnInit } from "@angular/core";
import { FetchdataService } from "../fetchdata.service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
  providers: [FetchdataService]
})
export class ProductCardComponent implements OnInit {
  posts = [""];
  title = "Angular HttpClient";

  Url = "https://hapi-practice-uodxjalzjs.now.sh/shows";
  Url1 = "https://jsonplaceholder.typicode.com/posts";

  // inject FetchdataService service
  constructor(private srv: FetchdataService) {}

  getPosts(): any {
    this.srv
      .getData(this.Url)
      .subscribe(data => this.posts.push(...data),
       error => console.log(error));
  }

  ngOnInit() {
    this.getPosts();
  }
}
