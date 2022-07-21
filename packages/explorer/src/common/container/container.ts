import "reflect-metadata";
import { Container } from "inversify";
import { SearchModule } from "./modules/SearchModule";

class AppContainer {
  private container: Container;
  private static appContainer: AppContainer;

  constructor() {
    this.container = new Container();
  }

  public static getInstance(): AppContainer {
    if (!this.appContainer) {
      this.appContainer = new AppContainer();
    }
    return AppContainer.appContainer;
  }

  public getContainer(): Container {
    return this.container;
  }
}

const container = (): Container => {
  return AppContainer.getInstance().getContainer();
};

function containerBuilder() {
  container().load(SearchModule);
}

export { container, containerBuilder };
