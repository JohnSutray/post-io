import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { Action } from 'rxjs/internal/scheduler/Action';

// export class BaseEffects {
//   constructor(
//     private actions$: Actions,
//   ) {
//   }
//
//   createProcedure<Payload, ActionType>(catchActionOfType: TypedAction<ActionType>, performAction: (p: Payload) => void) {
//     return createEffect(() => this.actions$.pipe(
//       ofType(catchActionOfType),
//     ));
//   };
// }
