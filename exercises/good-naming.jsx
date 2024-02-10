import CustomSandpack from '../components/CustomSandpack';
import SolutionWrapper from '../components/SolutionWrapper';

export const Problem1 = () => {
  return (
    <CustomSandpack
      template='vanilla'
      theme='dark'
      options={{
        activeFile: '/Problem.js',
        visibleFiles: ['/Problem.js'],
      }}
      files={{
        '/Problem.js': {
          code: '',
        },
      }}
    />
  );
};

export const Problem1Solution = () => {
  return (
    <SolutionWrapper>
      <CustomSandpack
        template='vanilla'
        theme='dark'
        readOnly
        options={{
          activeFile: '/Solution.js',
          visibleFiles: ['/Solution.js'],
        }}
        files={{
          '/Solution.js': {
            code: '',
          },
        }}
      />
    </SolutionWrapper>
  );
};
