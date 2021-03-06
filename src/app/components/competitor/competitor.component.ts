import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { LookupService } from 'penoc-sdk/services/lookup.service';
import { CompetitorService } from 'penoc-sdk/services/competitor.service';
import { CompetitorModel } from 'penoc-sdk/models/competitor.model';
import { PeoplePipe } from '../../pipes/people.pipe';
import { CompetitorEditorComponent } from '../competitor-editor/competitor-editor.component';

@Component({
  selector: 'penoc-admin-competitor',
  templateUrl: './competitor.component.html',
  styleUrls: ['./competitor.component.css']
})
export class CompetitorComponent {
  @Input() competitorId: Number;
  @Input() peopleOnly: boolean = false;
  @Output() competitorIdChange = new EventEmitter();
  @ViewChild('searchBox') searchBox: any;
  @ViewChild('competitorEditor') competitorEditor: CompetitorEditorComponent;

  public competitor: CompetitorModel;
  public searchString: String = '';
  public searchActive: boolean;
  public matchIndex: number = -1;
  public newCompetitor: CompetitorModel;
  public genderList: Array<Object>;
  public delayedDisplay: any;
  public delayedHide: any;
  public allCompetitors: CompetitorModel[];
  private searchInput: any;

  constructor(private lookupService: LookupService, private competitorService: CompetitorService) { 
    this.competitor = new CompetitorModel;
  }
    
  ngOnInit() {
    this.competitorService.allCompetitors.subscribe(data => this.allCompetitors = data);
    this.lookupService.genderList.subscribe(data => this.genderList = data);

    this.loadCompetitor();
    this.searchInput = this.searchBox;
  }

  public loadCompetitor() {
      if (this.competitorId > 0) {
          this.competitorService.allCompetitors
              .subscribe(competitors => {
                  if (competitors) {
                      this.competitor = competitors.find(competitor => { return (competitor.id == this.competitorId) });
                  }
              })
      } else {
          this.competitor = null;
      }
  }

  public delayedActivateSearch(active: boolean) {
      let self: any;
      self = this;
      if (active) {
          clearTimeout(self.delayedHide);
          self.delayedDisplay = setTimeout(function () {
              if (!self.searchActive) { self.activateSearch(true) }
          }, 300);
      } else {
          clearTimeout(self.delayedDisplay);
          self.delayedHide = setTimeout(function () {
              self.activateSearch(false);
          }, 500);
      }
  }

  public activateSearch(active: boolean) {
      if (active) {
          this.loadCompetitor();
          if (this.competitor) {
              this.searchString = this.competitor.fullName;
              this.lookupName(this.searchString);
              this.matchIndex = 0;
          }
      } else {
          this.newCompetitor = null;
      }
      this.searchActive = active;
      if (active) {
          let self: any;
          self = this;
          setTimeout(function () { self.searchInput.nativeElement.focus(); }, 0);
      }
  }

  public maintainActive() {
      this.delayedActivateSearch(this.searchActive);
  }

  public lookupName(name: String) {
      this.matchIndex = -1;
  }

  public selectCompetitor(competitor: CompetitorModel) {
      if (competitor) {
          this.competitor = competitor;
          this.competitorId = this.competitor.id;
          this.searchString = competitor.fullName;
      } else {
          this.competitor = null;
          this.competitorId = null;
          this.searchString = '';
      }
      this.competitorIdChange.emit({ value: this.competitor });
      this.activateSearch(false);
  }

  public keyPressed(event: any) {
      switch (event.key) {
          case 'ArrowDown':
              this.matchIndex++;
              break;
          case 'ArrowUp':
              if (this.matchIndex > 0) {
                  this.matchIndex--;
              }
              break;
          case 'Enter':
          case 'Tab':
              let peopleOnly: PeoplePipe;
              peopleOnly = new PeoplePipe();
              this.selectCompetitor(
                  peopleOnly.transform(this.allCompetitors, this.peopleOnly)
                      .filter(competitor => {
                          return new RegExp(this.searchString.toLowerCase())
                              .test(competitor.fullName.toLowerCase());
                      })[this.matchIndex]
              );
              break;
          case 'Escape':
              this.activateSearch(false);
              break;
          default:
              this.matchIndex = 0;
      }
  }

  public newClicked(event: any) {
      this.newCompetitor = new CompetitorModel;
      event.preventDefault();
  }

  public newCompetitorSaved(competitor: CompetitorModel) {
      this.selectCompetitor(competitor);
  }

  public newCompetitorCancelled() {
      this.newCompetitor = undefined;
  }

}
