// // components/ui/Tabs.tsx
// "use client";
// import React, { useState, ReactNode } from "react";

// interface Tab {
//   label: string;
//   value: string;
//   subTabs?: Tab[];
// }

// interface TabsProps {
//   tabs: Tab[];
//   defaultTab?: string;
//   defaultSubTab?: string;
//   onTabChange?: (value: string, subTab?: string) => void;
//   children: (activeTab: string, activeSubTab?: string) => ReactNode;
//   className?: string;
//   tabClassName?: string;
//   subTabClassName?: string;
//   contentClassName?: string;
//   activeTabClassName?: string;
//   inactiveTabClassName?: string;
//   activeSubTabClassName?: string;
//   inactiveSubTabClassName?: string;
// }

// export default function Tabs({
//   tabs,
//   defaultTab,
//   defaultSubTab,
//   onTabChange,
//   children,
//   className = "",
//   tabClassName = "",
//   subTabClassName = "",
//   contentClassName = "",
//   activeTabClassName = "bg-primary text-white border border-primary",
//   inactiveTabClassName = "text-gray-700 border border-primary hover:bg-gray-50",
//   activeSubTabClassName = "",
//   inactiveSubTabClassName = "text-gray-600 hover:text-primary",
// }: TabsProps) {
//   const [activeTab, setActiveTab] = useState(
//     defaultTab || tabs[0]?.value || ""
//   );
//   const [activeSubTab, setActiveSubTab] = useState(
//     defaultSubTab || tabs[0]?.subTabs?.[0]?.value || ""
//   );

//   const handleTabChange = (value: string) => {
//     setActiveTab(value);
//     const newSubTab =
//       tabs.find((tab) => tab.value === value)?.subTabs?.[0]?.value || "";
//     setActiveSubTab(newSubTab);
//     if (onTabChange) {
//       onTabChange(value, newSubTab);
//     }
//   };

//   const handleSubTabChange = (value: string) => {
//     setActiveSubTab(value);
//     if (onTabChange) {
//       onTabChange(activeTab, value);
//     }
//   };

//   const currentTab = tabs.find((tab) => tab.value === activeTab);

//   return (
//     <div className={`w-full ${className}`}>
//       {/* Main Tabs Navigation */}
//       <div className="flex gap-3 mb-4 overflow-x-auto scrollbar-hide">
//         {tabs.map((tab) => (
//           <button
//             key={tab.value}
//             onClick={() => handleTabChange(tab.value)}
//             className={`
//               px-6 py-2.5 rounded-md font-medium transition-all duration-300 cursor-pointer
//               ${tabClassName}
//               ${
//                 activeTab === tab.value
//                   ? activeTabClassName
//                   : inactiveTabClassName
//               }
//             `}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Sub-Tabs Navigation (if applicable) */}
//       {currentTab?.subTabs && currentTab.subTabs.length > 0 && (
//         <div className="flex gap-4 mb-6 border-b border-gray-200">
//           {currentTab.subTabs.map((subTab) => (
//             <button
//               key={subTab.value}
//               onClick={() => handleSubTabChange(subTab.value)}
//               className={`
//                 px-4 py-2 font-medium transition-colors duration-200
//                 ${subTabClassName}
//                 ${
//                   activeSubTab === subTab.value
//                     ? activeSubTabClassName
//                     : inactiveSubTabClassName
//                 }
//               `}
//             >
//               {subTab.label}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Tab Content */}
//       <div className={`transition-opacity duration-300 ${contentClassName}`}>
//         {children(activeTab, activeSubTab)}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, ReactNode } from "react";

interface Tab {
  label: string;
  value: string;
  subTabs?: Tab[];
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  defaultSubTab?: string;
  onTabChange?: (value: string, subTab?: string) => void;
  children: (activeTab: string, activeSubTab?: string) => ReactNode;
  className?: string;
  tabClassName?: string;
  subTabClassName?: string;
  contentClassName?: string;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
  activeSubTabClassName?: string;
  inactiveSubTabClassName?: string;
  rightElement?: ReactNode;
}

export default function Tabs({
  tabs,
  defaultTab,
  defaultSubTab,
  onTabChange,
  children,
  className = "",
  tabClassName = "",
  subTabClassName = "",
  contentClassName = "",
  activeTabClassName = "bg-primary text-white border border-primary",
  inactiveTabClassName = "text-gray-700 border border-primary hover:bg-gray-50",
  activeSubTabClassName = "text-primary border-b-2 border-primary font-medium",
  inactiveSubTabClassName = "text-gray-600 hover:text-primary",
  rightElement,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultTab || tabs[0]?.value || ""
  );
  const [activeSubTab, setActiveSubTab] = useState(
    defaultSubTab ||
      tabs.find((tab) => tab.value === activeTab)?.subTabs?.[0]?.value ||
      ""
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const newSubTab =
      tabs.find((tab) => tab.value === value)?.subTabs?.[0]?.value || "";
    setActiveSubTab(newSubTab);
    onTabChange?.(value, newSubTab);
  };

  const handleSubTabChange = (value: string) => {
    setActiveSubTab(value);
    onTabChange?.(activeTab, value);
  };

  const currentTab = tabs.find((tab) => tab.value === activeTab);

  return (
    <div className={`w-full ${className}`}>
      {/* Main Tabs and Right Element */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer ${tabClassName} ${
                activeTab === tab.value
                  ? activeTabClassName
                  : inactiveTabClassName
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {rightElement && <div>{rightElement}</div>}
      </div>

      {/* Sub-Tabs (if applicable) */}
      {currentTab?.subTabs && currentTab.subTabs.length > 0 && (
        <div className="flex gap-6 mb-6 border-b border-gray-200">
          {currentTab.subTabs.map((subTab) => (
            <button
              key={subTab.value}
              onClick={() => handleSubTabChange(subTab.value)}
              className={`px-2 py-2 font-medium transition-all duration-200 ${subTabClassName} ${
                activeSubTab === subTab.value
                  ? activeSubTabClassName
                  : inactiveSubTabClassName
              }`}
            >
              {subTab.label}
            </button>
          ))}
        </div>
      )}

      {/* Tab Content */}
      <div className={`transition-all duration-200 ${contentClassName}`}>
        {children(activeTab, activeSubTab)}
      </div>
    </div>
  );
}
