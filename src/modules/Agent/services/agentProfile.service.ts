import axios from 'axios'

interface AgentObjectiveResponse extends Hydra {
  'hydra:member': IAgentObjective[]
}

interface AgentTargetResponse extends Hydra {
  'hydra:member': IAgentTaget[]
}

export const agentProfileService = {
  async getAgentObjective(
    page: string | number,
    type: objectiveTypes
  ): Promise<AgentObjectiveResponse> {
    const response = await axios.get(
      `${process.env.API}/api/agent_objectives?page=${page}&objectiveType=${type}`
    )
    return response.data
  },
  async createAgentObjective(
    object: IAgentObjective
  ): Promise<IAgentObjective> {
    const response = await axios.post(
      `${process.env.API}/api/agent_objectives`,
      object
    )
    return response.data
  },
  async updateAgentObjective(
    object: IAgentObjective
  ): Promise<IAgentObjective> {
    const response = await axios.patch(
      `${process.env.API}/api/agent_objectives/${object.id}`,
      object
    )
    return response.data
  },
  async deleteAgentObjective(id: number | string): Promise<void> {
    const response = await axios.delete(
      `${process.env.API}/api/agent_objectives/${id}`
    )
    return response.data
  },

  async getAgentTargets(
    agentId: number | string,
    year: string
  ): Promise<AgentTargetResponse> {
    const response = await axios.get(
      `${process.env.API}/api/agent_targets?agent.id=${agentId}&year=${year}`
    )
    return response.data
  },
  async createAgentTarget(object: IAgentTaget): Promise<IAgentTaget> {
    // @ts-ignore
    object.agent = `/api/users/${object.agent.id}`
    const response = await axios.post(
      `${process.env.API}/api/agent_targets`,
      object
    )
    return response.data
  },
  async updateAgentTarget(object: IAgentTaget): Promise<IAgentTaget> {
    // @ts-ignore
    object.agent = `/api/users/${object.agent.id}`
    const response = await axios.patch(
      `${process.env.API}/api/agent_targets/${object.id}`,
      object,
      {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      }
    )
    return response.data
  },
  async deleteAgentTarget(id: number | string): Promise<void> {
    const response = await axios.delete(
      `${process.env.API}/api/agent_objectives/${id}`
    )
    return response.data
  },
}
