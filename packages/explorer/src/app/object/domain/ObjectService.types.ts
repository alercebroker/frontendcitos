export interface ObjectDTO {
  aid: string;
  // other object props
  raHms: string;
  decHms: string;
  firstUTC: string;
  lastUTC: string;
}

export interface IObjectService {
  searchObjects(): ObjectDTO[];
  getObject(): ObjectDTO;
}
