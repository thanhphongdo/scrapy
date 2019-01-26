import * as Request from 'request-promise';
import { appConfig } from '../../config/index';

export class Scrapyd {
    private callScrapyd(uri: string, options?: Request.RequestPromiseOptions){
        uri = appConfig.scrapy.scrapyd + uri;
        return Request(uri, options);
    }

    public daemonStatus() {
        let uri = '/daemonstatus.json';
        return this.callScrapyd(uri);
    }

    public addVersion() {
        let uri = '/addversion.json';

    }

    public schedule() {
        let uri = '/schedule.json';
        
    }

    public cancel() {
        let uri = '/cancel.json';

    }

    public listProjects() {
        let uri = '/listprojects.json';

    }

    public listVersions() {
        let uri = '/listversions.json';

    }

    public listPiders() {
        let uri = '/listspiders.json';

    }

    public listJobs() {
        let uri = '/listjobs.json';

    }

    public delVersion() {
        let uri = '/delversion.json';

    }

    public delProject() {
        let uri = '/delproject.json';

    }
}