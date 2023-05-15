import { PlantDTO } from "../DTOS_Storage/PlantDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Wellcome: undefined;
      UserIdentification: undefined;
      Confirmation: Object;
      PlantSelect: undefined;
      PlantSave: {plant: PlantDTO};
      MyPlants: undefined;
      nextScreen: String
    }
  }
}