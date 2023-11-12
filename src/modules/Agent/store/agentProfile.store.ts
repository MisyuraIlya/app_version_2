import { create } from 'zustand';
import { agentService } from '../services/agent.service';
import { HydraHandler } from '../../../helpers/hydraHandler';
import { removeClientStorage, setClientStorage } from '../helpers/localstorage';

interface AgentProfileStoreState {
    loading: boolean;
    agentList: IUser[]

}

export const useAgentProfileStore = create<AgentProfileStoreState>((set, get) => ({
    loading: false,
    agentList: []

}));
