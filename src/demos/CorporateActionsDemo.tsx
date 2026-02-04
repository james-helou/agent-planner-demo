import React, { useState, useEffect, useMemo } from 'react';

type IconProps = { className?: string };
const IconBase = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const Mail = (p: IconProps) => <IconBase {...p} />;
const Globe = (p: IconProps) => <IconBase {...p} />;
const FileText = (p: IconProps) => <IconBase {...p} />;
const Database = (p: IconProps) => <IconBase {...p} />;
const Brain = (p: IconProps) => <IconBase {...p} />;
const CheckCircle = (p: IconProps) => <IconBase {...p} />;
const Clock = (p: IconProps) => <IconBase {...p} />;
const AlertTriangle = (p: IconProps) => <IconBase {...p} />;
const ArrowRight = (p: IconProps) => <IconBase {...p} />;
const Users = (p: IconProps) => <IconBase {...p} />;
const MessageSquare = (p: IconProps) => <IconBase {...p} />;
const Vote = (p: IconProps) => <IconBase {...p} />;
const DollarSign = (p: IconProps) => <IconBase {...p} />;
const TrendingUp = (p: IconProps) => <IconBase {...p} />;
const Activity = (p: IconProps) => <IconBase {...p} />;
const Zap = (p: IconProps) => <IconBase {...p} />;
const Search = (p: IconProps) => <IconBase {...p} />;
const Filter = (p: IconProps) => <IconBase {...p} />;
const Eye = (p: IconProps) => <IconBase {...p} />;
const Download = (p: IconProps) => <IconBase {...p} />;
const BarChart3 = (p: IconProps) => <IconBase {...p} />;
const PieChart = (p: IconProps) => <IconBase {...p} />;
const Send = (p: IconProps) => <IconBase {...p} />;
const FileCheck = (p: IconProps) => <IconBase {...p} />;
const Shield = (p: IconProps) => <IconBase {...p} />;
const Bell = (p: IconProps) => <IconBase {...p} />;
const Calendar = (p: IconProps) => <IconBase {...p} />;
const Lock = (p: IconProps) => <IconBase {...p} />;
const Unlock = (p: IconProps) => <IconBase {...p} />;
const PlayCircle = (p: IconProps) => <IconBase {...p} />;
const CheckSquare = (p: IconProps) => <IconBase {...p} />;
const XCircle = (p: IconProps) => <IconBase {...p} />;
const RefreshCw = (p: IconProps) => <IconBase {...p} />;

function CorporateActionsFullDemo() {
  const [activeView, setActiveView] = useState('incoming');
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [processingStage, setProcessingStage] = useState('extraction');
  const [selectedAction, setSelectedAction] = useState<any>(null);
  const [selectedElection, setSelectedElection] = useState<any>(null);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [reminderMessage, setReminderMessage] = useState('');
  const [showIndividualReminderModal, setShowIndividualReminderModal] = useState(false);
  const [individualReminderMessage, setIndividualReminderMessage] = useState('');

  const incomingDocuments = [
    {
      id: 'DOC-001',
      source: 'Email',
      from: 'investor.relations@techcorp.com',
      subject: 'Voluntary Tender Offer Announcement',
      received: '2024-11-19 09:23 AM',
      status: 'new',
      type: 'unstructured',
      content: `Dear Shareholders,

TechCorp Industries (Nasdaq: TECH) announced today a voluntary tender offer to purchase up to 5,000,000 shares of its common stock at a price of $17.25 per share in cash.

KEY TERMS:
- Offer Price: $17.25 per share (15% premium to current market)
- Expiration Date: December 15, 2024, 5:00 PM ET
- Proration: If more than 5,000,000 shares tendered
- Withdrawal Rights: Until expiration date
- Settlement: Within 3 business days after expiration

Shareholders who wish to participate must submit their election by December 1, 2024.

For questions, contact: tender.offer@techcorp.com

Sincerely,
TechCorp Investor Relations`,
      attachments: ['TenderOffer_Prospectus.pdf', 'ScheduleTO.pdf']
    },
    {
      id: 'DOC-002',
      source: 'SEC EDGAR',
      from: 'SEC Filing System',
      subject: 'Form 8-K: Global Pharma Rights Issue',
      received: '2024-11-19 08:15 AM',
      status: 'processing',
      type: 'structured',
      content: `FORM 8-K CURRENT REPORT
Global Pharma Ltd (Nasdaq: GPHL)

Item 8.01 Other Events

Global Pharma Ltd announced a rights offering to existing shareholders.

TERMS:
- Subscription Price: $24.50 per share
- Total Shares Offered: 8,500,000 shares
- Rights Ratio: 1 right per 10 shares held
- Expiration Date: December 20, 2024
- Election Deadline: December 5, 2024
- Settlement: 5 business days after expiration

Shareholders will receive rights to purchase additional shares at the subscription price. Rights are transferable and may be sold.

For more information, contact: rights@globalparma.com`,
      attachments: ['8K_Filing.xml', 'Rights_Prospectus.pdf']
    },
    {
      id: 'DOC-003',
      source: 'News Wire',
      from: 'Bloomberg Terminal',
      subject: 'BREAKING: Energy Solutions Announces Spin-off',
      received: '2024-11-19 07:42 AM',
      status: 'extracted',
      type: 'unstructured',
      content: `PRESS RELEASE - Energy Solutions Inc (NYSE: ESOL)

Energy Solutions Inc announced the spin-off of its renewable energy division into a separate publicly traded company.

KEY DETAILS:
- New Entity: ESOL Renewables (ESOL-R)
- Distribution Ratio: 1 new share for every 5 ESOL shares held
- Record Date: November 10, 2024
- Effective Date: November 18, 2024
- Trading: ESOL-R to begin trading November 19, 2024

Existing shareholders will automatically receive shares of the new company based on their holdings as of the record date. No action required.

This strategic move allows each business to focus on its core competencies and unlock shareholder value.`,
      attachments: ['PressRelease.pdf', 'SpinoffDetails.pdf']
    },
    {
      id: 'DOC-004',
      source: 'Email',
      from: 'dividends@fingroup.com',
      subject: 'Dividend Reinvestment Plan Update',
      received: '2024-11-19 06:30 AM',
      status: 'new',
      type: 'unstructured',
      content: `Dear Shareholders,

Financial Services Group (NYSE: FING) is pleased to announce our quarterly dividend and enhanced Dividend Reinvestment Plan (DRIP).

DIVIDEND INFORMATION:
- Dividend Per Share: $1.85
- Ex-Dividend Date: December 10, 2024
- Payment Date: December 15, 2024

DRIP OPTION:
- Reinvestment Price: $42.80 per share (3% discount)
- Election Deadline: December 1, 2024
- Automatic reinvestment available
- No transaction fees

Shareholders may elect to reinvest dividends to purchase additional shares at a discount. To participate or modify your election, please contact our transfer agent.

Questions? Email: drip@fingroup.com`,
      attachments: ['DRIP_Enrollment.pdf']
    }
  ];

  const extractedData: Record<string, any> = {
    'DOC-001': {
      actionType: 'Tender Offer',
      company: 'TechCorp Industries',
      ticker: 'TECH',
      offerPrice: '$17.25',
      premium: '15%',
      maxShares: '5,000,000',
      expirationDate: '2024-12-15',
      electionDeadline: '2024-12-01',
      settlementPeriod: '3 business days',
      withdrawalRights: 'Yes',
      proration: 'Yes, if oversubscribed',
      confidence: 98,
      extractedFields: [
        { field: 'Action Type', value: 'Tender Offer', confidence: 99 },
        { field: 'Company Name', value: 'TechCorp Industries', confidence: 100 },
        { field: 'Ticker Symbol', value: 'TECH', confidence: 100 },
        { field: 'Offer Price', value: '$17.25', confidence: 98 },
        { field: 'Expiration Date', value: '2024-12-15', confidence: 97 },
        { field: 'Election Deadline', value: '2024-12-01', confidence: 96 },
        { field: 'Max Shares', value: '5,000,000', confidence: 99 }
      ],
      affectedPositions: [
        { account: 'PENSION-001', client: 'Pension Fund Alpha', shares: 50000, value: '$862,500' },
        { account: 'INVEST-042', client: 'Investment Trust Beta', shares: 75000, value: '$1,293,750' },
        { account: 'HEDGE-089', client: 'Hedge Fund Gamma', shares: 25000, value: '$431,250' },
        { account: 'MUTUAL-156', client: 'Growth Fund Delta', shares: 120000, value: '$2,070,000' }
      ]
    },
    'DOC-002': {
      actionType: 'Rights Issue',
      company: 'Global Pharma Ltd',
      ticker: 'GPHL',
      offerPrice: '$24.50',
      premium: 'N/A',
      maxShares: '8,500,000',
      expirationDate: '2024-12-20',
      electionDeadline: '2024-12-05',
      settlementPeriod: '5 business days',
      withdrawalRights: 'No',
      proration: 'No',
      confidence: 96,
      extractedFields: [
        { field: 'Action Type', value: 'Rights Issue', confidence: 98 },
        { field: 'Company Name', value: 'Global Pharma Ltd', confidence: 100 },
        { field: 'Ticker Symbol', value: 'GPHL', confidence: 100 },
        { field: 'Subscription Price', value: '$24.50', confidence: 97 },
        { field: 'Expiration Date', value: '2024-12-20', confidence: 96 },
        { field: 'Election Deadline', value: '2024-12-05', confidence: 95 },
        { field: 'Total Shares Offered', value: '8,500,000', confidence: 98 }
      ],
      affectedPositions: [
        { account: 'PENSION-001', client: 'Pension Fund Alpha', shares: 85000, value: '$2,082,500' },
        { account: 'INVEST-042', client: 'Investment Trust Beta', shares: 125000, value: '$3,062,500' },
        { account: 'HEDGE-089', client: 'Hedge Fund Gamma', shares: 45000, value: '$1,102,500' },
        { account: 'MUTUAL-156', client: 'Growth Fund Delta', shares: 200000, value: '$4,900,000' }
      ]
    },
    'DOC-003': {
      actionType: 'Spin-off',
      company: 'Energy Solutions Inc',
      ticker: 'ESOL',
      offerPrice: 'N/A',
      premium: 'N/A',
      maxShares: 'N/A',
      expirationDate: '2024-11-18',
      electionDeadline: '2024-11-10',
      settlementPeriod: 'Immediate',
      withdrawalRights: 'N/A',
      proration: 'N/A',
      confidence: 97,
      extractedFields: [
        { field: 'Action Type', value: 'Spin-off', confidence: 99 },
        { field: 'Company Name', value: 'Energy Solutions Inc', confidence: 100 },
        { field: 'Ticker Symbol', value: 'ESOL', confidence: 100 },
        { field: 'New Entity', value: 'ESOL Renewables (ESOL-R)', confidence: 98 },
        { field: 'Distribution Ratio', value: '1 new share per 5 old shares', confidence: 97 },
        { field: 'Effective Date', value: '2024-11-18', confidence: 98 },
        { field: 'Record Date', value: '2024-11-10', confidence: 96 }
      ],
      affectedPositions: [
        { account: 'PENSION-001', client: 'Pension Fund Alpha', shares: 10000, value: 'Market Value' },
        { account: 'INVEST-042', client: 'Investment Trust Beta', shares: 15000, value: 'Market Value' },
        { account: 'HEDGE-089', client: 'Hedge Fund Gamma', shares: 8000, value: 'Market Value' },
        { account: 'MUTUAL-156', client: 'Growth Fund Delta', shares: 25000, value: 'Market Value' }
      ]
    },
    'DOC-004': {
      actionType: 'Dividend Reinvestment',
      company: 'Financial Services Group',
      ticker: 'FING',
      offerPrice: '$42.80',
      premium: '3% discount',
      maxShares: 'Unlimited',
      expirationDate: '2024-12-10',
      electionDeadline: '2024-12-01',
      settlementPeriod: 'Ex-dividend date',
      withdrawalRights: 'Yes',
      proration: 'No',
      confidence: 95,
      extractedFields: [
        { field: 'Action Type', value: 'Dividend Reinvestment Plan', confidence: 97 },
        { field: 'Company Name', value: 'Financial Services Group', confidence: 100 },
        { field: 'Ticker Symbol', value: 'FING', confidence: 100 },
        { field: 'Dividend Per Share', value: '$1.85', confidence: 98 },
        { field: 'Reinvestment Price', value: '$42.80', confidence: 96 },
        { field: 'Ex-Dividend Date', value: '2024-12-10', confidence: 97 },
        { field: 'Election Deadline', value: '2024-12-01', confidence: 95 }
      ],
      affectedPositions: [
        { account: 'PENSION-001', client: 'Pension Fund Alpha', shares: 150000, value: '$277,500' },
        { account: 'INVEST-042', client: 'Investment Trust Beta', shares: 225000, value: '$416,250' },
        { account: 'HEDGE-089', client: 'Hedge Fund Gamma', shares: 95000, value: '$175,750' },
        { account: 'MUTUAL-156', client: 'Growth Fund Delta', shares: 310000, value: '$573,500' }
      ]
    }
  };

  const corporateActions = [
    {
      id: 'CA-2024-001',
      sourceDoc: 'DOC-001',
      company: 'TechCorp Industries',
      ticker: 'TECH',
      type: 'Tender Offer',
      stage: 'proxy-voting',
      priority: 'high',
      extracted: true,
      clientsNotified: 847,
      responsesReceived: 567,
      votingDeadline: '2024-12-01',
      estimatedValue: '$4.2M',
      agent1Complete: true,
      agent2Active: true,
      agent3Pending: true
    },
    {
      id: 'CA-2024-002',
      sourceDoc: 'DOC-002',
      company: 'Global Pharma Ltd',
      ticker: 'GPHL',
      type: 'Rights Issue',
      stage: 'processing',
      priority: 'medium',
      extracted: true,
      clientsNotified: 0,
      responsesReceived: 0,
      votingDeadline: '2024-12-05',
      estimatedValue: '$7.8M',
      agent1Active: true,
      agent2Pending: true,
      agent3Pending: true
    }
  ];

  const clientElections = [
    {
      id: 'ELEC-001',
      actionId: 'CA-2024-001',
      account: 'PENSION-001',
      clientName: 'Pension Fund Alpha',
      shares: 50000,
      eligibleValue: '$862,500',
      status: 'elected',
      election: 'Participate - 100%',
      sharesToTender: 50000,
      expectedProceeds: '$862,500',
      submittedDate: '2024-11-18',
      confirmedBy: 'John Smith, Portfolio Manager'
    },
    {
      id: 'ELEC-002',
      actionId: 'CA-2024-001',
      account: 'INVEST-042',
      clientName: 'Investment Trust Beta',
      shares: 75000,
      eligibleValue: '$1,293,750',
      status: 'pending',
      election: null,
      sharesToTender: 0,
      expectedProceeds: '$0',
      submittedDate: null,
      confirmedBy: null
    },
    {
      id: 'ELEC-003',
      actionId: 'CA-2024-001',
      account: 'HEDGE-089',
      clientName: 'Hedge Fund Gamma',
      shares: 25000,
      eligibleValue: '$431,250',
      status: 'elected',
      election: 'Decline',
      sharesToTender: 0,
      expectedProceeds: '$0',
      submittedDate: '2024-11-17',
      confirmedBy: 'Sarah Johnson, CIO'
    },
    {
      id: 'ELEC-004',
      actionId: 'CA-2024-001',
      account: 'MUTUAL-156',
      clientName: 'Growth Fund Delta',
      shares: 120000,
      eligibleValue: '$2,070,000',
      status: 'elected',
      election: 'Participate - 50%',
      sharesToTender: 60000,
      expectedProceeds: '$1,035,000',
      submittedDate: '2024-11-18',
      confirmedBy: 'Michael Chen, Fund Manager'
    }
  ];

  const settlementRecords = [
    {
      id: 'SETTLE-001',
      actionId: 'CA-2024-003',
      company: 'Energy Solutions Inc',
      type: 'Spin-off',
      status: 'completed',
      executionDate: '2024-11-18',
      settlementDate: '2024-11-18',
      totalAccounts: 542,
      totalShares: 1200000,
      distributions: [
        { account: 'PENSION-001', oldShares: 10000, newShares: 2000, newTicker: 'ESOL-R', status: 'settled' },
        { account: 'INVEST-042', oldShares: 15000, newShares: 3000, newTicker: 'ESOL-R', status: 'settled' },
        { account: 'HEDGE-089', oldShares: 8000, newShares: 1600, newTicker: 'ESOL-R', status: 'settled' }
      ]
    }
  ];

  const PendingCount = useMemo(() => clientElections.filter(e => e.status === 'pending').length, [clientElections]);

  useEffect(() => {
    setProcessingStage('extraction');
  }, []);

  const IncomingDataView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-medium text-gray-600">EMAIL</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">2</p>
          <p className="text-xs text-gray-600 mt-1">New messages</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <Globe className="w-5 h-5 text-purple-600" />
            <span className="text-xs font-medium text-gray-600">SEC EDGAR</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">1</p>
          <p className="text-xs text-gray-600 mt-1">New filings</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <Bell className="w-5 h-5 text-amber-600" />
            <span className="text-xs font-medium text-gray-600">NEWS WIRE</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">1</p>
          <p className="text-xs text-gray-600 mt-1">Breaking news</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-green-600" />
            <span className="text-xs font-medium text-gray-600">PROCESSING</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">4</p>
          <p className="text-xs text-gray-600 mt-1">Total today</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">Agent 1: CA Identification & Processing</h3>
              <span className="flex items-center space-x-2 px-2 py-1 bg-blue-200 rounded-full">
                <Zap className="w-3 h-3 text-blue-700" />
                <span className="text-xs font-medium text-blue-700">Automated</span>
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">This agent monitors data sources, extracts information, and identifies corporate actions requiring processing</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-gray-500 mb-1">Data Sources</p>
                <p className="text-sm font-semibold text-gray-900">Email, SEC EDGAR, News</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-gray-500 mb-1">Key Actions</p>
                <p className="text-sm font-semibold text-gray-900">Extract, Classify, Match</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-gray-500 mb-1">Output</p>
                <p className="text-sm font-semibold text-gray-900">Structured CA Records</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-900">Incoming Documents</h3>
                <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 rounded">Sample Data</span>
              </div>
              <p className="text-sm text-gray-500">Example of how the agent would display incoming data sources</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                <Filter className="w-4 h-4 inline mr-1" />
                Filter
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                <RefreshCw className="w-4 h-4 inline mr-1" />
                Refresh
              </button>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {incomingDocuments.map((doc) => (
            <div
              key={doc.id}
              className="p-5 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedDocument(doc)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className={`p-2 rounded-lg ${
                    doc.source === 'Email' ? 'bg-blue-100' :
                    doc.source === 'SEC EDGAR' ? 'bg-purple-100' :
                    doc.source === 'News Wire' ? 'bg-amber-100' :
                    'bg-gray-100'
                  }`}>
                    {doc.source === 'Email' && <Mail className="w-5 h-5 text-blue-600" />}
                    {doc.source === 'SEC EDGAR' && <FileText className="w-5 h-5 text-purple-600" />}
                    {doc.source === 'News Wire' && <Globe className="w-5 h-5 text-amber-600" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                        doc.status === 'new' ? 'bg-blue-100 text-blue-800' :
                        doc.status === 'processing' ? 'bg-amber-100 text-amber-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {doc.status.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-500">{doc.source}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{doc.received}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{doc.subject}</h4>
                    <p className="text-xs text-gray-600 mb-2">From: {doc.from}</p>
                    {doc.attachments.length > 0 && (
                      <div className="flex items-center space-x-2">
                        <FileCheck className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-600">{doc.attachments.length} attachment(s)</span>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDocument(doc);
                    setActiveView('extraction');
                  }}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  Process
                  <ArrowRight className="w-4 h-4 inline ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ExtractionView = () => {
    const doc = selectedDocument || incomingDocuments[0];
    const extracted = extractedData[doc.id];

    return (
      <div className="space-y-3">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xs font-bold text-gray-900">AI Extraction in Progress</h3>
              <p className="text-xs text-gray-600">Analyzing document and extracting key information...</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-blue-600">{extracted?.confidence || 0}%</p>
              <p className="text-xs text-gray-600">Confidence</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Document Classification</p>
                <p className="text-xs text-gray-600">Identified as: Voluntary Tender Offer</p>
              </div>
              <span className="text-xs text-gray-500">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Entity Recognition</p>
                <p className="text-xs text-gray-600">Company: TechCorp Industries (TECH)</p>
              </div>
              <span className="text-xs text-gray-500">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Terms Extraction</p>
                <p className="text-xs text-gray-600">Price, dates, and conditions identified</p>
              </div>
              <span className="text-xs text-gray-500">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Position Analysis</p>
                <p className="text-xs text-gray-600">Scanning client holdings...</p>
              </div>
              <span className="text-xs text-blue-600">In Progress</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-3 py-2 border-b border-gray-200 bg-gray-50">
              <h4 className="text-sm font-semibold text-gray-900">Source Document</h4>
            </div>
            <div className="p-3">
              <div className="bg-gray-50 rounded p-1.5 mb-1.5 border border-gray-200">
                <div className="flex items-center space-x-1 mb-1">
                  <Mail className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-medium text-gray-700 truncate">{doc.from}</span>
                </div>
                <p className="text-xs font-semibold text-gray-900 mb-0.5 truncate">{doc.subject}</p>
                <p className="text-xs text-gray-500">{doc.received}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded p-1.5 text-xs text-gray-700 font-mono whitespace-pre-wrap max-h-24 overflow-y-auto">
                {doc.content}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-3 py-2 border-b border-gray-200 bg-gray-50">
              <h4 className="text-sm font-semibold text-gray-900">Extracted Information</h4>
            </div>
            <div className="p-3 max-h-40 overflow-y-auto">
              {extracted && (
                <div className="space-y-2">
                  {extracted.extractedFields.map((field: any, idx: number) => (
                    <div key={idx} className="border-l-2 border-blue-500 pl-2 py-1 bg-blue-50">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-sm font-semibold text-gray-700">{field.field}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          field.confidence >= 95 ? 'bg-green-100 text-green-800' :
                          field.confidence >= 90 ? 'bg-amber-100 text-amber-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {field.confidence}%
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{field.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {extracted && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-3 py-2 border-b border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900">Affected Client Positions</h4>
              <p className="text-xs text-gray-600">Clients holding {extracted.ticker} identified automatically</p>
            </div>
            <div className="overflow-x-auto max-h-32">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Account</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Client Name</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Shares</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Value</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {extracted.affectedPositions.map((position: any, idx: number) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-3 py-2 text-xs font-medium text-blue-600">{position.account}</td>
                      <td className="px-3 py-2 text-xs text-gray-900">{position.client}</td>
                      <td className="px-3 py-2 text-xs text-gray-900">{position.shares.toLocaleString()}</td>
                      <td className="px-3 py-2 text-xs font-semibold text-gray-900">{position.value}</td>
                      <td className="px-3 py-2">
                        <span className="px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                          Ready
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="flex space-x-2 pt-2">
          <button
            onClick={() => {
              setSelectedDocument(null);
              setActiveView('proxy-voting');
            }}
            className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-1"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Approve & Create</span>
          </button>
          <button
            onClick={() => {
              setSelectedDocument(null);
              setActiveView('incoming');
            }}
            className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const ProxyVotingView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
        <div className="flex items-start space-x-4">
          <div className="bg-purple-600 p-3 rounded-lg">
            <Vote className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">Agent 2: Proxy Voting & Client Communication</h3>
              <span className="flex items-center space-x-2 px-2 py-1 bg-purple-200 rounded-full">
                <Users className="w-3 h-3 text-purple-700" />
                <span className="text-xs font-medium text-purple-700">Human-in-Loop</span>
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">This agent manages client notifications, collects elections, and processes proxy votes with human approval</p>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="text-xs text-gray-500 mb-1">Trigger</p>
                <p className="text-sm font-semibold text-gray-900">CA Identified</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="text-xs text-gray-500 mb-1">Key Actions</p>
                <p className="text-sm font-semibold text-gray-900">Notify, Collect, Validate</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="text-xs text-gray-500 mb-1">Human Step</p>
                <p className="text-sm font-semibold text-gray-900">Client Decisions</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="text-xs text-gray-500 mb-1">Output</p>
                <p className="text-sm font-semibold text-gray-900">Election Records</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Send className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900">1. Notification</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">Automated emails sent to all affected clients with proxy materials</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Email Sent:</span>
              <span className="font-medium text-green-600">847/847</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Email Opened:</span>
              <span className="font-medium text-gray-900">672</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900">2. Collection</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">Clients submit elections through secure portal or email</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Participate:</span>
              <span className="font-medium text-green-600">423</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Decline:</span>
              <span className="font-medium text-red-600">144</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckSquare className="w-5 h-5 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900">3. Validation</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">AI validates elections against account permissions and rules</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Validated:</span>
              <span className="font-medium text-green-600">567</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Flagged:</span>
              <span className="font-medium text-amber-600">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-lg font-semibold text-gray-900">Client Elections</h3>
              <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 rounded">Sample Data</span>
            </div>
            <p className="text-sm text-gray-500">TechCorp Industries Tender Offer (CA-2024-001)</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Download className="w-4 h-4 inline mr-1" />
              Export
            </button>
            <button
              onClick={() => {
                setReminderMessage(`Dear Valued Client,

This is a reminder that your election for the TechCorp Industries Tender Offer is still pending.

Action Required: Please submit your election by December 1, 2024

Corporate Action Details:
• Company: TechCorp Industries (TECH)
• Action Type: Voluntary Tender Offer
• Offer Price: $17.25 per share (15% premium)
• Election Deadline: December 1, 2024, 5:00 PM ET
• Expiration Date: December 15, 2024

To submit your election, please log into your secure portal at https://portal.yourfirm.com or reply to this email with your instructions.

If you have any questions or need assistance, please contact our Corporate Actions team at corporateactions@yourfirm.com or call 1-800-555-0100.

Best regards,
Corporate Actions Team
Your Firm Name`);
                setShowReminderModal(true);
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <Send className="w-4 h-4 inline mr-1" />
              Send Reminders
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Account</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Client</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Eligible Shares</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Election</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Shares to Tender</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Expected Proceeds</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clientElections.map((election) => (
                <tr key={election.id} className="hover:bg-gray-50">
                  <td className="px-5 py-4 text-sm font-medium text-blue-600">{election.account}</td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-gray-900">{election.clientName}</p>
                    {election.confirmedBy && (
                      <p className="text-xs text-gray-500">{election.confirmedBy}</p>
                    )}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-900">{election.shares.toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      election.status === 'elected' ? 'bg-green-100 text-green-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {election.status === 'elected' ? 'Elected' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-sm font-medium ${
                      election.election?.includes('Participate') ? 'text-green-600' :
                      election.election?.includes('Decline') ? 'text-red-600' :
                      'text-gray-400'
                    }`}>
                      {election.election || 'N/A'}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                    {election.sharesToTender.toLocaleString()}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                    {election.expectedProceeds}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => setSelectedElection(election)}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h4 className="font-semibold text-gray-900 mb-4">Election Summary</h4>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Accounts</p>
            <p className="text-2xl font-bold text-gray-900">4</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Shares Tendered</p>
            <p className="text-2xl font-bold text-green-600">110,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Proceeds</p>
            <p className="text-2xl font-bold text-green-600">$1.9M</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-2xl font-bold text-amber-600">1</p>
          </div>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => setActiveView('distribution')}
          className="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 flex items-center justify-center space-x-2"
        >
          <ArrowRight className="w-5 h-5" />
          <span>Submit Elections & Process Settlement</span>
        </button>
      </div>
    </div>
  );

  const DistributionView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
        <div className="flex items-start space-x-4">
          <div className="bg-green-600 p-3 rounded-lg">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">Agent 3: Reinvestment & Distribution Management</h3>
              <span className="flex items-center space-x-2 px-2 py-1 bg-green-200 rounded-full">
                <Zap className="w-3 h-3 text-green-700" />
                <span className="text-xs font-medium text-green-700">Automated</span>
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">This agent processes settlements, manages distributions, and updates records automatically after elections</p>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs text-gray-500 mb-1">Trigger</p>
                <p className="text-sm font-semibold text-gray-900">Elections Complete</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs text-gray-500 mb-1">Key Actions</p>
                <p className="text-sm font-semibold text-gray-900">Execute, Settle, Record</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs text-gray-500 mb-1">Integrations</p>
                <p className="text-sm font-semibold text-gray-900">Custodian, Ledger</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs text-gray-500 mb-1">Output</p>
                <p className="text-sm font-semibold text-gray-900">Settlement Confirms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <PlayCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm">Execute</h4>
          </div>
          <p className="text-xs text-gray-600 mb-2">Submit instructions to custodian/transfer agent</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Status:</span>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <RefreshCw className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm">Settle</h4>
          </div>
          <p className="text-xs text-gray-600 mb-2">Process cash/securities transfers and updates</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Status:</span>
            <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bg-amber-100 p-2 rounded-lg">
              <Database className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm">Record</h4>
          </div>
          <p className="text-xs text-gray-600 mb-2">Update positions, cash balances, and audit trail</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Status:</span>
            <Clock className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm">Analyze</h4>
          </div>
          <p className="text-xs text-gray-600 mb-2">Evaluate outcomes and collect feedback</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Status:</span>
            <Clock className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200 bg-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-900">Active Settlement: TechCorp Tender Offer</h3>
                <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 rounded">Sample Data</span>
              </div>
              <p className="text-sm text-gray-600">CA-2024-001 • Settlement Date: November 22, 2024</p>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-600">Processing</span>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Shares Tendered</p>
              <p className="text-2xl font-bold text-gray-900">110,000</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Settlement Amount</p>
              <p className="text-2xl font-bold text-green-600">$1,897,500</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Accounts Affected</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-5">
            <h4 className="font-semibold text-gray-900 mb-3">Settlement Details by Account</h4>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">PENSION-001 • Pension Fund Alpha</p>
                    <p className="text-xs text-gray-600">Confirmed by: John Smith, Portfolio Manager</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">Settled</span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 text-xs">Shares Tendered</p>
                    <p className="font-semibold text-gray-900">50,000</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Cash Received</p>
                    <p className="font-semibold text-green-600">$862,500</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Remaining Shares</p>
                    <p className="font-semibold text-gray-900">0</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Settlement Status</p>
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">MUTUAL-156 • Growth Fund Delta</p>
                    <p className="text-xs text-gray-600">Confirmed by: Michael Chen, Fund Manager</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">Processing</span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 text-xs">Shares Tendered</p>
                    <p className="font-semibold text-gray-900">60,000</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Cash Expected</p>
                    <p className="font-semibold text-green-600">$1,035,000</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Remaining Shares</p>
                    <p className="font-semibold text-gray-900">60,000</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Settlement Status</p>
                    <Activity className="w-5 h-5 text-blue-600 animate-pulse mt-1" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">HEDGE-089 • Hedge Fund Gamma</p>
                    <p className="text-xs text-gray-600">Confirmed by: Sarah Johnson, CIO</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Declined</span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 text-xs">Shares Tendered</p>
                    <p className="font-semibold text-gray-900">0</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Cash Received</p>
                    <p className="font-semibold text-gray-900">$0</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Remaining Shares</p>
                    <p className="font-semibold text-gray-900">25,000</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Settlement Status</p>
                    <XCircle className="w-5 h-5 text-gray-400 mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recently Completed Settlements</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {settlementRecords.map((record) => (
            <div key={record.id} className="p-5 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{record.company} - {record.type}</h4>
                  <p className="text-xs text-gray-600">{record.actionId} • Settled: {record.settlementDate}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Completed
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 text-xs">Accounts</p>
                  <p className="font-semibold text-gray-900">{record.totalAccounts}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Total Shares</p>
                  <p className="font-semibold text-gray-900">{record.totalShares.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">New Shares Distributed</p>
                  <p className="font-semibold text-green-600">{(record.totalShares * 0.2).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Status</p>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Post-Action Analysis & Continuous Improvement</h3>
        </div>
        <div className="p-5">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Energy Solutions Spin-off Performance</h4>
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-600">Client Satisfaction</p>
                <p className="text-xl font-bold text-gray-900">4.7/5.0</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Processing Time</p>
                <p className="text-xl font-bold text-gray-900">3.8 days</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Accuracy</p>
                <p className="text-xl font-bold text-gray-900">100%</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Key Success Factors:</strong> Early notification (5 days before required), clear communication materials with visual aids, automated position allocation reduced errors to zero.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900">Implemented Improvements</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <p className="text-sm text-gray-700">Enhanced NLP extraction for complex tender offer terms (98% accuracy)</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <p className="text-sm text-gray-700">Automated reminder system increased response rates by 23%</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <p className="text-sm text-gray-700">Real-time settlement tracking reduced reconciliation time by 40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-gray-900">Data Quality</h4>
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">99.8%</p>
          <p className="text-xs text-gray-600 mt-1">Extraction accuracy</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-gray-900">STP Rate</h4>
            <Zap className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">94%</p>
          <p className="text-xs text-gray-600 mt-1">Straight-through processing</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-gray-900">Client Satisfaction</h4>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">4.6/5</p>
          <p className="text-xs text-gray-600 mt-1">Average rating</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Workflow Planner Context Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                <span className="text-xs font-semibold">WORKFLOW PREVIEW</span>
              </div>
              <p className="text-sm text-indigo-100">
                This is a generated preview of your agentic workflow. Review the structure before building.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-medium rounded-lg backdrop-blur transition">
                <Eye className="w-3 h-3 inline mr-1" />
                Edit Workflow
              </button>
              <button className="px-3 py-1.5 bg-white text-indigo-600 text-xs font-medium rounded-lg hover:bg-indigo-50 transition">
                <Download className="w-3 h-3 inline mr-1" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Original Task Input Summary */}
      <div className="bg-indigo-50 border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-gray-900 mb-1">Your Original Request</h2>
              <p className="text-sm text-gray-700 italic">"Build a system to automatically process corporate action announcements from emails and SEC filings, notify affected clients, collect their voting decisions, and handle the settlement of shares and cash distributions."</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Generated</p>
              <p className="text-sm font-medium text-gray-900">Feb 4, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Summary Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-xs text-gray-500">AI Agents</p>
                  <p className="text-lg font-bold text-gray-900">3</p>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Workflow Steps</p>
                  <p className="text-lg font-bold text-gray-900">12</p>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-500">Data Sources</p>
                  <p className="text-lg font-bold text-gray-900">4</p>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-xs text-gray-500">Human Touchpoints</p>
                  <p className="text-lg font-bold text-gray-900">2</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Ready to Build</span>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Workflow Title */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Corporate Actions Intelligence Platform</h1>
                <p className="text-sm text-gray-600">End-to-End Multi-Agent Processing System</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-2 bg-purple-50 rounded-lg border border-purple-200">
                <Eye className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Preview Mode</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                <Zap className="w-4 h-4 inline mr-1" />
                Build This
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Pipeline Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Agent Pipeline Preview</p>
            <p className="text-xs text-gray-500">Click each agent to see detailed workflow</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveView('incoming')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition ${
                activeView === 'incoming' ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                activeView === 'incoming' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                1
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Agent 1: Identification</p>
                <p className="text-xs opacity-75">Extract & Process</p>
              </div>
            </button>

            <div className="flex items-center space-x-1 text-gray-300">
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <ArrowRight className="w-4 h-4" />
              <div className="w-8 h-0.5 bg-gray-300"></div>
            </div>

            <button
              onClick={() => setActiveView('proxy-voting')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition ${
                activeView === 'proxy-voting' ? 'bg-purple-50 border-purple-300 text-purple-700' : 'border-transparent text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                activeView === 'proxy-voting' ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                2
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Agent 2: Communication</p>
                <p className="text-xs opacity-75">Notify & Collect</p>
              </div>
            </button>

            <div className="flex items-center space-x-1 text-gray-300">
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <ArrowRight className="w-4 h-4" />
              <div className="w-8 h-0.5 bg-gray-300"></div>
            </div>

            <button
              onClick={() => setActiveView('distribution')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition ${
                activeView === 'distribution' ? 'bg-green-50 border-green-300 text-green-700' : 'border-transparent text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                activeView === 'distribution' ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                3
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Agent 3: Settlement</p>
                <p className="text-xs opacity-75">Distribute & Analyze</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {activeView === 'incoming' && <IncomingDataView />}
        {activeView === 'extraction' && <ExtractionView />}
        {activeView === 'proxy-voting' && <ProxyVotingView />}
        {activeView === 'distribution' && <DistributionView />}
      </div>

      {selectedDocument && activeView === 'incoming' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50" onClick={() => setSelectedDocument(null)}>
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full h-[70vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0 bg-white sticky top-0 z-10">
              <h2 className="text-sm font-bold text-gray-900">Document Processing</h2>
              <button
                onClick={() => setSelectedDocument(null)}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded p-1"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>
            <div className="px-4 py-4 overflow-y-auto flex-1">
              <ExtractionView />
            </div>
          </div>
        </div>
      )}

      {selectedElection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50" onClick={() => setSelectedElection(null)}>
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full h-[70vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 flex-shrink-0 sticky top-0 z-10">
              <div>
                <h2 className="text-sm font-bold text-gray-900">Client Election Details</h2>
                <p className="text-xs text-gray-600">{selectedElection.account} • {selectedElection.clientName}</p>
              </div>
              <button
                onClick={() => setSelectedElection(null)}
                className="text-gray-400 hover:text-gray-600 hover:bg-white rounded p-1"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>

            <div className="px-4 py-4 space-y-3 overflow-y-auto flex-1">
              <div className={`rounded-lg p-3 border-2 ${
                selectedElection.status === 'elected'
                  ? 'bg-green-50 border-green-200'
                  : 'bg-amber-50 border-amber-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {selectedElection.status === 'elected' ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Clock className="w-4 h-4 text-amber-600" />
                    )}
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedElection.status === 'elected' ? 'Election Confirmed' : 'Awaiting Response'}
                      </p>
                      <p className="text-xs text-gray-600">
                        {selectedElection.status === 'elected'
                          ? `Submitted on ${selectedElection.submittedDate}`
                          : 'Deadline: December 1, 2024'}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-bold rounded ${
                    selectedElection.status === 'elected'
                      ? 'bg-green-600 text-white'
                      : 'bg-amber-600 text-white'
                  }`}>
                    {selectedElection.status === 'elected' ? 'CONFIRMED' : 'PENDING'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Account Number</p>
                  <p className="text-base font-bold text-blue-600">{selectedElection.account}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Eligible Shares</p>
                  <p className="text-base font-bold text-gray-900">{selectedElection.shares.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Eligible Value</p>
                  <p className="text-base font-bold text-gray-900">{selectedElection.eligibleValue}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-3 py-2 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-sm font-bold text-gray-900">Corporate Action Information</h3>
                </div>
                <div className="p-3 grid grid-cols-2 gap-x-3 gap-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Company:</span>
                    <span className="text-xs font-semibold text-gray-900">TechCorp (TECH)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Action Type:</span>
                    <span className="text-xs font-semibold text-gray-900">Tender Offer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Offer Price:</span>
                    <span className="text-xs font-semibold text-green-600">$17.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Premium:</span>
                    <span className="text-xs font-semibold text-green-600">+15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Expiration:</span>
                    <span className="text-xs font-semibold text-gray-900">Dec 15, 2024</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-3 py-2 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-sm font-bold text-gray-900">Client Election</h3>
                </div>
                <div className="p-3">
                  {selectedElection.election ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div>
                          <p className="text-xs font-semibold text-gray-700">Election Decision</p>
                          <p className={`text-sm font-bold ${
                            selectedElection.election.includes('Participate') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {selectedElection.election}
                          </p>
                        </div>
                        {selectedElection.election.includes('Participate') && (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                        {selectedElection.election.includes('Decline') && (
                          <XCircle className="w-4 h-4 text-red-600" />
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Shares to Tender</p>
                          <p className="text-base font-bold text-gray-900">{selectedElection.sharesToTender.toLocaleString()}</p>
                          <p className="text-xs text-gray-600">
                            {selectedElection.sharesToTender > 0
                              ? `${((selectedElection.sharesToTender / selectedElection.shares) * 100).toFixed(0)}% of position`
                              : 'No shares tendered'}
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Expected Proceeds</p>
                          <p className="text-base font-bold text-green-600">{selectedElection.expectedProceeds}</p>
                          <p className="text-xs text-gray-600">
                            Cash in 3 business days
                          </p>
                        </div>
                      </div>

                      {selectedElection.confirmedBy && (
                        <div className="bg-green-50 rounded-lg p-1.5 border border-green-200">
                          <div className="flex items-start space-x-1">
                            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5" />
                            <div>
                              <p className="text-xs font-semibold text-gray-900">Authorized By</p>
                              <p className="text-xs text-gray-700">{selectedElection.confirmedBy}</p>
                              <p className="text-xs text-gray-600">Confirmed {selectedElection.submittedDate}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-3">
                      <Clock className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                      <p className="text-xs font-semibold text-gray-900 mb-0.5">Awaiting Client Response</p>
                      <p className="text-xs text-gray-600 mb-1.5">Deadline: December 1, 2024</p>
                      <button
                        onClick={() => {
                          setIndividualReminderMessage(`Dear ${selectedElection.clientName},

This is a reminder that your election for the TechCorp Industries Tender Offer is still pending for account ${selectedElection.account}.

Action Required: Please submit your election by December 1, 2024

Account Details:
• Account Number: ${selectedElection.account}
• Eligible Shares: ${selectedElection.shares.toLocaleString()}
• Eligible Value: ${selectedElection.eligibleValue}

Corporate Action Details:
• Company: TechCorp Industries (TECH)
• Action Type: Voluntary Tender Offer
• Offer Price: $17.25 per share (15% premium)
• Election Deadline: December 1, 2024, 5:00 PM ET
• Expiration Date: December 15, 2024

To submit your election, please log into your secure portal at https://portal.yourfirm.com or reply to this email with your instructions.

If you have any questions or need assistance, please contact our Corporate Actions team at corporateactions@yourfirm.com or call 1-800-555-0100.

Best regards,
Corporate Actions Team
Your Firm Name`);
                          setShowIndividualReminderModal(true);
                        }}
                        className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700"
                      >
                        <Send className="w-3 h-3 inline mr-1" />
                        Send Reminder
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-2 py-1 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-xs font-bold text-gray-900">Communication Timeline</h3>
                </div>
                <div className="p-1.5">
                  <div className="space-y-1.5">
                    {selectedElection.submittedDate && (
                      <div className="flex items-start space-x-1">
                        <div className="bg-green-100 p-0.5 rounded-full">
                          <CheckCircle className="w-2.5 h-2.5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-gray-900">Election Received</p>
                          <p className="text-xs text-gray-600">{selectedElection.submittedDate} • Via secure portal</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start space-x-1">
                      <div className="bg-blue-100 p-0.5 rounded-full">
                        <Send className="w-2.5 h-2.5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-900">Proxy Materials Sent</p>
                        <p className="text-xs text-gray-600">Nov 19, 2024 • Email delivered and opened</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-1">
                      <div className="bg-purple-100 p-0.5 rounded-full">
                        <Bell className="w-2.5 h-2.5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-900">Initial Notification</p>
                        <p className="text-xs text-gray-600">Nov 19, 2024 • Corporate action identified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-2 py-1 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-xs font-bold text-gray-900">Related Documents</h3>
                </div>
                <div className="p-1.5 space-y-1">
                  <button className="w-full flex items-center justify-between p-1 bg-gray-50 rounded-lg hover:bg-gray-100 border border-gray-200">
                    <div className="flex items-center space-x-1">
                      <FileText className="w-3 h-3 text-blue-600" />
                      <div className="text-left">
                        <p className="text-xs font-semibold text-gray-900">Tender Offer Prospectus</p>
                        <p className="text-xs text-gray-600">PDF • 2.4 MB</p>
                      </div>
                    </div>
                    <Download className="w-3 h-3 text-gray-600" />
                  </button>

                  <button className="w-full flex items-center justify-between p-1 bg-gray-50 rounded-lg hover:bg-gray-100 border border-gray-200">
                    <div className="flex items-center space-x-1">
                      <FileText className="w-3 h-3 text-blue-600" />
                      <div className="text-left">
                        <p className="text-xs font-semibold text-gray-900">Schedule TO Filing</p>
                        <p className="text-xs text-gray-600">PDF • 1.8 MB</p>
                      </div>
                    </div>
                    <Download className="w-3 h-3 text-gray-600" />
                  </button>

                  {selectedElection.submittedDate && (
                    <button className="w-full flex items-center justify-between p-1 bg-gray-50 rounded-lg hover:bg-gray-100 border border-gray-200">
                      <div className="flex items-center space-x-1">
                        <FileCheck className="w-3 h-3 text-green-600" />
                        <div className="text-left">
                          <p className="text-xs font-semibold text-gray-900">Election Confirmation</p>
                          <p className="text-xs text-gray-600">PDF • 124 KB</p>
                        </div>
                      </div>
                      <Download className="w-3 h-3 text-gray-600" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
              <div className="flex space-x-2">
                {!selectedElection.election ? (
                  <>
                    <button
                      onClick={() => {
                        setIndividualReminderMessage(`Dear ${selectedElection.clientName},

This is a reminder that your election for the TechCorp Industries Tender Offer is still pending for account ${selectedElection.account}.

Action Required: Please submit your election by December 1, 2024

Account Details:
• Account Number: ${selectedElection.account}
• Eligible Shares: ${selectedElection.shares.toLocaleString()}
• Eligible Value: ${selectedElection.eligibleValue}

Corporate Action Details:
• Company: TechCorp Industries (TECH)
• Action Type: Voluntary Tender Offer
• Offer Price: $17.25 per share (15% premium)
• Election Deadline: December 1, 2024, 5:00 PM ET
• Expiration Date: December 15, 2024

To submit your election, please log into your secure portal at https://portal.yourfirm.com or reply to this email with your instructions.

If you have any questions or need assistance, please contact our Corporate Actions team at corporateactions@yourfirm.com or call 1-800-555-0100.

Best regards,
Corporate Actions Team
Your Firm Name`);
                        setShowIndividualReminderModal(true);
                      }}
                      className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700"
                    >
                      <Send className="w-4 h-4 inline mr-1" />
                      Send Reminder
                    </button>
                    <button
                      onClick={() => setSelectedElection(null)}
                      className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-100"
                    >
                      Close
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700">
                      <Download className="w-4 h-4 inline mr-1" />
                      Export
                    </button>
                    <button
                      onClick={() => setSelectedElection(null)}
                      className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-100"
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showReminderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50" onClick={() => setShowReminderModal(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full h-[75vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div>
                <h2 className="text-base font-bold text-gray-900">Send Election Reminders</h2>
                <p className="text-xs text-gray-600 mt-0.5">TechCorp Industries Tender Offer - Review and send reminders to pending accounts</p>
              </div>
              <button
                onClick={() => setShowReminderModal(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-white rounded p-1"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>

            <div className="px-4 py-3 space-y-3 overflow-y-auto flex-1">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <Bell className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">280 Reminders Suggested</h3>
                    <p className="text-xs text-gray-700 mb-2">The following clients have not yet submitted their election and will receive a reminder:</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white rounded p-2 border border-amber-100">
                        <p className="text-gray-600">Total Notified:</p>
                        <p className="font-bold text-gray-900">847 accounts</p>
                      </div>
                      <div className="bg-white rounded p-2 border border-amber-100">
                        <p className="text-gray-600">Already Responded:</p>
                        <p className="font-bold text-green-600">567 accounts</p>
                      </div>
                      <div className="bg-white rounded p-2 border border-amber-100">
                        <p className="text-gray-600">Pending Response:</p>
                        <p className="font-bold text-amber-600">280 accounts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-3 py-2 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-sm font-bold text-gray-900">Accounts Receiving Reminder</h3>
                </div>
                <div className="max-h-40 overflow-y-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Account</th>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Client Name</th>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Eligible Shares</th>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Eligible Value</th>
                        <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">Last Notified</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {clientElections.filter(e => e.status === 'pending').slice(0, 5).map((election, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-3 py-2 text-xs font-medium text-blue-600">{election.account}</td>
                          <td className="px-3 py-2 text-xs text-gray-900">{election.clientName}</td>
                          <td className="px-3 py-2 text-xs text-gray-900">{election.shares.toLocaleString()}</td>
                          <td className="px-3 py-2 text-xs text-gray-900">{election.eligibleValue}</td>
                          <td className="px-3 py-2 text-xs text-gray-600">Nov 19, 2024</td>
                        </tr>
                      ))}
                      {clientElections.filter(e => e.status === 'pending').length > 5 && (
                        <tr className="bg-gray-50">
                          <td colSpan={5} className="px-3 py-2 text-xs text-center text-gray-600 italic">
                            ... and {clientElections.filter(e => e.status === 'pending').length - 5} more accounts
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-3 py-2 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-900">Reminder Message</h3>
                  <span className="text-xs text-gray-600">Edit the message below before sending</span>
                </div>
                <div className="p-3">
                  <textarea
                    value={reminderMessage}
                    onChange={(e) => setReminderMessage(e.target.value)}
                    className="w-full h-48 px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                    placeholder="Enter reminder message..."
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-600">{reminderMessage.length} characters</span>
                    <button
                      onClick={() => setReminderMessage(`Dear Valued Client,

This is a reminder that your election for the TechCorp Industries Tender Offer is still pending.

Action Required: Please submit your election by December 1, 2024

Corporate Action Details:
• Company: TechCorp Industries (TECH)
• Action Type: Voluntary Tender Offer
• Offer Price: $17.25 per share (15% premium)
• Election Deadline: December 1, 2024, 5:00 PM ET
• Expiration Date: December 15, 2024

To submit your election, please log into your secure portal at https://portal.yourfirm.com or reply to this email with your instructions.

If you have any questions or need assistance, please contact our Corporate Actions team at corporateactions@yourfirm.com or call 1-800-555-0100.

Best regards,
Corporate Actions Team
Your Firm Name`)}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Reset to Default
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setShowReminderModal(false);
                    alert('Reminders sent to 280 pending accounts!');
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Reminders to 280 Accounts</span>
                </button>
                <button
                  onClick={() => setShowReminderModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showIndividualReminderModal && selectedElection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50" onClick={() => setShowIndividualReminderModal(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full h-[70vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div>
                <h2 className="text-base font-bold text-gray-900">Send Election Reminder</h2>
                <p className="text-xs text-gray-600 mt-0.5">{selectedElection.account} • {selectedElection.clientName}</p>
              </div>
              <button
                onClick={() => setShowIndividualReminderModal(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-white rounded p-1"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>

            <div className="px-4 py-3 space-y-3 overflow-y-auto flex-1">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <Bell className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Reminder for Pending Election</h3>
                    <p className="text-xs text-gray-700 mb-2">This client has not yet submitted their election and will receive a reminder.</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white rounded p-2 border border-amber-100">
                        <p className="text-gray-600">Account:</p>
                        <p className="font-bold text-gray-900">{selectedElection.account}</p>
                      </div>
                      <div className="bg-white rounded p-2 border border-amber-100">
                        <p className="text-gray-600">Eligible Shares:</p>
                        <p className="font-bold text-gray-900">{selectedElection.shares.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded p-2 border border-amber-100">
                        <p className="text-gray-600">Eligible Value:</p>
                        <p className="font-bold text-gray-900">{selectedElection.eligibleValue}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-3 py-2 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-sm font-bold text-gray-900">Communication History</h3>
                </div>
                <div className="p-3">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Send className="w-2.5 h-2.5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-900">Initial Notification Sent</p>
                        <p className="text-xs text-gray-600">November 19, 2024 • Email delivered and opened</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="bg-amber-100 p-1 rounded-full">
                        <Clock className="w-2.5 h-2.5 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-900">Awaiting Response</p>
                        <p className="text-xs text-gray-600">No election submitted yet • Deadline: December 1, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-3 py-2 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-900">Reminder Message</h3>
                  <span className="text-xs text-gray-600">Edit the message below before sending</span>
                </div>
                <div className="p-3">
                  <textarea
                    value={individualReminderMessage}
                    onChange={(e) => setIndividualReminderMessage(e.target.value)}
                    className="w-full h-64 px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                    placeholder="Enter reminder message..."
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-600">{individualReminderMessage.length} characters</span>
                    <button
                      onClick={() => setIndividualReminderMessage(`Dear ${selectedElection.clientName},

This is a reminder that your election for the TechCorp Industries Tender Offer is still pending for account ${selectedElection.account}.

Action Required: Please submit your election by December 1, 2024

Account Details:
• Account Number: ${selectedElection.account}
• Eligible Shares: ${selectedElection.shares.toLocaleString()}
• Eligible Value: ${selectedElection.eligibleValue}

Corporate Action Details:
• Company: TechCorp Industries (TECH)
• Action Type: Voluntary Tender Offer
• Offer Price: $17.25 per share (15% premium)
• Election Deadline: December 1, 2024, 5:00 PM ET
• Expiration Date: December 15, 2024

To submit your election, please log into your secure portal at https://portal.yourfirm.com or reply to this email with your instructions.

If you have any questions or need assistance, please contact our Corporate Actions team at corporateactions@yourfirm.com or call 1-800-555-0100.

Best regards,
Corporate Actions Team
Your Firm Name`)}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Reset to Default
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setShowIndividualReminderModal(false);
                    alert(`Reminder sent to ${selectedElection.clientName} (${selectedElection.account})`);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Reminder to {selectedElection.clientName}</span>
                </button>
                <button
                  onClick={() => setShowIndividualReminderModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Export the demo component for use elsewhere
export { CorporateActionsFullDemo };

// Default export for standalone use
export default CorporateActionsFullDemo;
