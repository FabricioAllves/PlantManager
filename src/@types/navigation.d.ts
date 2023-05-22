import { PlantProps } from "../DTOS_Storage/PlantProps";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Wellcome: undefined;
      UserIdentification: undefined;
      Confirmation: Object;
      PlantSelect: undefined;
      PlantSave: {plant: PlantProps};
      MyPlants: undefined;
      nextScreen: String
    }
  }
}