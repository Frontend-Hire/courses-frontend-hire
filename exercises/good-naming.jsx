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
          code: `// Ambiguous naming
let d = new Date();
let y = d.getFullYear();

// Prop Naming that Lacks Clarity
function Button({ txt, onClk }) {
  return <button onClick={onClk}>{txt}</button>;
}

// Abbreviations that Obscure Meaning
let dt = new Date();
let qty = 10;
let prc = 150;

// Boolean Variables with Unclear Implication
let loading = true;
let visible = false;

// Misleading Names that Don't Reflect Variable Type
let userArray = { name: "John", age: 30 };
`,
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
            code: `// Descriptive naming
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Clear and Descriptive Prop Naming
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// Full Descriptive Names
let currentDate = new Date();
let quantity = 10;
let price = 150;

// Explicit Boolean Naming
let isLoading = true;
let isVisible = false;

// Accurate Naming Reflecting Variable Type
// You could also just leave it as user and if an array then users
let userObject = { name: "John", age: 30 };
`,
          },
        }}
      />
    </SolutionWrapper>
  );
};

export const Problem2 = () => {
  return (
    <CustomSandpack
      template='react'
      theme='dark'
      options={{
        activeFile: '/Problem.jsx',
        visibleFiles: ['/Problem.jsx'],
      }}
      files={{
        '/Problem.jsx': {
          code: `// Ambiguous Component Name
function Btn({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

// Non-Intuitive Prop Names
function UserProfile({ uName, uAge }) {
  return (
    <div>
      <p>Name: {uName}</p>
      <p>Age: {uAge}</p>
    </div>
  );
}

// Vague State Variable Names
function DataLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Data fetching logic...
}

// Inconsistent Handler Naming
function SearchInput({ update, click }) {
  // Logic...
}

// Generic Context Name
const DataContext = createContext();

// Unclear Function Component Names
function Form() {
  return <form>{/* Form elements */}</form>;
}

// Ambiguous Hook Naming
function useData() {
  const [data, setData] = useState(null);
  // Fetching logic...
  return { data, setData };
}

// Misleading State Names in Hooks
function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // Resize listener logic...
}

// Generic Event Handler Names
function NavigationMenu() {
  const handleClick = (e) => {
    // Handle click...
  };

  return <button onClick={handleClick}>Menu</button>;
}
`,
        },
      }}
    />
  );
};

export const Problem2Solution = () => {
  return (
    <SolutionWrapper>
      <CustomSandpack
        template='react'
        theme='dark'
        readOnly
        options={{
          activeFile: '/Solution.jsx',
          visibleFiles: ['/Solution.jsx'],
        }}
        files={{
          '/Solution.jsx': {
            code: `// Descriptive Component Name
function PrimaryButton({ onClick, label }) {
  return (
    <button className="primary-btn" onClick={onClick}>
      {label}
    </button>
  );
}

// Intuitive Prop Names
function UserProfile({ userName, userAge }) {
  return (
    <div>
      <p>Name: {userName}</p>
      <p>Age: {userAge}</p>
    </div>
  );
}

// Descriptive State Variable Names
function DataLoader() {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Data fetching logic...
}

// Consistent Handler Naming
function SearchInput({ onUpdate, onClick }) {
  // Logic...
}

// Specific Context Name
const UserContext = createContext();

// Clear Function Component Names
function RegistrationForm() {
  return <form>{/* Registration form elements */}</form>;
}

// Clear Hook Naming
function useUserData() {
  const [userData, setUserData] = useState(null);
  // Fetching logic...
  return { userData, setUserData };
}

// No Confusion of State Names in Hooks
function useWindowDimensions() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Resize listener logic...
}

// Specific Event Handler Names
function NavigationMenu() {
  const handleMenuClick = (e) => {
    // Handle menu click...
  };

  return <button onClick={handleMenuClick}>Menu</button>;
}
`,
          },
        }}
      />
    </SolutionWrapper>
  );
};
