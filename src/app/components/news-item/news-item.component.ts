import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'penoc-sdk/models/news.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsService } from 'penoc-sdk/services/news.service';

@Component({
    moduleId: module.id,
    selector: 'penoc-admin-news-item',
    templateUrl: './news-item.component.html',
    styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
    public newsItem: NewsModel;

    public constructor(private newsService: NewsService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.loadNewsItem();
    }

public loadNewsItem() {
this.route.params.forEach((params: Params) => {
            let id = + params['id'];
            if (id > 0) {
                this.newsService.getNewsItems(id).subscribe((newsData) => {
                    this.newsItem = newsData.json()[0];
                    this.newsItem.date = new Date(this.newsItem.date).toISOString().substring(0, 10);
                });
            } else {
                this.newsItem = new NewsModel();
            }

        })
}
    public backClicked() {
        this.router.navigate(['/news'])
    }

    public cancelClicked() {
        this.loadNewsItem();
    }

    public saveClicked() {
        if (this.newsItem.id > 0) {
            this.saveNewsItem();
        } else {
            this.createNewsItem();
        }
    }

    public saveNewsItem(): void {
        this.newsService.putNewsItem(this.newsItem)
            .subscribe(() => { this.loadNewsItem() })
    }
    public createNewsItem(): void {
        this.newsService.postNewsItem(this.newsItem)
            .subscribe(() => { this.loadNewsItem(); });
    }
}
