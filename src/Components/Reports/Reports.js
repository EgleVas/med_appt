import './Reports.css'

import {Table, Button} from 'react-bootstrap';
import "reactjs-popup/dist/index.css";
import React, { useState } from 'react';

const Reports = () => {
  const [report, setReport] = useState("")

  const handleReport = function (report) {
    setReport(report);
  }

  const openReportInNewTab = () => {
    const reportUrl = '../../../patient_report.pdf';
    window.open(reportUrl, '_blank');
  };

  const downloadReport = () => {
    const reportUrl = '../../../patient_report.pdf';
    
    const link = document.createElement('a');
    link.href = reportUrl;
    link.download = 'patient_report.pdf';
    
    // Auto-click on the <a> element to trigger the download
    link.click();
  };

  return (
    <div style={{margin: "auto", maxWidth: "1000px", marginTop: "10%"}}>
      <h2 style={{marginBottom: "10px"}}>Reports</h2>
      <div className='.form-container'>
      <table style={{ width: '100%'}}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dr. John Doe</td>
            <td>Cardiology</td>
            <td>
                <Button variant="primary" size='sm' onClick={openReportInNewTab}>View Report</Button>
            </td>
            <td>
                <Button variant="primary" size='sm' onClick={downloadReport}>Download Report</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dr. Paula Boe</td>
            <td>Dermatology</td>
            <td>
              <Button style={{backgroundColor: 'red'}} variant="primary" disabled size='sm'>Report Unavailable</Button>
            </td>
            <td>
                <Button style={{backgroundColor: 'red'}} variant="primary" disabled size='sm'>Download Unavailable</Button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Reports;