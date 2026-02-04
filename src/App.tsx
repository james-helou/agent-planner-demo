import React, { useState } from 'react';
import { Workflow, WorkflowInput } from './types/workflow';
import { generateWorkflow } from './services/workflowGenerator';
import { WorkflowRenderer } from './components/WorkflowRenderer';
import { WorkflowInputView } from './components/WorkflowInputView';
import { CorporateActionsFullDemo } from './demos/CorporateActionsDemo';

// App modes
type AppMode = 'input' | 'preview' | 'demo';

function App() {
  const [mode, setMode] = useState<AppMode>('input');
  const [isLoading, setIsLoading] = useState(false);
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (input: WorkflowInput) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Small delay to simulate generation (can be removed when using real LLM)
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const generatedWorkflow = await generateWorkflow(input);
      setWorkflow(generatedWorkflow);
      setMode('preview');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate workflow');
      console.error('Generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = () => {
    setMode('input');
  };

  const handleExport = () => {
    if (!workflow) return;
    
    const exportData = JSON.stringify(workflow, null, 2);
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${workflow.name.toLowerCase().replace(/\s+/g, '-')}-workflow.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBuild = () => {
    // This would trigger the actual build process
    // For now, show an alert
    alert('Build functionality coming soon! This would export your workflow to your development environment.');
  };

  // Demo mode - show the hardcoded example
  if (mode === 'demo') {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Demo Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-0.5 text-xs font-semibold bg-amber-500 text-amber-900 rounded">DEMO MODE</span>
              <span className="text-sm text-gray-300">This is a hardcoded example of a generated workflow</span>
            </div>
            <button
              onClick={() => setMode('input')}
              className="px-4 py-1.5 text-sm font-medium bg-white text-slate-900 rounded-lg hover:bg-gray-100 transition"
            >
              Back to Planner
            </button>
          </div>
        </div>
        <div className="pt-10">
          <CorporateActionsFullDemo />
        </div>
      </div>
    );
  }

  // Preview mode - show the generated workflow
  if (mode === 'preview' && workflow) {
    return (
      <div>
        {/* Back Button */}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={handleEdit}
            className="flex items-center space-x-2 px-4 py-2 bg-white shadow-lg rounded-lg text-gray-700 hover:bg-gray-50 border border-gray-200 transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
            </svg>
            <span className="text-sm font-medium">New Workflow</span>
          </button>
        </div>
        
        <WorkflowRenderer
          workflow={workflow}
          onEdit={handleEdit}
          onExport={handleExport}
          onBuild={handleBuild}
        />
      </div>
    );
  }

  // Input mode - show the workflow input form
  return (
    <div>
      <WorkflowInputView
        onGenerate={handleGenerate}
        isLoading={isLoading}
      />
      
      {/* Error Toast */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              className="text-white/80 hover:text-white"
            >
              x
            </button>
          </div>
        </div>
      )}
      
      {/* Demo Link */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setMode('demo')}
          className="flex items-center space-x-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition shadow-lg"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
          </svg>
          <span className="text-sm font-medium">View Full Demo</span>
        </button>
      </div>
    </div>
  );
}

export default App;
