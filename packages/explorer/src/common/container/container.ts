import "reflect-metadata";
import { Container } from "inversify";
import { SearchModule } from "./modules/SearchModule";

const container = new Container();

function containerBuilder() {
  container.load(SearchModule)
}


export { container, containerBuilder };
