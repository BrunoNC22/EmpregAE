import { Opportunity } from "../../types/opportunitiesTypes";

export interface GetOpportunities {
  perform(): Promise<Opportunity[]>
}