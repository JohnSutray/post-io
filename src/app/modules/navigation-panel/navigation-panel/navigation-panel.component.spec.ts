import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPanelComponent } from './navigation-panel.component';
import { combineLatest, forkJoin, Subject, timer } from 'rxjs';
import { first } from 'rxjs/operators';

describe('NavigationPanelComponent', () => {
  it('should call all deps', done => {
    const t1 = new Subject();
    const t2 = new Subject();

    combineLatest(t1, t2).pipe(first()).subscribe(data => {
      console.log(data);
      done();
      if (data[0] === 1) {
      }
    });

    t1.next(0);
    t2.next(0);

    t1.next(1);
    t2.next(1);
  });
});
