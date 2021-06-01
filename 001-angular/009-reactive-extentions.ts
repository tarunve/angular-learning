/**
 *  -   To understand HTTP, we should learn about observables & reactive extensions(RxJS)
 * 
 *  RxJS (Reactive Extensions):
 *  ===========================
 *  -   A library for composing data using observable sequences.
 *  -   And transforming that data using operators.
 *      -   Similar to .NET LINQ operators.
 *  -   Angular uses Reactive Extensions for working with data.
 *      -   Especially asynchronous data.
 * 
 *  Observables:
 *  =========== 
 *  -   Angular uses services for getting the data but what about the notification
 *      in case of asynchronous calls. That is where Observables comes in picture.
 *  -   Observable sequences are also called Observable Stream,
 *  -   It is collection of items over time:
 *      -   Unlike an array, it doesn't retain items.
 *      -   Emmitted items can be observed over time.
 *  -   It does nothing until we subscribe.
 *  -   3 types of notifications;
 *      1.  next : next item is emitted.
 *      2.  error:  provides error info in case of error
 *      3.  complete: No more items are emitted.
 * 
 *  Example : Get me products:
 *  -   Call http get
 *  -   http get returns an Observable, which will emit notifications.
 *  -   Subscribe to start the Observable and the get request is sent.
 *  -   At some later point, the response is returned. 
 *  -   The Observable emits a next notification
 *  -   We process the emitted response.
 * 
 *  Common Observable Usage:
 *  -   Start the observable(subscribe)
 *  -   Pipe emitted items through a set of operators
 *  -   Process notifications : next, error , complete.
 *  -   stop the observable (unsubscribe)
 * 
 *  Example:
 *          import { Observable, range } from 'rxjs';
 *          import { map , filter} from 'rxjs/operators';
 *          
 *          const source$: Observable<number> = range(0, 10);
 *          source$.pipe(
 *              map(x => x*3),
 *              filter(x => x%2===0)
 *          ).subscribe(x => console.log(x));
 */