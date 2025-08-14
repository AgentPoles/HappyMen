import { BarChart3, Code, Users, Compass, Download, HelpCircle } from "lucide-react"

export function Sidebar() {
  const menuItems = [
    { icon: BarChart3, label: "Studio", active: false },
    { icon: Code, label: "AlphaScan", active: false },
    { icon: Users, label: "Developers", active: false },
    { icon: Compass, label: "Onboard", active: false },
  ]

  const bottomItems = [
    { icon: Download, label: "Download Mobile App" },
    { icon: HelpCircle, label: "Feature Request" },
    { icon: HelpCircle, label: "Help Center" },
  ]

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4">
      <div className="space-y-2">
        <h3 className="text-slate-400 text-sm font-medium mb-4">Explore Apps</h3>
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer">
            <item.icon className="h-5 w-5 text-slate-400" />
            <span className="text-slate-300">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-8 space-y-2">
        {bottomItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer">
            <item.icon className="h-4 w-4 text-slate-400" />
            <span className="text-slate-400 text-sm">{item.label}</span>
          </div>
        ))}

        <div className="flex space-x-2 pt-4">
          <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">
            <span className="text-xs">X</span>
          </div>
          <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">
            <span className="text-xs">D</span>
          </div>
          <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">
            <span className="text-xs">T</span>
          </div>
          <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">
            <span className="text-xs">Y</span>
          </div>
          <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">
            <span className="text-xs">R</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
