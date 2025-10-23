import { useQuery } from "@tanstack/vue-query"
import { Opportunity } from "../../types/opportunitiesTypes"
import { inject } from "vue"
import { providers } from "../../providers"
import { GetOpportunities } from "../../usecases/getOpportunities/GetOpportunities"


const getOpportunitiesFetchMock = async (): Promise<Opportunity[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          companyId: "123456",
          location: {
            state: "SP",
            city: "São Paulo"
          },
          title: "Software Developer",
          type: "clt",
          salary: 5000,
          benefits: ["Health insurance", "Meal voucher", "Transportation allowance"],
          requirements: ["JavaScript", "Vue.js", "Node.js"],
          description: "We are looking for a Software Developer to work with our team.",
          publicationDate: new Date(),
          applicationDeadline: new Date(new Date().setMonth(new Date().getMonth() + 1)),
          workSchedule: "full-time",
          workMode: "hybrid",
          sector: "Technology",
          level: "mid",
          contact: {
            email: "hr@company.com",
            phone: "+5511999999999"
          },
          desiredSkills: ["Problem-solving", "Teamwork", "Communication"],
          education: "Bachelor's degree in Computer Science",
          experience: "3+ years in software development"
        },
        {
          companyId: "789101",
          location: {
            state: "RJ",
            city: "Rio de Janeiro"
          },
          title: "Data Scientist Intern",
          type: "internship",
          salary: 2000,
          benefits: ["Meal voucher", "Transportation allowance"],
          requirements: ["Python", "Machine Learning", "Data Analysis"],
          description: "Join our data science team as an intern.",
          publicationDate: new Date(),
          applicationDeadline: new Date(new Date().setMonth(new Date().getMonth() + 2)),
          workSchedule: "part-time",
          workMode: "remote",
          sector: "Finance",
          level: "junior",
          contact: {
            email: "recruitment@company.com",
            phone: "+5521998888888"
          },
          desiredSkills: ["Critical thinking", "Data visualization", "Statistics"],
          education: "Currently pursuing a degree in Data Science",
          experience: "No experience required"
        }
      ])
    }, 1000 * 2) // 2 segundos
  })
}

export const getOpportunitiesQueryKey = () => ['getOpportunities']

export const useGetOpportunitiesQuery = () => {
  const usecase = inject<GetOpportunities>(providers.GET_OPPORTUNITIES.key)

  return useQuery({
    queryKey: getOpportunitiesQueryKey(),
    queryFn: async () => {
      return await usecase.perform()
    }
  })
}