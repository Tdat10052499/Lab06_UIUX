import React, { useState } from 'react';
import './ProjectLogs.css';

const projectsData = [
    {
        id: 1,
        name: "Smart Garden",
        stack: "ESP32, React",
        timestamp: "2026-04-02 10:15:23",
        description: "Hệ thống nhà kính thông minh sử dụng vi điều khiển ESP32 và cảm biến theo thời gian thực để tự động tưới cây và cân bằng môi trường.",
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Portfolio",
        stack: "Vite, Bootstrap",
        timestamp: "2026-04-02 14:42:01",
        description: "Trang web cá nhân mang phong cách IDE / Terminal, với hiệu ứng gõ phím trực quan và hiệu suất cao.",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    }
];

const ProjectLogs = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (proj) => setSelectedProject(proj);
    const closeModal = () => setSelectedProject(null);

    return (
        <div className="project-logs-container h-100">
            <h5 className="mb-4 text-success font-monospace">~/projects $ tail -f latest_projects.log</h5>

            <div className="logs-list">
                {projectsData.map(proj => (
                    <div className="log-line d-flex flex-wrap" key={proj.id}>
                        <span className="log-timestamp">[{proj.timestamp}]</span>
                        <span className="log-level text-info mx-2">[INFO]</span>
                        <span className="log-name fw-bold text-light">{proj.name}</span>
                        <span className="log-separator mx-2">-</span>
                        <span className="log-stack text-warning">{proj.stack}</span>
                        <span className="log-separator mx-2">-</span>
                        <button
                            className="btn btn-link btn-sm text-decoration-none log-action p-0 m-0"
                            onClick={() => openModal(proj)}
                        >
                            [Action: View Details]
                        </button>
                    </div>
                ))}
            </div>

            {/* Bootstrap 5 Modal (React style without requires JS config) */}
            {selectedProject && (
                <>
                    <div
                        className="modal-backdrop fade show"
                        onClick={closeModal}
                        style={{ zIndex: 1040, backgroundColor: 'rgba(0,0,0,0.85)' }}
                    ></div>

                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        style={{ zIndex: 1050 }}
                        onClick={closeModal}
                    >
                        <div className="modal-dialog modal-dialog-centered modal-lg" onClick={e => e.stopPropagation()}>
                            <div className="modal-content text-white" style={{ backgroundColor: '#0d1117', border: '1px solid #30363d' }}>

                                <div className="modal-header border-bottom" style={{ borderColor: '#30363d' }}>
                                    <h5 className="modal-title font-monospace text-success" style={{ fontSize: '1rem' }}>
                                        Executing detail_view.sh --target="{selectedProject.name}"
                                    </h5>
                                    <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
                                </div>

                                <div className="modal-body font-monospace">
                                    <img
                                        src={selectedProject.img}
                                        alt={selectedProject.name}
                                        className="img-fluid rounded mb-4"
                                        style={{ border: '1px solid #30363d', maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                                    />
                                    <h4 className="text-info">{selectedProject.name}</h4>
                                    <p className="mb-3 text-warning">Tech Stack: {selectedProject.stack}</p>
                                    <p className="text-light" style={{ lineHeight: '1.6' }}>{selectedProject.description}</p>
                                </div>

                                <div className="modal-footer border-top" style={{ borderColor: '#30363d' }}>
                                    <button type="button" className="btn btn-outline-danger btn-sm font-monospace" onClick={closeModal}>
                                        [Exit 0]
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectLogs;
