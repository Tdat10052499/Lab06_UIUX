import React, { useState } from 'react';
import { VscFiles, VscSearch, VscGithubAlt, VscSettingsGear } from 'react-icons/vsc';
import { FaJs, FaPython, FaHtml5 } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';

import './MainLayout.css';

const filesData = [
  { name: 'bio.js', icon: <FaJs className="text-warning" />, content: `// Hi, I am Teichi.
const developer = {
  role: "Frontend Developer",
  passion: "Creating beautiful UIs"
};` },
  { name: 'projects.py', icon: <FaPython className="text-primary" />, content: `def get_projects():
    return ["Smart Garden", "Portfolio", "E-commerce"]` },
  { name: 'skills.json', icon: <VscJson className="text-warning" />, content: `{
  "languages": ["JavaScript", "Python", "HTML/CSS"],
  "frameworks": ["React", "Bootstrap", "Next.js"]
}` },
  { name: 'contact.html', icon: <FaHtml5 className="text-danger" />, content: `<!-- Reach out to me -->
<div class="contact">
  <a href="mailto:teichi@example.com">Email Me</a>
</div>` }
];

const MainLayout = () => {
  const [selectedFile, setSelectedFile] = useState(filesData[0]);

  return (
    <div className="container-fluid p-0 main-layout vh-100 d-flex overflow-hidden">
      {/* Sidebar - Cột 1 */}
      <div className="sidebar d-flex flex-column align-items-center">
        <div className="sidebar-icon active"><VscFiles /></div>
        <div className="sidebar-icon"><VscSearch /></div>
        <div className="sidebar-icon"><VscGithubAlt /></div>
        <div className="mt-auto sidebar-icon mb-4"><VscSettingsGear /></div>
      </div>

      {/* File Explorer - Cột 2 */}
      <div className="file-explorer col-3 col-lg-2 col-md-3 col-sm-4 d-flex flex-column">
        <div className="explorer-header pb-2">Explorer</div>
        <div className="explorer-content">
          {filesData.map((file, idx) => (
            <div 
              key={idx} 
              className={`file-item ${selectedFile.name === file.name ? 'active' : ''}`}
              onClick={() => setSelectedFile(file)}
            >
              <span className="me-2 d-flex align-items-center">{file.icon}</span>
              {file.name}
            </div>
          ))}
        </div>
      </div>

      {/* Editor Area - Cột 3 */}
      <div className="editor-area col d-flex flex-column">
        <div className="editor-tabs flex-nowrap overflow-auto hide-scroll">
          {filesData.map((file, idx) => (
            <div 
              key={idx} 
              className={`editor-tab text-nowrap ${selectedFile.name === file.name ? 'active' : ''}`}
              onClick={() => setSelectedFile(file)}
            >
              <span className="me-2 d-flex align-items-center">{file.icon}</span>
              {file.name}
            </div>
          ))}
        </div>
        <div className="editor-content">
          {selectedFile.content}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
