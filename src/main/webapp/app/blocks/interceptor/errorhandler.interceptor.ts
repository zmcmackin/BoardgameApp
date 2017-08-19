import { JhiHttpInterceptor, JhiEventManager } from 'ng-jhipster';
import { RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandlerInterceptor extends JhiHttpInterceptor {

    constructor(private eventManager: JhiEventManager) {
        super();
    }

    requestIntercept(options?: RequestOptionsArgs): RequestOptionsArgs {
        return options;
    }

    responseIntercept(observable: Observable<Response>): Observable<Response> {
        return <Observable<Response>> observable.catch((error) => {
            if (!(error.status === 401 && (error.text() === '' ||
                (error.json().path && error.json().path.indexOf('/api/account') === 0 )))) {
                this.eventManager.broadcast( {name: 'boardgameappApp.httpError', content: error});
            }
            return Observable.throw(error);
        });
    }
}
