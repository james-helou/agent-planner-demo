import React, { useState } from 'react';
import { Workflow } from './types/workflow';
import { generateWorkflowWithAI } from './services/azureOpenAI';
import { WorkflowRenderer } from './components/WorkflowRenderer';
import { WorkflowInputView } from './components/WorkflowInputView';
import { DynamicWorkflowDemo } from './components/DynamicWorkflowDemo';

// App modes
type AppMode = 'input' | 'preview' | 'build';

function App() {
  const [mode, setMode] = useState<AppMode>('input');
  const [isLoading, setIsLoading] = useState(false);
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (tasks: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const generatedWorkflow = await generateWorkflowWithAI(tasks);
      setWorkflow(generatedWorkflow);
      setMode('preview');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate workflow');
      console.error('Generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setMode('input');
  };

  const handleBuild = () => {
    if (!workflow) return;
    setMode('build');
  };

  // Build mode - show the interactive demo populated with workflow data
  if (mode === 'build' && workflow) {
    return (
      <DynamicWorkflowDemo
        workflow={workflow}
        onBack={() => setMode('preview')}
      />
    );
  }

  // Preview mode - show the generated workflow
  if (mode === 'preview' && workflow) {
    return (
      <WorkflowRenderer
        workflow={workflow}
        onBack={handleBack}
        onBuild={handleBuild}
      />
    );
  }

  // Input mode - show the workflow input form
  return (
    <WorkflowInputView
      onGenerate={handleGenerate}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default App;
