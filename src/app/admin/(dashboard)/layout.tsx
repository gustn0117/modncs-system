import Sidebar from '@/components/admin/Sidebar'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: '관리자 | 모든CS시스템',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  )
}
