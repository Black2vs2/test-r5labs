export interface ApiLocation {
  locationId: string;
  locationName: string;
  locationDetails: string;
  locationType: string;
  numberofTasks: number;
  numberofMyTasks: number;
  numberofDevices: number;
  address: {
    addressLine1: string;
    city: string;
    state: string;
    zip: string;
  };
  locationUserRole: string;
  active: boolean;
  subscriptionActive: boolean;
}

export interface ApiLocationsResponse {
  locations: ApiLocation[];
  numberOfLocations: number;
}
