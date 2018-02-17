import {SERVICE_URL} from '../_config';

export class ServiceHelper {
  public createServiceUrl(action: String): string {
    let url = SERVICE_URL;
    url += '?action=' + action;
    return url;
  }

  public createServiceUrlWithJSONParameter(action: String, jsonParameter: string): string {
    let url = this.createServiceUrl(action);
    url += '&params=' + jsonParameter;
    return url;
  }

  public createServiceUrlWithMapParameter(action: String, parameters: Map<string, string>): string {
    let url = this.createServiceUrl(action);
    url += '&params=' + this.mapToJSON(parameters);
    return url;
  }

  public mapToJSON(map): string {
    const ro = {};
    map.forEach((value: string, key: string) => {
      ro[key] = value;
    });
    return JSON.stringify(ro);
  }
}
