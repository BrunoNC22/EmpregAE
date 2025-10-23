import { HttpGetClient } from "../../gateways/httpClient/HttpClient";
import { ApiOpportunity, Opportunity } from "../../types/opportunitiesTypes";
import { GetOpportunities } from "./GetOpportunities";

export const parseOpportunity = (apiOpportunity: ApiOpportunity): Opportunity => ({
  "companyId": apiOpportunity.companyId,
  "location": {
    "state": apiOpportunity.location.state,
    "city": apiOpportunity.location.city
  },
  "title": apiOpportunity.title,
  "type": apiOpportunity.type,
  "salary": apiOpportunity.salary,
  "benefits": apiOpportunity.benefits,
  "requirements": apiOpportunity.requirements,
  "description": apiOpportunity.description,
  "publicationDate": new Date(apiOpportunity.publicationDate),
  "applicationDeadline": new Date(apiOpportunity.applicationDeadline),
  "workSchedule": apiOpportunity.workSchedule,
  "workMode": apiOpportunity.workMode,
  "sector": apiOpportunity.sector,
  "level": apiOpportunity.level,
  "contact": {
    "email": apiOpportunity.contact.email,
    "phone": apiOpportunity.contact.phone
  },
  "desiredSkills": apiOpportunity.desiredSkills,
  "education": apiOpportunity.education,
  "experience": apiOpportunity.experience
})

export class RemoteGetOpportinities implements GetOpportunities {
  constructor(private readonly httpClient: HttpGetClient) {}

  async perform(): Promise<Opportunity[]> {
    const response = await this.httpClient.get<ApiOpportunity[]>({ url: '/job-opportunities' })
    return response.map(apiOpportunity => parseOpportunity(apiOpportunity))
  }
}