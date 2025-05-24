import { useState, useRef, useEffect } from 'react'
import { Camera, Upload, ArrowLeft, Sun, Moon } from 'lucide-react'
import Webcam from 'react-webcam'
import './styles/main.css'

export default function App() {
  const [preview, setPreview] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("camera")
  const [appState, setAppState] = useState("home")
  const [analyzerVisible, setAnalyzerVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const webcamRef = useRef(null)
  const fileInputRef = useRef(null)
  const homeRef = useRef(null)
  const analyzerRef = useRef(null)

  useEffect(() => {
    if (analyzerVisible && analyzerRef.current) {
      analyzerRef.current.classList.add("analyzer-appear")
    }
  }, [analyzerVisible])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const startAnalyzer = () => {
    if (homeRef.current) {
      homeRef.current.classList.add("fade-out")
      setTimeout(() => {
        setAnalyzerVisible(true)
        setAppState("input")
      }, 500)
    }
  }

  const resetApp = () => {
    setAppState("home")
    setAnalyzerVisible(false)
    setPreview(null)
    setResult(null)
    if (homeRef.current) {
      homeRef.current.classList.remove("fade-out")
    }
  }

  const onUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
    // setResult({ gender: "Male", shape: "Oval" }) // Placeholder result
  }

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot()
    if (!imageSrc) return
    setPreview(imageSrc)
    // setResult({ gender: "Female", shape: "Round" }) // Placeholder result  
  }

  const triggerFileInput = () => fileInputRef.current?.click()

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="theme-toggle">
        <button
          className="theme-toggle-button"
          onClick={toggleDarkMode}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {appState === "home" && (
        <div className="home-screen" ref={homeRef}>
          <div className="home-content">
            <div className="logo-container">
              <span className="logo-icon">✂️</span>
            </div>
            <h1 className="app-title">Perfect Cut</h1>
            <p className="app-subtitle">Find your ideal hairstyle based on your face shape</p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📷</div>
                <h3 className="feature-title">Face Analysis</h3>
                <p className="feature-desc">Advanced AI technology to analyze your face shape</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💇</div>
                <h3 className="feature-title">Style Matching</h3>
                <p className="feature-desc">Get personalized hairstyle recommendations</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3 className="feature-title">Instant Results</h3>
                <p className="feature-desc">See your perfect hairstyle matches in seconds</p>
              </div>
            </div>

            <button className="start-button" onClick={startAnalyzer}>
              <span className="button-text">Find My Perfect Hairstyle</span>
              <span className="button-icon">→</span>
            </button>

            <div className="testimonials">
              <div className="testimonial">
                <p className="testimonial-text">"This app helped me find the perfect hairstyle for my face shape!"</p>
                <p className="testimonial-author">- Alex S.</p>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="footer-container">
              <h3 className="footer-title">Developers</h3>
              <div className="developers-list">
                <div className="developer-item">
                  <div className="developer-name">Sourabh Singh</div>
                  <a
                    href="https://github.com/Graphical27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="developer-github"
                  >
                    github.com/Graphical27
                  </a>
                </div>
                <div className="developer-item">
                  <div className="developer-name">Paras Mehta</div>
                  <a
                    href="https://github.com/Paras-Mehta007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="developer-github"
                  >
                    github.com/Paras-Mehta007
                  </a>
                </div>
                <div className="developer-item">
                  <div className="developer-name">Gaurav Singh</div>
                  <a
                    href="https://github.com/gauravsinghshah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="developer-github"
                  >
                    github.com/gauravsinghshah
                  </a>
                </div>
              </div>
              <div className="footer-copyright">© {new Date().getFullYear()} Perfect Cut - All Rights Reserved</div>
            </div>
          </footer>
        </div>
      )}

      {analyzerVisible && (
        <div className="analyzer" ref={analyzerRef}>
          <button className="back-button" onClick={resetApp}>
            <ArrowLeft className="back-icon w-5 h-5" />
            <span className="back-text">Back to Home</span>
          </button>

          <div className="analyzer-panel">
            <h2 className="panel-title">Face Shape Analyzer</h2>
            <p className="panel-subtitle">Let's find the perfect hairstyle for your face shape</p>

            <div className="tabs">
              <button
                className={`tab ${activeTab === "camera" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("camera")}
              >
                <Camera className="tab-icon w-5 h-5" />
                <span className="tab-text">Camera</span>
              </button>
              <button
                className={`tab ${activeTab === "upload" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("upload")}
              >
                <Upload className="tab-icon w-5 h-5" />
                <span className="tab-text">Upload</span>
              </button>
            </div>

            <div className="panel-content">
              {activeTab === "camera" && !loading && !preview && (
                <div className="camera-view">
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ facingMode: "user" }}
                    className="webcam-preview"
                  />
                  <button className="camera-button" onClick={capture}>
                    <Camera className="button-icon-small w-5 h-5" />
                    Take Photo
                  </button>
                  <p className="help-text">Center your face in the frame and look straight ahead</p>
                </div>
              )}

              {activeTab === "upload" && !loading && !preview && (
                <div className="upload-view">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={onUpload} 
                    ref={fileInputRef} 
                    className="file-input" 
                  />
                  <div className="drop-area" onClick={triggerFileInput}>
                    <div className="upload-icon">
                      <Upload className="w-10 h-10" />
                    </div>
                    <p className="upload-text">Click or drag photo here</p>
                    <p className="upload-help">Please use a front-facing portrait photo</p>
                  </div>
                </div>
              )}

              {loading && (
                <div className="loading-view">
                  <div className="spinner" />
                  <p className="loading-text">Analyzing your face shape...</p>
                  <p className="loading-subtext">This will just take a moment</p>
                </div>
              )}

              {preview && !loading && result && (
                <div className="results-view">
                  <div className="results-header">
                    <h3 className="results-title">Your Results</h3>
                    <div className="results-summary">
                      <div className="user-photo">
                        <img src={preview} alt="Your photo" className="photo-preview" />
                      </div>
                      <div className="results-details">
                        <div className="result-item">
                          <span className="result-label">Gender: </span>
                          <span className="result-value">{result.gender}</span>
                        </div>
                        <div className="result-item">
                          <span className="result-label">Face Shape: </span>
                          <span className="result-value">{result.shape}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="try-again" onClick={resetApp}>
                    Try Another Photo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}