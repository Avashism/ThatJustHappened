import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Username'
})
export class NamefilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!args) {
            return value;
        }
        return value.filter(story => {
                return story.username.includes(args) === true;
            }
        );
    }
}
