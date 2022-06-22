import axios from "axios";
import { ApiLocationsResponse, ApiLocation } from "../@types/types";

// const DEV_CONFIDENCE_API = "https://dev-api.confidence.org/v2/confidence";

const getLocations = async () =>
  (
    await axios.post<ApiLocationsResponse>(
      `/api/locations`,
      JSON.stringify({
        start: 0,
        limit: 10,
      }),
      {
        headers: {
          Username: "amitphatak$r5labs.com",
          "Content-Type": "application/json",
        },
      }
    )
  ).data;

export { getLocations };
