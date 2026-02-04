import React, { useState } from 'react';
import { WorkflowTemplate, WorkflowInput } from '../types/workflow';
import { workflowTemplates } from '../data/templates';

type IconProps = { className?: string };
const Search = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);
const Send = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" />
  </svg>
);
const Zap = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const Brain = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" />
  </svg>
);
const Activity = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

interface WorkflowInputViewProps {
  onGenerate: (input: WorkflowInput) => void;
  isLoading: boolean;
}

export function WorkflowInputView({ onGenerate, isLoading }: WorkflowInputViewProps) {
  const [textInput, setTextInput] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<WorkflowTemplate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmitText = () => {
    if (!textInput.trim()) return;
    onGenerate({ type: 'text', content: textInput });
  };

  const handleSubmitTemplate = (template: WorkflowTemplate) => {
    onGenerate({ type: 'template', content: { templateId: template.id } });
  };

  const filteredTemplates = workflowTemplates.filter(t => {
    if (!searchQuery) return true;
    return t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Agentic Workflow Planner</h1>
              <p className="text-sm text-gray-500">Describe your task or choose a template to generate a workflow</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Describe Your Workflow</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Tell us what you want to automate. Include details about data sources, steps, and any human approvals needed.
          </p>
          
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Example: I want to automate invoice processing. Invoices come via email, need to be validated against purchase orders, routed to managers for approval if over $5000, then processed for payment..."
            className="w-full h-32 p-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
          
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-gray-500">{textInput.length} characters</p>
            <button
              onClick={handleSubmitText}
              disabled={!textInput.trim() || isLoading}
              className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Generate Workflow</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">Or Start from a Template</h2>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search templates..."
                  className="pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          
          <div className="p-5">
            <div className="grid grid-cols-3 gap-4">
              {filteredTemplates.map(template => (
                <div
                  key={template.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                    selectedTemplate?.id === template.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedTemplate(selectedTemplate?.id === template.id ? null : template)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-2xl">{template.icon}</span>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">{template.category}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {template.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">{tag}</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{template.workflow.agents.length} agents</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedTemplate && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{selectedTemplate.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedTemplate.name}</h3>
                    <p className="text-sm text-gray-600">{selectedTemplate.workflow.agents.length} agents - {selectedTemplate.workflow.estimatedBuildTime}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button onClick={() => setSelectedTemplate(null)} className="px-4 py-2 text-gray-600 hover:text-gray-900 transition">Cancel</button>
                  <button
                    onClick={() => handleSubmitTemplate(selectedTemplate)}
                    disabled={isLoading}
                    className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Use Template</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkflowInputView;
