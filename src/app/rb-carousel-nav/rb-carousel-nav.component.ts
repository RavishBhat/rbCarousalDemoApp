import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-rb-carousel-nav',
  templateUrl: './rb-carousel-nav.component.html',
  styleUrls: ['./rb-carousel-nav.component.scss']
})
export class RbCarouselNavComponent {
  faGithub ='fagithub>';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  redirectTo() {
    let url = 'https://github.com/RavishBhat/rb-carousel';
    window.open(url, '_blank');
  }
}
