import { useState } from 'react'

function App() {
  const [images, setImages] = useState([])
  const [processing, setProcessing] = useState(false)
  const [activeTab, setActiveTab] = useState('upload')

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
      processed: false
    }))
    setImages([...images, ...newImages])
  }

  const processImages = async () => {
    setProcessing(true)
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setImages(images.map(img => ({ ...img, processed: true })))
    setProcessing(false)
  }

  const downloadAll = () => {
    images.forEach(img => {
      const link = document.createElement('a')
      link.href = img.preview
      link.download = `processed-${img.file.name}`
      link.click()
    })
  }

  const clearAll = () => {
    images.forEach(img => URL.revokeObjectURL(img.preview))
    setImages([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            WSHQ Empire Suite
          </h1>
          <p className="text-gray-400 mt-2">Professional eBay Photo Automation & Business Management</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex space-x-4 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'upload'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            📤 Upload & Process
          </button>
          <button
            onClick={() => setActiveTab('batch')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'batch'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            🔄 Batch Operations
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'settings'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            ⚙️ Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'upload' && (
          <div className="space-y-6">
            {/* Upload Section */}
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Upload Photos</h2>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 text-center hover:border-yellow-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="fileInput"
                />
                <label htmlFor="fileInput" className="cursor-pointer">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-xl text-gray-300 mb-2">Drop images here or click to upload</p>
                  <p className="text-sm text-gray-500">Supports JPG, PNG, WebP</p>
                </label>
              </div>
            </div>

            {/* Image Gallery */}
            {images.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-yellow-400">
                    Images ({images.length})
                  </h2>
                  <div className="space-x-3">
                    <button
                      onClick={processImages}
                      disabled={processing}
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {processing ? '⏳ Processing...' : '🚀 Process All'}
                    </button>
                    <button
                      onClick={downloadAll}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                      💾 Download All
                    </button>
                    <button
                      onClick={clearAll}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                      🗑️ Clear All
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map(img => (
                    <div key={img.id} className="relative group">
                      <img
                        src={img.preview}
                        alt="Upload"
                        className="w-full h-48 object-cover rounded-lg border-2 border-gray-700 group-hover:border-yellow-400 transition-colors"
                      />
                      {img.processed && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                          ✓ Processed
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'batch' && (
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Batch Operations</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Background Removal</h3>
                <p className="text-gray-400 mb-4">Remove backgrounds from all images automatically</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded transition-colors">
                  Apply to All
                </button>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Resize Images</h3>
                <p className="text-gray-400 mb-4">Resize all images to eBay optimal dimensions</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded transition-colors">
                  Apply to All
                </button>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Add Watermark</h3>
                <p className="text-gray-400 mb-4">Add WSHQ branding watermark to all images</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded transition-colors">
                  Apply to All
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Output Format</label>
                <select className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3">
                  <option>JPG</option>
                  <option>PNG</option>
                  <option>WebP</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Image Quality</label>
                <input type="range" min="1" max="100" defaultValue="90" className="w-full" />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Max Image Width</label>
                <input type="number" defaultValue="1600" className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3" />
              </div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors">
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8 mt-12 border-t border-gray-700">
        <p className="text-center text-gray-500">© 2026 WSHQ Empire Suite - Webb Services HQ</p>
      </div>
    </div>
  )
}

export default App
