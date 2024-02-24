import './Tech.css';

const Tech = () => {
    return (
        <section className='skills' id='skills'>
            <div className="divider">
                <div className='container '>
                    <div className="tech__holder">
                        <h1 className="heading ">Tech Stack</h1>
                    </div>
                    <hr className="horizontal__line" />

                    {/* First Row */}
                    <div className="container ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="frontend align tech__icons">
                                        <h2>Frontend</h2>
                                        <img className='icons' src="https://skillicons.dev/icons?i=html" alt="html5 logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=css" alt="css3 logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=js" alt="javascript logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=react" alt="react logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=nextjs" alt="next js logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=tailwind" alt="tailwindcss logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=bootstrap" alt="bootstrap logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=materialui" alt="materialui logo" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="backend align tech__icons">
                                        <h2>Backend</h2>
                                        <img className='icons' src="https://skillicons.dev/icons?i=nodejs" alt="nodejs logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=express" alt="express logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=laravel" alt="laravel logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=solidity" alt="solidity logo" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="database align tech__icons">
                                        <h2>Database</h2>
                                        <img className="icons" src="https://skillicons.dev/icons?i=mysql" alt="mysql logo" />
                                        <img className="icons" src="https://skillicons.dev/icons?i=mongodb" alt="mongodb logo" />
                                        {/* Add more database icons here */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add some spacing between rows */}
                        <div style={{ marginBottom: '50px' }}></div>

                        {/* Second Row */}
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="mobile align tech__icons">
                                        <h2>Mobile Application Development</h2>
                                        <img className='icons' src="https://skillicons.dev/icons?i=flutter" alt="flutter logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=dart" alt="dart logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=java" alt="java logo" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="others align tech__icons">
                                        <h2>Others</h2>
                                        <img className='icons' src="https://skillicons.dev/icons?i=c" alt="c logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=cpp" alt="cplusplus logo" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tools align tech__icons">
                                        <h2>Tools</h2>
                                        <img className='icons' src="https://skillicons.dev/icons?i=github" alt="github logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=git" alt="git logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=vscode" alt="vscode logo" />
                                        <img className='icons' src="https://skillicons.dev/icons?i=figma" alt="figma logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tech;
