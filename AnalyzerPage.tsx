import React, { useRef, useState } from 'react';
import { ArrowLeft, Camera, Upload } from 'lucide-react';

type AnalyzerPageProps = {
  resetApp: () => void;
  analyzerRef: React.RefObject<HTMLDivElement>;
};

const AnalyzerPage: React.FC<AnalyzerPageProps> = ({ resetApp, analyzerRef }) => {
  const [activeTab, setActiveTab] = useState("camera");
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const webcamRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Placeholder functions - these would connect to your actual logic
  const capture = () => {
    console.log("Capture photo");
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Upload file");
  };

  const getImagePaths = () => {
    return [];
  };

  return (
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
              <div className="webcam-preview"></div>
              <button className="camera-button" onClick={capture}>
                <Camera className="button-icon-small w-5 h-5" />
                Take Photo
              </button>
              <p className="help-text">Center your face in the frame and look straight ahead</p>
            </div>
          )}

          {activeTab === "upload" && !loading && !preview && (
            <div className="upload-view">
              <input type="file" accept="image/*" onChange={onUpload} ref={fileInputRef} className="file-input" />
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
              <div className="spinner"></div>
              <p className="loading-text">Analyzing your face shape...</p>
              <p className="loading-subtext">This will just take a moment</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyzerPage;