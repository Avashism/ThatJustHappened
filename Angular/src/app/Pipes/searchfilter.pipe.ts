import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Search'
})
export class SearchfilterPipe implements PipeTransform {

    transform(value: any, args?: any, args2?: any): any {
        if (!args) {
            return value;
        }
        if (args2 == 'title') {
            return value.filter(story => {
                    return story.title.toUpperCase().includes(args.toUpperCase()) === true;
                }
            );
        } else if (args2 == 'username') {
            return value.filter(story => {
                return story.username.toUpperCase().includes(args.toUpperCase()) === true;
            });
        }
    }
}

