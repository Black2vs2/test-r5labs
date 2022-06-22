import axios from "axios";

import { ApiLocationsResponse } from "../@types/types";

const getLocations = async (start: number, limit: number) =>
  (
    await axios.post<ApiLocationsResponse>(
      `/api/locations`,
      JSON.stringify({ start, limit }),
      {
        headers: {
          Username: "amitphatak$r5labs.com",
          "Content-Type": "application/json",
        },
      }
    )
  ).data;

export { getLocations };
