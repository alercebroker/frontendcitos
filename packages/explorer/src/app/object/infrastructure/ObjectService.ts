import type { IObjectRepository, IObjectService, ObjectDTO } from "../domain";

export class ObjectService implements IObjectService {
  private repository: IObjectRepository;
  constructor(repository: IObjectRepository) {
    this.repository = repository;
  }
  getObject(): ObjectDTO {
    throw new Error("Not Implemented");
  }
  searchObjects(): ObjectDTO[] {
    throw new Error("Not Implemented");
  }
}
