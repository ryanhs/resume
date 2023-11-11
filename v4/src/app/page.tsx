import Profile from '@/components/Profile/Profile';
import Sidebar from '@/components/Sidebar/Sidebar';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto">
      <div className="container page-border">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-4">
            <Profile />
          </div>

          <div className="col-span-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
