// src/pages/Assessments.js
import React from 'react';

const pastPapers = [
  { 
    year: 2023, 
    test: 'Final Exam', 
    content: 'Financial Accounting', 
    challenge: 'High', 
    guidance: "This exam focused on IFRS standards, including revenue recognition, lease accounting, and financial statement preparation. Key areas included adjustments like depreciation, impairment, and accruals, testing students' ability to apply theoretical principles."
  },
  { 
    year: 2023, 
    test: 'Test 1', 
    content: 'Management Accounting', 
    challenge: 'Medium', 
    guidance: "This test assessed budgeting techniques, variance analysis, and cost-volume-profit analysis. Students had to calculate break-even points and analyze profitability across different scenarios to demonstrate mastery of key concepts."
  },
  { 
    year: 2022, 
    test: 'Supplementary Exam', 
    content: 'Auditing', 
    challenge: 'High', 
    guidance: "This paper covered the entire audit process, including planning, risk assessment, and materiality. Internal controls and audit evidence procedures were essential areas, focusing on real-world applications of audit frameworks."
  },
  { 
    year: 2022, 
    test: 'Test 2', 
    content: 'Tax', 
    challenge: 'High', 
    guidance: "Students were tested on corporate tax calculations and VAT regulations. The focus was on tax planning strategies, deferred tax treatments, and calculating tax liabilities for businesses."
  },
  { 
    year: 2021, 
    test: 'Test 3', 
    content: 'Corporate Governance', 
    challenge: 'Medium', 
    guidance: "This test examined governance principles, including King IV principles and board responsibilities. Students had to analyze case studies and apply governance frameworks to various corporate scenarios."
  },
  { 
    year: 2021, 
    test: 'Final Exam', 
    content: 'Financial Reporting', 
    challenge: 'High', 
    guidance: "The focus was on preparing consolidated financial statements and understanding changes in accounting policies. Students were tested on cash flow statements and how to disclose financial performance effectively."
  },
  { 
    year: 2020, 
    test: 'Test 4', 
    content: 'Management Accounting', 
    challenge: 'Medium', 
    guidance: "This paper emphasized decision-making techniques, such as relevant costing and transfer pricing. Students had to apply marginal costing and prepare operational budgets."
  },
  { 
    year: 2020, 
    test: 'Supplementary Exam', 
    content: 'Financial Management', 
    challenge: 'High', 
    guidance: "This exam covered capital budgeting, cost of capital, and working capital management. Students were required to perform net present value calculations and evaluate financing options."
  },
  { 
    year: 2019, 
    test: 'Test 1', 
    content: 'Finance', 
    challenge: 'Low', 
    guidance: "This test focused on time value of money concepts, including present and future value calculations. Students were also introduced to basic financial instruments."
  },
  { 
    year: 2019, 
    test: 'Final Exam', 
    content: 'Corporate Governance', 
    challenge: 'Medium', 
    guidance: "The exam focused on the implementation of governance frameworks. Case studies on ethical leadership and risk management were provided."
  }
];

const Assessments = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Assessments</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pastPapers.map((paper, index) => (
        <div key={index} className="p-6 bg-white shadow rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">{paper.year} - {paper.test}</h2>
            <p className="text-gray-600 mb-1"><strong>Examined:</strong> {paper.content}</p>
            <p className="text-gray-600 mb-1"><strong>Challenge Level:</strong> {paper.challenge}</p>
            <p className="text-gray-600"><strong>Guidance:</strong> {paper.guidance}</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-gray-400 hover:text-black transition-colors">
            Begin Assessment
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Assessments;
