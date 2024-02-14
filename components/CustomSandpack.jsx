import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
  useActiveCode,
} from '@codesandbox/sandpack-react';
import { keymap } from '@codemirror/view';
import { RotateCcwIcon, SparklesIcon } from 'lucide-react';

import styles from './CustomSandpack.module.css';
import { formatCodeWithPrettier } from './utils';

export default function CustomSandpack({
  template = undefined,
  files = undefined,
  options = undefined,
  customSetup = undefined,
  showPreview = false,
  readOnly = false,
}) {
  const prettierButtonRef = React.useRef(null);

  return (
    <SandpackProvider
      template={template}
      style={{
        overflowAnchor: 'none',
      }}
      customSetup={customSetup}
      theme='dark'
      files={files}
      options={{
        ...options,
      }}
    >
      {!readOnly && (
        <SandpackUtilities>
          <ResetButton />
          <PrettierButton ref={prettierButtonRef} />
        </SandpackUtilities>
      )}
      <SandpackLayout>
        <SandpackCodeEditor
          showLineNumbers
          showTabs
          wrapContent
          readOnly={readOnly}
          showRunButton={false}
          extensions={[
            keymap.of([
              {
                key: 'Mod-s',
                run: () => {
                  prettierButtonRef.current?.click();
                  return true;
                },
              },
            ]),
          ]}
        />
        {showPreview && <SandpackPreview />}
      </SandpackLayout>
    </SandpackProvider>
  );
}

function SandpackUtilities({ children }) {
  return <div className={styles.utilities}>{children}</div>;
}

function ResetButton() {
  const {
    sandpack: { resetAllFiles },
  } = useSandpack();
  return (
    <button onClick={resetAllFiles}>
      <RotateCcwIcon />
      Reset
    </button>
  );
}

const PrettierButton = React.forwardRef(function PrettierButton(props, ref) {
  const { code, updateCode, readOnly } = useActiveCode();
  const {
    sandpack: { activeFile },
  } = useSandpack();

  const prettify = async () => {
    try {
      if (readOnly) return;

      const prettyCode = await formatCodeWithPrettier(code, activeFile);
      updateCode(prettyCode);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button ref={ref} onClick={prettify}>
      <SparklesIcon /> Format
    </button>
  );
});
