import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

export default function CustomSandpack({
  template = undefined,
  files = undefined,
  options = undefined,
  customSetup = undefined,
  showPreview = false,
}) {
  return (
    <div>
      <SandpackProvider
        template={template}
        style={{
          overflow: 'hidden',
        }}
        customSetup={customSetup}
        theme='dark'
        files={files}
        options={{
          ...options,
        }}
      >
        <SandpackLayout>
          <SandpackCodeEditor
            showLineNumbers
            showTabs
            wrapContent
            showRunButton={false}
          />
          {showPreview && <SandpackPreview />}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
