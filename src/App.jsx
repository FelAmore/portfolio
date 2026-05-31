import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="flex h-screen bg-[#fffaf5] font-sans overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App