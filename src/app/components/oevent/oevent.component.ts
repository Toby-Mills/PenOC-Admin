import { Component, OnInit } from '@angular/core';
import { LookupService } from 'penoc-sdk/services/lookup.service';
import { OEventModel } from 'penoc-sdk/models/oevent.model';
import { CompetitorModel } from 'penoc-sdk/models/competitor.model';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
    moduleId: module.id,
    selector: 'penoc-admin-oevent',
    templateUrl: './oevent.component.html',
    styleUrls: ['./oevent.component.css']
})
export class OEventComponent {
    private oevent: OEventModel;
    public venueList: Array<Object>;
    public clubList: Array<Object>;
    public loadOEventId: number;
    private env;

    constructor(private lookupService: LookupService,
        private oeventService: OEventService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.env = environment;
     }

    ngOnInit(): any {
        this.lookupService.venueList.subscribe(venueData => this.venueList = venueData);
        this.lookupService.clubList.subscribe(clubData => this.clubList = clubData);
        this.loadOEvent();
    }

    private loadOEvent() {
        let oEventDate: Date;
        this.route.params.forEach((params: Params) => {
            let id = + params['eventId'];
            if (id > 0) {
                this.oeventService.getOEvent(id).subscribe((eventData) => {
                    this.oevent = eventData.json()[0];
                    oEventDate =  new Date(this.oevent.date);
                        // add 2 hours (in milliseconds) for South African Time Zone
                    oEventDate.setTime(oEventDate.getTime() + 2 * 60 * 60 * 1000);
                    // truncate to only the date portion
                    this.oevent.date =  oEventDate.toISOString().substring(0, 10);

                });
            } else {
                this.oevent = new OEventModel();
            }
        });
    }

    public saveClicked() {
        this.upsertOEvent();
    }

    public cancelClicked() {
        this.loadOEvent();
    }

    public coursesClicked() {
        this.router.navigate(['/events', this.oevent.id, 'courses']);
    }

    public plannerSelected(planner: CompetitorModel) {
        if (planner) {
            this.oevent.plannerId = planner.id;
        } else {
            this.oevent.plannerId = null;
        }
    };

    public controllerSelected(controller: CompetitorModel) {
        if (controller) {
            this.oevent.controllerId = controller.id;
        } else {
            this.oevent.controllerId = null;
        }

    };

    public upsertOEvent(): void {
        if (this.oevent.id > 0) {
            this.saveOEvent();
        } else {
            this.createOEvent();
        }
    }

    public saveOEvent(): void {
        this.oeventService.putOEvent(this.oevent)
        .subscribe(result => {
                this.loadOEvent();
            } );
    }

    public createOEvent(): void {
        this.oeventService.postOEvent(this.oevent)
            .subscribe(result => {
                this.loadOEvent();
            } );
    }

}
