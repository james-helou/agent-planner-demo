import React, { useState } from 'react';
import { Workflow, Agent, SampleDataConfig } from '../types/workflow';

type IconProps = { className?: string };
const Brain = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" />
  </svg>
);
const Zap = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const Users = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const ArrowRight = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);
const Database = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);
const Activity = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const Clock = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const FileText = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
    <polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" />
  </svg>
);
const Download = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);
const Eye = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

const agentColors = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'bg-blue-600', badge: 'bg-blue-100 text-blue-700', text: 'text-blue-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'bg-purple-600', badge: 'bg-purple-100 text-purple-700', text: 'text-purple-700' },
  green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'bg-green-600', badge: 'bg-green-100 text-green-700', text: 'text-green-700' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'bg-amber-600', badge: 'bg-amber-100 text-amber-700', text: 'text-amber-700' },
  red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'bg-red-600', badge: 'bg-red-100 text-red-700', text: 'text-red-700' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'bg-indigo-600', badge: 'bg-indigo-100 text-indigo-700', text: 'text-indigo-700' },
  pink: { bg: 'bg-pink-50', border: 'border-pink-200', icon: 'bg-pink-600', badge: 'bg-pink-100 text-pink-700', text: 'text-pink-700' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', icon: 'bg-cyan-600', badge: 'bg-cyan-100 text-cyan-700', text: 'text-cyan-700' },
};

interface WorkflowRendererProps {
  workflow: Workflow;
  onEdit?: () => void;
  onExport?: () => void;
  onBuild?: () => void;
}

export function WorkflowRenderer({ workflow, onEdit, onExport, onBuild }: WorkflowRendererProps) {
  const [activeAgentIndex, setActiveAgentIndex] = useState(0);
  const activeAgent = workflow.agents[activeAgentIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Preview Banner */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-0.5 text-xs font-semibold bg-white text-blue-600 rounded">WORKFLOW PREVIEW</span>
              <p className="text-sm text-blue-100">Review this generated workflow before building</p>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={onEdit} className="px-3 py-1.5 text-xs font-medium text-white bg-blue-500 hover:bg-blue-400 rounded-lg transition">
                <Eye className="w-3 h-3 inline mr-1" /> Edit
              </button>
              <button onClick={onExport} className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-white hover:bg-blue-50 rounded-lg transition">
                <Download className="w-3 h-3 inline mr-1" /> Export JSON
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Original Request */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-gray-900 mb-1">Your Original Request</h2>
              <p className="text-sm text-gray-700">"{workflow.originalPrompt}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <StatItem icon={Brain} color="text-blue-600" label="AI Agents" value={workflow.agents.length} />
              <div className="h-8 w-px bg-gray-200" />
              <StatItem icon={Activity} color="text-purple-600" label="Steps" value={workflow.agents.reduce((acc, a) => acc + a.actions.length, 0)} />
              <div className="h-8 w-px bg-gray-200" />
              <StatItem icon={Database} color="text-green-600" label="Data Sources" value={workflow.dataSources.length} />
              <div className="h-8 w-px bg-gray-200" />
              <StatItem icon={Users} color="text-amber-600" label="Human Touchpoints" value={workflow.humanTouchpoints.length} />
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{workflow.estimatedBuildTime}</span>
              </div>
              <button onClick={onBuild} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                <Zap className="w-4 h-4 inline mr-1" /> Build This
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Title */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{workflow.name}</h1>
              <p className="text-sm text-gray-600">{workflow.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Pipeline */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Agent Pipeline</p>
          <div className="flex items-center justify-between">
            {workflow.agents.map((agent, index) => (
              <React.Fragment key={agent.id}>
                <button
                  onClick={() => setActiveAgentIndex(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition ${
                    activeAgentIndex === index
                      ? `${agentColors[agent.color].bg} ${agentColors[agent.color].border} ${agentColors[agent.color].text}`
                      : 'border-transparent text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    activeAgentIndex === index ? agentColors[agent.color].icon : 'bg-gray-300'
                  }`}>{agent.order}</div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">{agent.name.split(' ')[0]}</p>
                    <p className="text-xs opacity-75">{agent.type === 'human-in-loop' ? 'Human-in-Loop' : 'Automated'}</p>
                  </div>
                </button>
                {index < workflow.agents.length - 1 && (
                  <div className="flex items-center text-gray-300">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <ArrowRight className="w-4 h-4" />
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Detail */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <AgentDetail agent={activeAgent} workflow={workflow} />
      </div>
    </div>
  );
}

function StatItem({ icon: Icon, color, label, value }: { icon: any; color: string; label: string; value: number }) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className={`w-5 h-5 ${color}`} />
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-lg font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function AgentDetail({ agent, workflow }: { agent: Agent; workflow: Workflow }) {
  const colors = agentColors[agent.color];
  
  return (
    <div className="space-y-6">
      <div className={`${colors.bg} rounded-lg p-5 border ${colors.border}`}>
        <div className="flex items-start space-x-4">
          <div className={`${colors.icon} p-3 rounded-lg`}>
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">Agent {agent.order}: {agent.name}</h3>
              <span className={`flex items-center space-x-1 px-2 py-1 ${colors.badge} rounded-full text-xs font-medium`}>
                {agent.type === 'human-in-loop' ? <><Users className="w-3 h-3" /> Human-in-Loop</> : <><Zap className="w-3 h-3" /> Automated</>}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{agent.description}</p>
            <div className="grid grid-cols-4 gap-3">
              <InfoCard label="Trigger" value={agent.trigger.description} colors={colors} />
              <InfoCard label="Actions" value={agent.actions.join(', ')} colors={colors} />
              <InfoCard label="Integrations" value={agent.integrations.join(', ') || 'None'} colors={colors} />
              <InfoCard label="Outputs" value={agent.outputs.map(o => o.name).join(', ')} colors={colors} />
            </div>
          </div>
        </div>
      </div>

      {workflow.humanTouchpoints.filter(ht => ht.agentId === agent.id).length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Users className="w-5 h-5 text-amber-600 mr-2" /> Human Touchpoints
          </h4>
          <div className="space-y-2">
            {workflow.humanTouchpoints.filter(ht => ht.agentId === agent.id).map(ht => (
              <div key={ht.id} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                <div>
                  <p className="text-sm font-medium text-gray-900">{ht.name}</p>
                  <p className="text-xs text-gray-600">{ht.description}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded ${ht.required ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                  {ht.required ? 'Required' : 'Optional'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {agent.sampleData && <SampleDataPreview config={agent.sampleData} />}

      {agent.order === 1 && workflow.dataSources.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Database className="w-5 h-5 text-green-600 mr-2" /> Data Sources
          </h4>
          <div className="grid grid-cols-4 gap-3">
            {workflow.dataSources.map(ds => (
              <div key={ds.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-1">
                  <Database className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">{ds.name}</span>
                </div>
                <p className="text-xs text-gray-600">{ds.description}</p>
                <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded">{ds.type}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoCard({ label, value, colors }: { label: string; value: string; colors: typeof agentColors.blue }) {
  return (
    <div className={`bg-white rounded-lg p-3 border ${colors.border}`}>
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-sm font-semibold text-gray-900 line-clamp-2">{value}</p>
    </div>
  );
}

function SampleDataPreview({ config }: { config: SampleDataConfig }) {
  const statusColors: Record<string, string> = {
    new: 'bg-blue-100 text-blue-800', processing: 'bg-amber-100 text-amber-800', extracted: 'bg-green-100 text-green-800',
    validated: 'bg-green-100 text-green-800', pending: 'bg-amber-100 text-amber-800', elected: 'bg-green-100 text-green-800',
    approved: 'bg-green-100 text-green-800', settled: 'bg-green-100 text-green-800', complete: 'bg-gray-100 text-gray-800', review: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <h4 className="text-lg font-semibold text-gray-900">{config.title}</h4>
          <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 rounded">Sample Data</span>
        </div>
        {config.description && <p className="text-sm text-gray-500 mt-1">{config.description}</p>}
      </div>
      
      {config.type === 'table' && config.columns && config.rows && (
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {config.columns.map(col => (
                <th key={col.key} className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {config.rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {config.columns!.map(col => (
                  <td key={col.key} className="px-5 py-4">
                    {col.type === 'status' ? (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[row[col.key]] || 'bg-gray-100 text-gray-800'}`}>
                        {row[col.key].charAt(0).toUpperCase() + row[col.key].slice(1)}
                      </span>
                    ) : col.type === 'money' ? (
                      <span className="text-sm font-semibold text-green-600">{row[col.key]}</span>
                    ) : (
                      <span className="text-sm text-gray-900">{row[col.key]}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default WorkflowRenderer;
