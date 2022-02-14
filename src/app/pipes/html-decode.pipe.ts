import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlDecode'
})
export class HtmlDecodePipe implements PipeTransform {

  transform(value: string ): string {
    const doc = new DOMParser().parseFromString(value, 'text/html');
    return doc.documentElement.textContent;
  }

}
