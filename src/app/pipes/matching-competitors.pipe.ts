import { Pipe, PipeTransform } from '@angular/core';
import { CompetitorModel } from 'penoc-sdk/models/competitor.model';

@Pipe({ name: 'matchingCompetitors' })
export class MatchingCompetitorsPipe implements PipeTransform {
  transform(allCompetitors: CompetitorModel[], searchString: any) {
    if (searchString === '') {
      return [];
    } else {
      return allCompetitors.filter(
        competitor => {
           return new RegExp(searchString.toLowerCase()).test(competitor.fullName.toLowerCase());
          }
        );
    }
  }
}
