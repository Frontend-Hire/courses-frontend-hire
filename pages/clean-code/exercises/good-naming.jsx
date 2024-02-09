import SolutionWrapper from '../../../components/SolutionWrapper';
import CustomSandpack from '../../../components/CustomSandpack';

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
        options={{
          activeFile: '/Solution.js',
          visibleFiles: ['/Solution.js'],
        }}
        files={{
          '/Solution.js': {
            code: '',
            readOnly: true,
          },
        }}
      />
    </SolutionWrapper>
  );
};
