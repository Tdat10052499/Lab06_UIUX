import React, { useState, useEffect } from 'react';
import './InteractiveTerminal.css';

const InteractiveTerminal = () => {
    const [lines, setLines] = useState([]);
    const [typingText, setTypingText] = useState('');
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [step, setStep] = useState('init'); // States: init, typing, output, done

    useEffect(() => {
        let isMounted = true;

        const runSequence = async () => {
            // -- Step 1: Loading --
            setStep('init');
            for(let i = 0; i <= 100; i += Math.floor(Math.random() * 20) + 10) {
                if(!isMounted) return;
                setLoadingProgress(Math.min(i, 100));
                await new Promise(r => setTimeout(r, 150));
            }
            if(!isMounted) return;
            setLoadingProgress(100);
            await new Promise(r => setTimeout(r, 200));
            setLines(prev => [...prev, { type: 'system', text: 'System.init() [100%] ... OK' }]);
            await new Promise(r => setTimeout(r, 400));
            
            // -- Step 2: whoami --
            setStep('typing');
            const whoamiCmd = "whoami";
            for(let i=0; i<=whoamiCmd.length; i++) {
                if(!isMounted) return;
                setTypingText(whoamiCmd.substring(0, i));
                await new Promise(r => setTimeout(r, 100)); // typing speed
            }
            if(!isMounted) return;
            await new Promise(r => setTimeout(r, 200));
            setLines(prev => [...prev, { type: 'cmd', text: `teichi@dev:~$ ${whoamiCmd}` }]);
            setTypingText('');
            
            // Output
            setStep('output');
            await new Promise(r => setTimeout(r, 200));
            setLines(prev => [...prev, { type: 'output', text: '> Full-stack Developer & IoT Maker' }]);
            await new Promise(r => setTimeout(r, 600));

            // -- Step 3: show projects --
            setStep('typing');
            const projectsCmd = "cat projects.json";
            for(let i=0; i<=projectsCmd.length; i++) {
                if(!isMounted) return;
                setTypingText(projectsCmd.substring(0, i));
                await new Promise(r => setTimeout(r, 80)); // typing speed
            }
            if(!isMounted) return;
            await new Promise(r => setTimeout(r, 200));
            setLines(prev => [...prev, { type: 'cmd', text: `teichi@dev:~$ ${projectsCmd}` }]);
            setTypingText('');

            // JSON Output
            setStep('output');
            await new Promise(r => setTimeout(r, 400));
            const jsonText = JSON.stringify([
                { 
                    "id": 1,
                    "name": "AIoT Smart Garden",
                    "stack": "ESP32, React, Node.js",
                    "status": "Deployed" 
                },
                { 
                    "id": 2,
                    "name": "E-commerce Platform",
                    "stack": "Next.js, Tailwind, MongoDB",
                    "status": "Active" 
                }
            ], null, 4);
            setLines(prev => [...prev, { type: 'json', text: jsonText }]);
            
            await new Promise(r => setTimeout(r, 500));
            if(!isMounted) return;
            setStep('done');
        };

        runSequence();

        return () => { isMounted = false; };
    }, []);

    return (
        <div className="card terminal-card text-white h-100">
            <div className="card-header terminal-header d-flex align-items-center">
                <div className="terminal-dot bg-danger rounded-circle"></div>
                <div className="terminal-dot bg-warning rounded-circle mx-2"></div>
                <div className="terminal-dot bg-success rounded-circle"></div>
                <span className="ms-3 terminal-title text-muted fw-bold">bash - teichi@dev:~</span>
            </div>
            <div className="card-body terminal-body">
                {step === 'init' && (
                    <div className="terminal-line system">
                        System.init() [{loadingProgress}%]<span className="cursor blink">_</span>
                    </div>
                )}
                
                {lines.map((l, idx) => (
                    <div key={idx} className={`terminal-line ${l.type}`}>
                        {l.type === 'json' ? <pre className="terminal-json m-0">{l.text}</pre> : l.text}
                    </div>
                ))}

                {step === 'typing' && (
                    <div className="terminal-line cmd">
                        <span className="prompt">teichi@dev:~$</span><span className="typing-text">{typingText}</span><span className="cursor blink">_</span>
                    </div>
                )}

                {step === 'done' && (
                    <div className="terminal-line cmd">
                        <span className="prompt">teichi@dev:~$</span><span className="cursor blink">_</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InteractiveTerminal;
